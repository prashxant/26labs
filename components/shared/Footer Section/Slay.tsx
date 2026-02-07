
import { MessageIcon } from '@/components/icons/message';
import { LetsConnect } from './LetsConnetc'
import { Socials } from './Socials';
import HomeIcon from '@/components/ui/HomeIcon';
import PhoneVolume from '@/components/ui/PhoneIcon';



export const Slay = () => {
  return (
    <div className="flex w-full justify-between items-end">
      <LetsConnect />
      <div className="flex gap-8 flex-col">
        <div className="flex justify-between items-center tex-start">
          <div className="flex gap-2 items-center">
            <PhoneVolume className="size-6 md:size-8 text-blue2 transition-colors group-hover:text-blue-600/90" />
            <p>+91 91018 66930</p>
          </div>
          <div className="flex gap-2 items-center">
            <HomeIcon className="size-6 md:size-8 font-bold text-blue2 transition-colors group-hover:text-blue-600/90" />
            <p>
              CIT Kokrajhar,Balagan <br /> 783370 Kokrajhar,
              <br /> Assam
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-4 items-center">
          <div className="flex items-center">
            <MessageIcon /> <p>sales@26labs.live</p>
          </div>
          <Socials />
        </div>
      </div>
    </div>
  );
}
