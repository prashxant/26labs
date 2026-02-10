import { MessageIcon } from '@/components/icons/message';
import { LetsConnect } from './LetsConnetc'
import HomeIcon from '@/components/ui/HomeIcon';
import PhoneVolume from '@/components/ui/PhoneIcon';

export const Slay = () => {
  return (
  
    <div className="flex flex-col w-full justify-center items-center gap-4">  
      <LetsConnect /> 
      <div className="flex items-center gap-2 text-lg sm:text-xl">
        <MessageIcon /> 
        <p>sales@26labs.live</p>
      </div>

    </div>
  );
}