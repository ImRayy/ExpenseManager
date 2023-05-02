import NavigationBar from './ui/NavigationBar'
import Header from './ui/Header'
import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header userName='Ray' />
            <div className='min-h-screen bg-white pt-20 text-black'>

      {children}
            </div>
      <NavigationBar />
    </div>
  )
}

export default Layout
