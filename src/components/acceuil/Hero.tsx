import { FC } from 'react';
import Container from '../ui/Container';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <section className="section-inner-spacing">
      <Container>
        <div className="   flex max-w-screen-xl flex-col items-center lg:flex-row">
          {/* First Section */}
          <div className="div-sizing  flex  flex-1  flex-col items-center lg:items-start lg:justify-start">
            <div className="   div-spacing bg-gradient-to-r from-green-300   to-purple-600 bg-clip-text  text-xs font-semibold uppercase tracking-[4px]   text-transparent lg:text-sm">
              Creche - maternelle - primaire
            </div>
            <div className="h1 div-spacing text-center capitalize lg:text-start">
              Kids{' '}
              <span className="  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent ">
                Corner{' '}
              </span>{' '}
              <div>
                School <span className="text-base font-thin italic tracking-[2px] ">Berrechid</span>
              </div>
            </div>
            <div className="div-spacing w-full text-center text-base font-light capitalize text-muted-foreground lg:text-start   ">
              Conscients de former de futures générations d’adultes confiants en leurs capacités, ouverts sur leur monde
              et faisant preuve de respect et de tolérance
            </div>
            <div className="flex w-full justify-center lg:justify-start ">
              <Button variant="default" size="lg" font="default" className="mr-4" asChild>
                <Link href="/inscription">Inscription</Link>
              </Button>
              <Button variant="ghost" size="lg" className="underline" font="default" asChild>
                <Link href="/contactez-nous">Contactez Nous</Link>
              </Button>
            </div>
          </div>
          {/* First Section */}

          {/* Second Section */}
          <div className="div-sizing  flex flex-1  flex-col items-end  justify-center  lg:flex">
            <Image
              src="/hero/hero.png"
              height={1000}
              width={1000}
              alt="Kids Corner School - Hero Image"
              className="  w-full"
            />
          </div>
          {/* Second Section */}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
