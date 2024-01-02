import { FC } from 'react';
import Container from '../ui/Container';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ModeToggle } from './DarkMode';
import MenuLink from './MenuLink';
import { DropdownLinks } from './DropdownLinks';
import { TLink } from '@/types/ui';
import SheetMenu from './SheetMenu';

interface HeaderProps {}

const links: TLink[] = [
  { label: 'Architecture Et Aménagement', link: '/architecture-et-amenagement' },
  { label: 'Nos Ateliers', link: '/nos-ateliers' },
  { label: 'Programme Pédagogique ', link: '/programme-pedagogique' },
  { label: 'Information', link: '/info' },
];

const Header: FC<HeaderProps> = () => {
  return (
    <header className="border-b px-4 py-3">
      <Container>
        <div className="relative flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <SheetMenu className="block  md:hidden" links={links} />

            <Link href="/" className="ml-4 flex lg:ml-0">
              <h3 className="text-xl font-bold">Name Of Brand</h3>
            </Link>
          </div>

          <nav className="mx-6 hidden items-center space-x-4 md:flex lg:space-x-6">
            <MenuLink label="Acceuil" link="/" />
            <DropdownLinks name="Info" links={links} />
            <MenuLink label="Contactez-Nous" link="/contactez-ous" />
            <MenuLink label="Inscription" link="/inscription" />
          </nav>

          <div className="flex items-center">
            <ModeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
