'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import MenuLink from './MenuLink';
import { TLink } from '@/types/ui';

interface DropdownLinksProps {
  name: string;
  links: TLink[];
}

export function DropdownLinks({ name, links }: DropdownLinksProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">{name}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="flex flex-col">
        {links.map((route, index) => {
          return <MenuLink key={index} label={route.label} link={route.link} />;
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
