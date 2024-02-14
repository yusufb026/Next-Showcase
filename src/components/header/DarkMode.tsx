'use client';

import React, { FC } from 'react';
import { MoonIcon , SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button, ButtonProps } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import { MenuLink } from './MenuLink';
import { DotCircleGreenGlowing } from '../ui/shapes';

export const ModeToggleDesktop: FC<ButtonProps> = ({ ...props }) => {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuCheckboxItem checked={theme == 'light'} onClick={() => setTheme('light')}>
          Light
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem checked={theme == 'dark'} onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem checked={theme == 'system'} onClick={() => setTheme('system')}>
          System
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const ModeToggleMobile: FC<any> = ({ closeMobileSheet }) => {
  const { setTheme, theme } = useTheme();

  return (
    <Accordion type="single" collapsible className="px-4 ">
      <AccordionItem value="item-1" className="my-0 border-b-0">
        <AccordionTrigger className="flex items-center justify-start hover:no-underline ">
          <DotCircleGreenGlowing glow={false} />
          <span className="mr-2  ">Mode</span>
        </AccordionTrigger>
        <AccordionContent>
          <MenuLink
            label="Light"
            glow={theme == 'light'}
            className="w-full justify-start"
            onClick={() => {
              setTheme('light');
              closeMobileSheet();
            }}
          />
        </AccordionContent>
        <AccordionContent>
          <MenuLink
            label="Dark"
            glow={theme == 'dark'}
            className="w-full justify-start"
            onClick={() => {
              setTheme('dark');
              closeMobileSheet();
            }}
          />
        </AccordionContent>
        <AccordionContent>
          <MenuLink
            label="System"
            glow={theme == 'system'}
            className="w-full justify-start"
            onClick={() => {
              setTheme('system');
              closeMobileSheet();
            }}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
