import Link from 'next/link'

import Logo from '@/assets/icons/logo';

export default function AppToolbar() {
  return (
    <div id="app-toolbar" className="fixed top left flex h-16 w-full items-center justify-between border-b border-foreground bg-background px-6 z-4">
      <Logo />
      <nav className="hidden sm:flex min-h-full mx-auto">
        <ul className="flex gap-6">
          <li>
            <Link href="#how-it-works" className="min-h-full flex items-center border-b-2 border-transparent hover:border-black in-[.toolbar-transparent]:hover:border-white transition-all duration-500 ease-in-out">How it works</Link>
          </li>
          <li>
            <Link href="#faq" className="min-h-full flex items-center border-b-2 border-transparent hover:border-black in-[.toolbar-transparent]:hover:border-white transition-all duration-500 ease-in-out">FAQ</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
