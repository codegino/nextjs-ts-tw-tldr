import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <nav className="flex gap-2 mb-4">
      <Link href="/" className="underline">
        Home
      </Link>
      <Link href="/about" className="underline">
        About
      </Link>
    </nav>
  );
}

export default Header;
