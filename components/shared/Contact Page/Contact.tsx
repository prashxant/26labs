import React from 'react'
import { Typography } from '../Typography';
import { ContactDetails } from './ContactDetails';

export const Contact = () => {
  return <div className="h-screen max-w-4xl mx-auto flex flex-col justify-center
  items-start  ">
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
