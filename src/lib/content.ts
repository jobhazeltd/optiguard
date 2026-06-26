import type { IconType } from 'react-icons';
import {
  FiEye,
  FiBell,
  FiShield,
  FiUserX,
  FiCheckCircle,
  FiFileText,
  FiVideo,
  FiClock,
  FiMapPin,
  FiActivity,
  FiCpu,
  FiPhoneCall,
} from 'react-icons/fi';

export type Service = {
  icon: IconType;
  title: string;
  description: string;
  covers: string[];
};

/** Six headline services that together cover all nine offerings in COMPANY_INFO.md. */
export const SERVICES: Service[] = [
  {
    icon: FiEye,
    title: '24/7 Live CCTV Monitoring',
    description:
      'Trained operators watch your live camera feeds in real time, day and night — so threats are caught as they happen, not reviewed after the loss.',
    covers: ['Live monitoring', 'Remote security monitoring'],
  },
  {
    icon: FiBell,
    title: 'Real-Time Security Alerts',
    description:
      'The moment our team spots suspicious activity, you get an instant alert and we can trigger a live audio warning to deter the threat on site.',
    covers: ['Real-time alerts', 'Active deterrence'],
  },
  {
    icon: FiShield,
    title: 'Theft & Shoplifting Prevention',
    description:
      'We intervene early on loitering, concealment and grab-and-go behavior, stopping shrink before it leaves the building.',
    covers: ['Theft detection', 'Shoplifting prevention'],
  },
  {
    icon: FiUserX,
    title: 'Employee Theft Detection',
    description:
      'Independent eyes on registers, back rooms and stockrooms surface internal loss patterns that in-store staff rarely catch on their own.',
    covers: ['Employee theft detection'],
  },
  {
    icon: FiVideo,
    title: 'Video Verification',
    description:
      'Every alarm and event is verified by a human on live video first, cutting false dispatches and giving responders a confirmed, accurate picture.',
    covers: ['Video verification'],
  },
  {
    icon: FiFileText,
    title: 'Incident Reporting & Loss Prevention',
    description:
      'Clear, time-stamped incident reports document what happened and feed a proactive loss-prevention program you can act on.',
    covers: ['Incident reporting', 'Loss prevention'],
  },
];

export type Step = {
  number: string;
  title: string;
  description: string;
};

/** A genuine sequence — order matters — so numbered markers are warranted. */
export const STEPS: Step[] = [
  {
    number: '01',
    title: 'Connect your cameras',
    description:
      'We integrate with the CCTV and NVR systems you already own. No rip-and-replace, no new hardware to buy — onboarding takes days, not weeks.',
  },
  {
    number: '02',
    title: 'We watch live, around the clock',
    description:
      'Your feeds route to our monitoring center, where trained operators keep eyes on every camera 24/7/365, including nights, weekends and holidays.',
  },
  {
    number: '03',
    title: 'We act the moment it matters',
    description:
      'On a threat we issue live audio warnings, alert you and your team, verify events on video and escalate to authorities — then document it all.',
  },
];

export type Industry = {
  title: string;
  blurb: string;
  image: string;
  feed: string;
  feedLabel: string;
};

export const INDUSTRIES: Industry[] = [
  {
    title: 'Gas Stations',
    blurb:
      'Forecourts, pumps and store interiors watched in real time — deterring drive-offs, fuel theft and after-dark break-ins.',
    image: '/images/industry-gas-station.jpg',
    feed: '/images/feed-gas-station.jpg',
    feedLabel: 'CAM 07 · FORECOURT',
  },
  {
    title: 'Convenience Stores',
    blurb:
      'High-traffic aisles and registers monitored to stop shoplifting and register fraud before it costs you margin.',
    image: '/images/industry-convenience.jpg',
    feed: '/images/feed-convenience.jpg',
    feedLabel: 'CAM 03 · FRONT',
  },
  {
    title: 'Smoke Shops',
    blurb:
      'High-value, high-shrink inventory protected with active deterrence on the sales floor and display cases.',
    image: '/images/industry-smoke-shop.jpg',
    feed: '/images/feed-smoke-shop.jpg',
    feedLabel: 'CAM 03 · FLOOR',
  },
  {
    title: 'Warehouses',
    blurb:
      'Docks, aisles and yards covered to catch internal theft, unauthorized access and after-hours intrusion.',
    image: '/images/feed-warehouse.jpg',
    feed: '/images/feed-warehouse.jpg',
    feedLabel: 'CAM 07 · WAREHOUSE',
  },
];

/** Additional covered verticals (no dedicated photography). */
export const OTHER_VERTICALS = [
  'Retail Stores',
  'Commercial Buildings',
  'Distribution Centers',
  'Shopping Centers',
];

export type Differentiator = { icon: IconType; title: string; description: string };

export const DIFFERENTIATORS: Differentiator[] = [
  {
    icon: FiPhoneCall,
    title: 'Live human operators',
    description:
      'Real people watching live, not just motion clips emailed after the fact. Judgment that software alone cannot replicate.',
  },
  {
    icon: FiActivity,
    title: 'Active, real-time deterrence',
    description:
      'Live audio warnings stop incidents while they are happening — most intruders leave the moment they realize they are being watched.',
  },
  {
    icon: FiCpu,
    title: 'Works with your cameras',
    description:
      'We connect to your existing CCTV. No costly hardware swap and no long install — you keep the system you already trust.',
  },
  {
    icon: FiMapPin,
    title: 'Nationwide coverage',
    description:
      'Remote monitoring built for businesses anywhere in the United States, from a single store to a multi-site footprint.',
  },
  {
    icon: FiFileText,
    title: 'Documented every time',
    description:
      'Time-stamped incident reports give you a clear record for staff, insurers and law enforcement.',
  },
  {
    icon: FiCheckCircle,
    title: 'Human-verified alerts',
    description:
      'Every event is confirmed on live video before escalation, cutting false alarms and wasted dispatches.',
  },
];

export type Stat = { value: string; label: string; icon: IconType };

/** Honest, definitional stats — no invented performance percentages. */
export const STATS: Stat[] = [
  { value: '24/7', label: 'Live monitoring, every day of the year', icon: FiClock },
  { value: '3-Day', label: 'Free trial — see it before you commit', icon: FiCheckCircle },
  { value: 'U.S.', label: 'Nationwide remote coverage', icon: FiMapPin },
  { value: 'Live', label: 'Human verification on every alert', icon: FiEye },
];

export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: 'Do I need to buy new cameras?',
    answer:
      'No. OptiGuard connects to the CCTV and NVR systems you already have. If your cameras can stream, we can monitor them — there is no rip-and-replace.',
  },
  {
    question: 'What happens when your team sees a threat?',
    answer:
      'Our operators can trigger a live audio warning on site to deter the intruder, alert you and your staff instantly, verify the event on video and escalate to local authorities when needed — all in real time.',
  },
  {
    question: 'Is the monitoring really live, or just recordings?',
    answer:
      'It is live. Trained operators watch your feeds in real time, 24/7/365. Recordings only tell you what you already lost; live monitoring lets us stop it as it happens.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Most businesses are onboarded in days, not weeks. Because we use your existing cameras, there is no hardware install to schedule.',
  },
  {
    question: 'Which businesses do you monitor?',
    answer:
      'Gas stations, convenience stores, smoke shops, retail stores, warehouses, distribution centers, commercial buildings and shopping centers across the United States.',
  },
  {
    question: 'How does the free trial work?',
    answer:
      'Start with a FREE 3-Day Trial of live monitoring on your own cameras. There is no long-term commitment to try it — you see the value first, then decide.',
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  sample: true;
};

/**
 * SAMPLE copy only. Per PROJECT_RULES.md, no real testimonials are used until
 * the client supplies verified quotes. These are clearly flagged in the UI.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Within the trial week the team caught two grab-and-go attempts in real time. The live audio warning stopped both before anything left the store.',
    name: 'Store Owner',
    role: 'Convenience Store · Sample',
    sample: true,
  },
  {
    quote:
      'Overnight drive-offs at the pumps dropped off almost immediately once the warnings started. It feels like having a guard on site without the cost of one.',
    name: 'Operator',
    role: 'Gas Station · Sample',
    sample: true,
  },
  {
    quote:
      'The incident reports are detailed and time-stamped, which made our insurance claim straightforward. We finally have eyes on the back room too.',
    name: 'General Manager',
    role: 'Warehouse · Sample',
    sample: true,
  },
];
