import { FC } from 'react';
import Container from '../ui/Container';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ModeToggleDesktop } from './DarkMode';
import { MenuLink } from './MenuLink';
import { DropdownLinks } from './DropdownLinks';
import { TLink, TNabBarLinks } from '@/types/ui';
import SheetMenu from './SheetMenu';

interface HeaderProps {}

const dropDownLinks: TLink[] = [
  { label: 'Architecture Et Aménagement', link: '/architecture-et-amenagement' },
  { label: 'Nos Ateliers', link: '/nos-ateliers' },
  { label: 'Programme Pédagogique ', link: '/programme-pedagogique' },
  { label: 'Nos Espace', link: '/nos-espace' },
];

const navBarLinks: TNabBarLinks = {
  Acceuil: { label: 'Acceuil', link: '/' },
  Information: { label: 'Information', link: dropDownLinks },
  ContactezNous: { label: 'Contactez-Nous', link: '/contactez-nous' },
  Inscription: { label: 'Inscription', link: '/inscription' },
};

const Header: FC<HeaderProps> = () => {
  return (
    <header className="sticky top-0 px-4 text-xl ">
      <Container>
        <div className="relative flex h-16 w-full items-center justify-between ">
          <div className="flex items-center">
            <Link href="/" className="ml-4 flex lg:ml-0">
              <h3 className="text-xl font-bold">Kids Corner School</h3>
            </Link>
          </div>

          <nav className="mx-6 hidden items-center space-x-4 lg:flex lg:space-x-6">
            <MenuLink label={navBarLinks.Acceuil.label} link={navBarLinks.Acceuil.link} />
            <DropdownLinks label={navBarLinks.Information.label} links={navBarLinks.Information.link} />
            <MenuLink label={navBarLinks.ContactezNous.label} link={navBarLinks.ContactezNous.link} />
            <MenuLink label={navBarLinks.Inscription.label} link={navBarLinks.Inscription.link} />
          </nav>

          <div className="hidden items-center lg:flex">
            <ModeToggleDesktop />
          </div>
          <div className="flex items-center lg:hidden">
            <SheetMenu className="block  lg:hidden" navBarLinks={navBarLinks} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
