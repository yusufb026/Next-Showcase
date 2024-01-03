'use client';

import Link from 'next/link';
import { Button, ButtonProps } from '../ui/button';
import { FC } from 'react';
import { TLink } from '@/types/ui';
import { DotCircleGreenGlowing } from '../ui/shapes';
import { usePathname } from 'next/navigation';

export const MenuLink: FC<TLink & ButtonProps & { glow?: boolean }> = ({ label, glow, link, ...props }) => {
  const currentPath = usePathname();

  return link ? (
    <Button asChild variant="ghost" className=" flex justify-start" {...props}>
      <Link href={link} className="text-sm font-medium  transition-colors ">
        <DotCircleGreenGlowing glow={link == currentPath} />
        {label}
      </Link>
    </Button>
  ) : (
    <Button variant="ghost" className="flex justify-start text-sm font-medium transition-colors" {...props}>
      <DotCircleGreenGlowing glow={glow || link == currentPath} />
      {label}
    </Button>
  );
};
