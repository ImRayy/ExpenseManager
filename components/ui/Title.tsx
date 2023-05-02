import React from 'react'

interface TitleProps {
  title: string
  label?: string
}

const Title = ({ title, label }: TitleProps) => {
  return (
    <div className='flex flex-col'>
      <span className='text-lg'>{title}</span>
      <span className='text-sm text-gray-400'>{label}</span>
    </div>
  )
}

export default Title
