'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  invert?: boolean;
}

export function Logo({ className, invert = false }: LogoProps) {
  return (
    <Link href="/" className={cn("block relative", className)}>
      <Image
        src="/images/fastcl.webp"
        alt="Fast CHEETAH Logistics"
        width={150}
        height={50}
        className={cn(
          "object-contain transition-opacity hover:opacity-90",
          invert && "filter invert"
        )}
        priority
      />
    </Link>
  );
}