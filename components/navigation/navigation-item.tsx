'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavigationItemProps {
  href: string;
  label: string;
}

export function NavigationItem({ href, label }: NavigationItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200',
        isActive
          ? 'text-gray-900 border-b-2 border-gray-900'
          : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
      )}
    >
      {label}
    </Link>
  );
}