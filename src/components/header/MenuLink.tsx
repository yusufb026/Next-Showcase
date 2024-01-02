import Link from 'next/link';
import { Button } from '../ui/button';
import { FC } from 'react';
import { TLink } from '@/types/ui';

const MenuLink: FC<TLink> = ({ label, link }) => {
  return link ? (
    <Button asChild variant="ghost" className="flex justify-start">
      <Link href={link} className="text-sm font-medium  transition-colors ">
        {label}
      </Link>
    </Button>
  ) : (
    <Button variant="ghost" className="flex justify-start text-sm font-medium transition-colors">
      {label}
    </Button>
  );
};

export default MenuLink;
