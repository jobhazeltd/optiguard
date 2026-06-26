/**
 * OptiGuard Monitoring — website lead capture.
 *
 * Receives form submissions from the site's /api/lead route, appends each lead
 * to the first sheet, and emails a notification to NOTIFY_EMAIL.
 *
 * ── SETUP ──────────────────────────────────────────────────────────────────
 * 1. Create a new Google Sheet (this becomes your leads database).
 * 2. In the Sheet: Extensions → Apps Script. Delete any boilerplate and paste
 *    this whole file in.
 * 3. Change NOTIFY_EMAIL below if you want notifications somewhere else.
 * 4. Click Deploy → New deployment → gear icon → "Web app".
 *      • Description:        OptiGuard leads
 *      • Execute as:         Me
 *      • Who has access:     Anyone
 *    Authorize when prompted.
 * 5. Copy the "Web app URL" it gives you.
 * 6. In your website project, put that URL in .env.local:
 *      LEAD_WEBHOOK_URL=https://script.google.com/macros/s/XXXX/exec
 *    On Vercel, add the same key under Project → Settings → Environment Variables.
 *
 * Tip: after editing this script later, you must Deploy → Manage deployments →
 * edit the existing one and pick "New version" for changes to go live.
 */

const NOTIFY_EMAIL = 'Optiguardmonitoring@gmail.com';
const HEADERS = ['Submitted At', 'Name', 'Business', 'Type', 'Phone', 'Email', 'Message', 'Source'];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // Write a header row the first time.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    }

    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.name || '',
      data.business || '',
      data.type || '',
      data.phone || '',
      data.email || '',
      data.message || '',
      data.source || 'website',
    ]);

    sendNotification(data);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function sendNotification(data) {
  const subject = 'New free-trial request — ' + (data.name || 'Website lead');
  const body = [
    'New lead from the OptiGuard Monitoring website:',
    '',
    'Name:     ' + (data.name || '—'),
    'Business: ' + (data.business || '—'),
    'Type:     ' + (data.type || '—'),
    'Phone:    ' + (data.phone || '—'),
    'Email:    ' + (data.email || '—'),
    'Message:  ' + (data.message || '—'),
    '',
    'Submitted: ' + (data.submittedAt || new Date().toISOString()),
  ].join('\n');

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: subject,
    body: body,
    replyTo: data.email || NOTIFY_EMAIL,
  });
}

// Lets you open the Web app URL in a browser to confirm it's live.
function doGet() {
  return json({ ok: true, service: 'OptiGuard lead capture' });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
