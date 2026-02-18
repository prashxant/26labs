import { MessageIcon } from '@/components/icons/message';
import { LetsConnect } from './LetsConnetc'


export const Slay = () => {
  return (
  
    <div className="flex flex-col w-full justify-center items-center gap-4">  
      <LetsConnect /> 
      <div className="flex items-center gap-2 text-lg sm:text-xl">
        <MessageIcon /> 
        <a
        href="mailto:sales@26labs.live"
        className="hover:underline cursor-pointer" >
        sales@26labs.live
        </a>
      </div>
    </div>
  );
}