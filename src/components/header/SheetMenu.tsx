'use client';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { TNabBarLinks } from '@/types/ui';
import { FC, HTMLAttributes, useState } from 'react';
import { MenuLink } from './MenuLink';
import { Menu } from 'lucide-react';
import { ModeToggleMobile } from './DarkMode';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { usePathname } from 'next/navigation';
import { DotCircleGreenGlowing } from '../ui/shapes';

interface SheetMenuProps extends HTMLAttributes<HTMLDivElement> {
  navBarLinks: TNabBarLinks;
}

const SheetMenu: FC<SheetMenuProps> = ({ navBarLinks, ...props }) => {
  const currentPath = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <div {...props}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="text-left ">Explorer</SheetTitle>
            <SheetDescription className="text-left text-xs ">Explorer Nos Sections...</SheetDescription>
          </SheetHeader>

          <div className="flex flex-col space-y-1 pt-7">
            <MenuLink
              label={navBarLinks.Acceuil.label}
              link={navBarLinks.Acceuil.link}
              onClick={() => setOpen(false)}
            />

            <Accordion type="single" collapsible className="  px-4 ">
              <AccordionItem value="item-1" className="my-0 border-b-0">
                <AccordionTrigger className="flex items-center justify-start hover:no-underline">
                  <DotCircleGreenGlowing
                    glow={navBarLinks.Information.link.find((element) => element.link == currentPath) ? true : false}
                  />

                  <span className="mr-2">{navBarLinks.Information.label}</span>
                </AccordionTrigger>
                {navBarLinks.Information.link.map((route, index) => {
                  return (
                    <AccordionContent key={index}>
                      <MenuLink label={route.label} link={route.link} onClick={() => setOpen(false)} />
                    </AccordionContent>
                  );
                })}
              </AccordionItem>
            </Accordion>

            <MenuLink
              label={navBarLinks.ContactezNous.label}
              link={navBarLinks.ContactezNous.link}
              onClick={() => setOpen(false)}
            />
            <MenuLink
              label={navBarLinks.Inscription.label}
              link={navBarLinks.Inscription.link}
              onClick={() => setOpen(false)}
            />
          </div>

          <ModeToggleMobile closeMobileSheet={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SheetMenu;
