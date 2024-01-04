'use client';

import React, { FC, useCallback, useEffect, useState } from 'react';
import { type CarouselApi } from '@/components/ui/carousel';
import Container from '../ui/Container';
import { TAtelierList } from '@/types/ui';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { twMerge } from 'tailwind-merge';

interface NosAteliersProps {}

const ateliers: TAtelierList = [
  {
    title: 'Atelier Montessori',
    description: '1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..',
    image: '/ateliers/atelier1.jpeg',
  },
  {
    title: "Atelier d'éveil musical et de danse",
    description:
      " has been the industry's standard dummy text ever since the  is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    image: '/ateliers/atelier2.jpeg',
  },
  {
    title: 'Atelier de yoga et psychomotricité',
    description:
      ' It has remaining essentially unchanged. It was popularised in the 1960s with the release of  survived not only five centuries, but also the leap into electronic typesetting,  Letraset s',
    image: '/ateliers/atelier3.jpeg',
  },
  {
    title: "Atelier d'éveil scientifique",
    description:
      ' ypesetting, remaining essentially unchanged. It was popularised in the It has survived not only five centuries, but also the leap into electronic t 1960s with the release of Letraset s',
    image: '/ateliers/atelier4.jpeg',
  },
];

const NosAteliers: FC<NosAteliersProps> = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const scrollPrev = useCallback(() => {
    if (api) api.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    if (api) api.scrollNext();
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="section-inner-spacing  ">
      <Container>
        <div className="flex  flex-col-reverse items-center justify-center gap-5 lg:flex-row lg:gap-10">
          {/* First Section */}
          <div className="div-sizing flex  flex-1     ">
            <Carousel
              setApi={setApi}
              className="  w-full  "
              opts={{
                align: 'start',
              }}
              plugins={[
                Autoplay({
                  delay: 50000,
                }),
              ]}
            >
              <CarouselContent>
                {ateliers.map((item, index) => {
                  return (
                    <CarouselItem key={index} className="md:basis-1/1">
                      <Image
                        src={item.image}
                        height={1000}
                        width={1000}
                        alt="Kids Corner School Berrechid - Ateliers Images "
                        className=" aspect-video w-full rounded-2xl "
                      />
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
          {/* First Section */}

          {/* Second Section */}
          <div className=" div-sizing flex  h-full flex-1 flex-col items-center justify-between  px-10     ">
            <div className="div-spacing h2 text-start "> {ateliers[current].title}</div>

            <div className=" div-spacing   flex flex-col text-base font-light capitalize text-muted-foreground ">
              <span className="p-2">{ateliers[current].description}</span>
            </div>

            <div className="flex w-full  items-center justify-between ">
              <Button variant="outline" size="lg" className="" font="default" asChild>
                <Link href="/nos-ateliers">Nos Atelier</Link>
              </Button>
              <div className="flex">
                <ArrowLeft onClick={() => scrollPrev()} className="mr-10 cursor-pointer opacity-80 active:opacity-95" />
                <ArrowRight onClick={() => scrollNext()} className="cursor-pointer opacity-80 active:opacity-95" />
              </div>
            </div>
          </div>
          {/* Second Section */}
        </div>
      </Container>
    </section>
  );
};

export default NosAteliers;
