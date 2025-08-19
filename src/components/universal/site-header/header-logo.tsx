
import Link from 'next/link';
import { Logo } from '@/components/primitives/logo/logo';

export function HeaderLogo() {
  return (
    <Link href="/" className="inline-block relative z-[104]">
      <Logo className="h-12 w-[150px]" />
    </Link>
  );
}
