'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MenuLink } from './MenuLink';
import { TLink } from '@/types/ui';
import { DotCircleGreenGlowing } from '../ui/shapes';
import { usePathname } from 'next/navigation';

interface DropdownLinksProps {
  label: string;
  links: TLink[];
}

export function DropdownLinks({ label, links }: DropdownLinksProps) {
  const [open, setOpen] = useState(false);

  const currentPath = usePathname();

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <DotCircleGreenGlowing glow={links.find((element) => element.link == currentPath) ? true : false} />
          {label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="flex flex-col">
        {links.map((route, index) => {
          return <MenuLink onClick={() => setOpen(false)} key={index} label={route.label} link={route.link} />;
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
