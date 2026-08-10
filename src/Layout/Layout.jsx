import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Layout({children}) {
  return (
    <>
        <Navbar/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout