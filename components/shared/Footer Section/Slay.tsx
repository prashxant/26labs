
import { MessageIcon } from '@/components/icons/message';
import { LetsConnect } from './LetsConnetc'
import { Socials } from './Socials';
import HomeIcon from '@/components/ui/HomeIcon';
import PhoneVolume from '@/components/ui/PhoneIcon';



export const Slay = () => {
  return (
    <div className="flex flex-col  sm:flex-row w-full justify-center items-center sm:items-end">
      <LetsConnect />
      <div className="flex gap-8 flex-col">
        </div>
        <div className="flex flex-col pt-12 sm:pt-0 sm:flex-row justify-between gap-4 items-center">
          <div className="flex items-center">
            <MessageIcon /> <p>sales@26labs.live</p>
          </div>
          <Socials />
        </div>
      </div>

  );
}
