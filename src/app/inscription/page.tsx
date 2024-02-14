import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Steps from '@/components/ui/steps';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="container mx-auto mt-10 flex ">
      <div className=" hidden items-center justify-center md:flex md:flex-1">
        <Image src="/register.svg" height={100} width={100} className=" h-5/6 w-5/6 " alt="demo" />
      </div>
      <div className=" flex flex-1 items-center justify-center">
        <div className="w flex min-w-[320px] max-w-[390px] flex-col space-y-5 rounded-lg   p-5 shadow-2xl ">
          <Steps step={0} />
          <Input placeholder="Nom et prenom" />
          <Input placeholder="Date de naissance" />
          <Input placeholder="Classe" />
          <Input placeholder="Addresse" />
          <Button variant="default" size="lg" font="default" className="mr-4">
            Valider
          </Button>
        </div>
      </div>
    </div>
  );
}
