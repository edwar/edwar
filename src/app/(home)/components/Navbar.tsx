import Link from 'next/link';
import React from 'react'
import { SlSocialGithub, SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
// import { IoNewspaperOutline } from "react-icons/io5";

export default function Navbar() {
    const social = [
        {
            id: 0,
            link: "https://www.linkedin.com/in/edwaramaya/",
            label: "Linkedin",
            icon: SlSocialLinkedin
        },
        {
            id: 1,
            link: "https://github.com/edwar/",
            label: "Github",
            icon: SlSocialGithub
        },
        {
            id: 2,
            link: "https://twitter.com/ed_amaya_diaz/",
            label: "X",
            icon: SlSocialTwitter
        }

    ]
  return (
    <nav className='py-10 flex justify-between items-center'>
      <h1 className='font-bold text-2xl underline underline-offset-8 decoration-slate-600 -rotate-2'>Edwar Amaya</h1>
      <div className='flex items-center gap-5'>
        {/* <Link
          href="/cv"
          aria-label="Hoja de vida"
        >
          <IoNewspaperOutline className='w-5 h-5 hover:scale-125 transition-all' />
        </Link> */}
        {social.map((social) => {
            const Icon = social.icon;
            return <Link
                href={social.link}
                key={social.id}
                aria-label={social.label}
                target='_blank'
                
            >
                <Icon className='w-5 h-5 hover:scale-125 transition-all' />
            </Link>
        })}
      </div>
    </nav>
  )
}
