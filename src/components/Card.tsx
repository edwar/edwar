import React from 'react'
import PropTypes from 'prop-types'
import { CardProps } from 'types'
import Image from 'next/image'

export const Card = ({
  img,
  title,
  description,
  subtitle,
  items
}: CardProps) => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-5 max-w-sm dark:bg-gray-500 dark:shadow-black">
      <div className='flex justify-center'>
        <Image src={img} alt={title} width={150} height={150} />
      </div>
      <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">{title}</h3>
      <p className="text-lg py-2 dark:text-white">{description}</p>
      <h4 className="py-4 text-blue-500 font-bold">{subtitle}</h4>
      {items.map((item, key) => (
        <p key={key} className="text-gray-800 py-1 dark:text-gray-300">{item}</p>
      ))}
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  subtitle: PropTypes.string,
  items: PropTypes.array
}
