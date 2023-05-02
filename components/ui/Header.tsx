import { Calendar, ChevronDown } from 'lucide-react'
import React from 'react'

interface HeaderProps {
  userName: string
}
const Header = ({ userName }: HeaderProps) => {
  return (
    <div
      className='fixed top-0 z-50 flex h-14 w-full items-center justify-between px-4
            text-sm text-black'
    >
      <div>
        <span className='font-extrabold'>Hi {userName}</span>
      </div>
      <div className='flex items-center gap-4'>
        <span className='flex gap-1 rounded-full border px-4 py-1'>
          <Calendar size={16} />
          May
        </span>
        <span className='relative flex h-8 w-8 items-center rounded-full bg-gray-100'>
          <ChevronDown size={16} className='absolute mx-auto w-full' />
        </span>
      </div>
    </div>
  )
}

export default Header
