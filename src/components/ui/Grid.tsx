import React from 'react'
import Mac from './Mac';

type Project = {
    id: number;
    src: string;
    alt: string;
    url: string
}

interface Props {
    projects: Project[]
}

export default function Grid({ projects }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-10 py-16">
        {projects.map(({ alt, id, src, url }) => {
            return (
                <a href={url} target='_blank' className='min-w-[351px] md:min-w-[597px]' key={id}>
                    <Mac alt={alt} src={src} />
                </a>
            );
        })}
    </div>
  )
}
