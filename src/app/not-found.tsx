import Link from 'next/link';
import { Logo } from '@/components/common/Logo';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <Logo href={null} />
      <p className="font-mono text-sm uppercase tracking-[0.25em] text-primary">Error 404</p>
      <h1 className="text-3xl font-semibold sm:text-4xl">This feed is offline</h1>
      <p className="max-w-md text-muted">
        The page you&apos;re looking for can&apos;t be found. Let&apos;s get you back to safety.
      </p>
      <Button href="/">Back to home</Button>
    </div>
  );
}
