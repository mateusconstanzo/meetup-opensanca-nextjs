import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      &nbsp;
      <Link href="/users">
        <a>Usuários</a>
      </Link>
    </nav>
  );
};

export default NavBar;