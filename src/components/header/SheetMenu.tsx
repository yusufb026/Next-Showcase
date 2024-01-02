import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { TLink } from '@/types/ui';
import { FC, HTMLAttributes } from 'react';
import MenuLink from './MenuLink';
import { Menu } from 'lucide-react';

interface SheetMenuProps extends HTMLAttributes<HTMLDivElement> {
  links: TLink[];
}

const SheetMenu: FC<SheetMenuProps> = ({ links, ...props }) => {
  return (
    <div {...props}>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Explorer</SheetTitle>
            {links.map((route, index) => {
              return <MenuLink key={index} label={route.label} link={route.link} />;
            })}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SheetMenu;
