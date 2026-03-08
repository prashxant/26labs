

import { HeroSvg } from '@/components/icons/HeroSvg';
import { Contact } from '@/components/contact/contactPage/Contact'
import React from 'react'
function page() {
  return (
    <div className="min-h-screen pt-20 sm:pt-30  p-4">
        <div className=" absolute -z-1000">
                    <HeroSvg/>
                  </div>
      <Contact />
    </div>
  );
}

export default page
