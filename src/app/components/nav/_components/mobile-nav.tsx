import { MenuIcon, MoonIcon } from 'lucide-react';
import Link from 'next/link';

import { Toggle } from '@/components/ui/toggle';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
const MobileNav = () => {
  return (
    <>
      <Toggle aria-label="Toggle dark mode" className="rounded-full">
        <MoonIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </Toggle>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden"
          >
            <MenuIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="md:hidden">
          <div className="grid gap-4 p-4">
            <Link
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;