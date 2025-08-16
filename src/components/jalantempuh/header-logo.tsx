
import Link from 'next/link';
import { Logo } from '@/components/logo';

export function HeaderLogo() {
  return (
    <Link href="/" className="inline-block relative z-[104]">
      <Logo className="h-12 w-[190px]" />
    </Link>
  );
}
