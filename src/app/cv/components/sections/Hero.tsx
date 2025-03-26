import React from 'react'
import { RESUME_DATA } from "@/data/resume-data"
import Image from 'next/image';
import { IoMailOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { SlSocialGithub, SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import { TbWorldWww } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";
import Section from '../Section';
import { IconType } from 'react-icons';

const { basics: { name, label, image, location, profiles, phone, email, url } } = RESUME_DATA
const { city, region } = location


export default function Hero() {
  const SOCIAL_ICONS: Record<string, any> = {
    GitHub: SlSocialGithub,
    LinkedIn: SlSocialLinkedin,
    X: SlSocialTwitter,
    Web: TbWorldWww
  }

const linkedinInfo = profiles.find(({ network }) => network === "LinkedIn")
const linkedinUrl = linkedinInfo?.url

const printInfo = [email, phone, linkedinUrl, url].filter(Boolean).join(" • ")

  return (
    <Section>
      <div className='flex justify-between items-start gap-3'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-[2rem] font-bold'>{name}</h1>
          <h2 className='text-[#444] text-[1.3rem] font-normal text-balance'>{label}</h2>
          <span className='flex items-center gap-1 text-sm tracking-tighter'>
            <BiWorld /> {city}, {region}
          </span>
          <footer className='flex gap-3 text-[0.65rem] mt-2 print'>
            {printInfo}
          </footer>
          <footer className='flex gap-3 mt-2 no-print'>
            {
              email && (
                <a
                  href={`mailto:${email}`}
                  title={`Enviar un correop electrónico a ${name}`}
                  target='_blank'
                >
                  <div className='border-solid border-[0.5px] border-slate-200 rounded-sm p-1 text-slate-500 hover:bg-slate-200 transition-all'>
                      <IoMailOutline className='w-8 h-8' />
                  </div>
                </a>
              )
            }
            {
              phone && (
                <a
                  href={`tel:${phone}`}
                  title={`Llamar por telefono a ${name} al número ${phone}`}
                  target='_blank'
                >
                  <div className='border-solid border-[0.5px] border-slate-200 rounded-sm p-1 text-slate-500 hover:bg-slate-200 transition-all'>
                      <IoPhonePortraitOutline className='w-8 h-8' />
                  </div>
                </a>
              )
            }
            {profiles.map(({ network, url, username }) => {
              const Icon: IconType = SOCIAL_ICONS[network]

              return (
                <a
                  key={network}
                  href={url}
                  target='_blank'
                >
                  <div className='border-solid border-[0.5px] border-slate-200 rounded-sm p-1 text-slate-500 hover:bg-slate-200 transition-all'>
                        <Icon className='w-8 h-8' />
                  </div>
                </a>
              )
            })}
          </footer>
        </div>
        <figure className='border-[0.5px] border-slate-500 rounded-md'>
          <Image className='aspect-square object-cover object-top' src={image} width={150} height={150} alt={`Imagen de ${name} al correo ${email}`} />
        </figure>
      </div>
    </Section>
  )
}
