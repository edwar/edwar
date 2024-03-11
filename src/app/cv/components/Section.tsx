import React, { ReactNode } from 'react'

interface Props {
    title?: string;
    children?: ReactNode
}

export default function Section({ title, children }: Readonly<Props>) {
  return (
    <section className='mb-10'>
      {title && <h2 className='mb-5 font-bold leading-6 text-3xl'>{title}</h2>}
      {children}
    </section>
  )
}
