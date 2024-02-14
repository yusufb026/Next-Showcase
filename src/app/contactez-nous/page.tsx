import Chip from '@/components/ui/Chip';
import ContactInfo from '@/components/ui/ContactInfo';
import TextArea from '@/components/ui/TextArea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Linkedin, MailCheck, Phone, Pin, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="container mx-auto mt-10 flex  ">
      <div className=" flex flex-1   items-center justify-start">
        <div className="flex  flex-col space-y-3">
          <ContactInfo icon={<MailCheck />} information={'hello@example.com'} title={'Email'} />

          <ContactInfo icon={<Phone />} information={'(907) 555-0101'} title={'Phone'} />

          <ContactInfo
            icon={<Pin />}
            information={'3891 Ranchview Dr. Richardson, California 62639'}
            title={'Address'}
          />

          <div className="m-2 text-sm text-gray-800">Follow us</div>
          <div className="flex space-x-4">
            <Facebook fontSize="small" />
            <Instagram fontSize="small" />
            <Linkedin fontSize="small" />
            <Twitter fontSize="small" />
          </div>
        </div>

        <Image src="/contact1.svg" height={100} alt="demo" width={100} className=" w-3/6   " />
      </div>

      <div className=" flex flex-1 items-center justify-center">
        <div className="w flex min-w-[420px] max-w-[340px] flex-col rounded-lg shadow-2xl ">
          <div className="m-5 text-lg font-semibold text-gray-900 ">Écrivez-nous</div>
          <div className="mx-5 mb-4 text-sm text-gray-500 ">Nous répondons normalement dans les 2 jours ouvrables</div>
          <div className="mx-5 mb-4 flex items-center justify-center ">
            <Chip title="urgent" active={true} />
            <Chip title="question" />
            <Chip title="demande" />
          </div>
          <div className="flex">
            <Input placeholder="Nom" /> <Input placeholder="Prenom" />
          </div>
          <div className="flex">
            <Input placeholder="Email" /> <Input placeholder="Sujet" />
          </div>
          <TextArea placeholder="Message" />
          <Button type="button"> Valider </Button>
        </div>
      </div>
    </div>
  );
}
