import React from 'react'
import { Typography } from "@/components/ui/Typography";
import { ContactDetails } from './ContactDetails';

export const Contact = () => {
  return <div className="h-screen max-w-4xl mx-auto flex flex-col justify-center
  items-center  ">
    <Typography
      variant='h2'
      className=''
      line1='Lets start your'
      line2='project'
      popUp='Today'
      />
    <ContactDetails/>
  </div>;
}
