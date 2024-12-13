'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { NavigationItem } from './navigation-item';
import { Logo } from '@/components/ui/logo';

const navigationItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Qui sommes nous ?', href: '/qui-sommes-nous' },
  { label: 'Nos services', href: '/nos-services' },
  { label: 'Contactez nous', href: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Logo />
            </div>

            <div className="hidden md:flex md:items-center md:space-x-8">
              {navigationItems.map((item) => (
                <NavigationItem key={item.href} {...item} />
              ))}
              <Link href="/contact">
                <Button size="lg">Devis Gratuit</Button>
              </Link>
            </div>

            <button
              type="button"
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Ouvrir le menu</span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <div
          className={cn(
            'md:hidden transition-all duration-300 ease-in-out absolute w-full bg-white border-b',
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          )}
          id="mobile-menu"
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 pb-3">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full" size="lg">
                  Devis Gratuit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content from being hidden under fixed navbar */}
      <div className="h-20" />
    </>
  );
}