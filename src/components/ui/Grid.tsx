import React from 'react'
import Mac from './Mac';

type Project = {
    id: number;
    src: string;
    alt: string;
}

interface Props {
    projects: Project[]
}

export default function Grid({ projects }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-5 py-16">
        {projects.map(({ alt, id, src}) => {
            return (
                <div className='min-w-[351px] md:min-w-[597px]' key={id}>
                    <Mac alt={alt} src={src} />
                </div>
            );
        })}
    </div>
  )
}
