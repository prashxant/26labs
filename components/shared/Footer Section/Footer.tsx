import React from 'react'
import { Phool } from '../Phool'
import { Newsletter } from './Newsletter';
import {  NewSvg } from '@/components/icons/New';




export const Footer = () => {
  return (
    <footer className="flex py-32 gap-12 flex-col justify-center items-center ">
      <Phool
        src="union.svg"
        Line1="Based out of  Dubai"
        Line2="Designing Worldwide"
      />
      <Newsletter />

      
    </footer>
  );
}
