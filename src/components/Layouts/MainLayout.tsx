import React from 'react'
import { Header } from '../pages/Header'
import Footer from '../pages/Footer'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Header/>
    <main className='' >{children}</main>
    <Footer/>
    </>
  )
}

export default MainLayout
