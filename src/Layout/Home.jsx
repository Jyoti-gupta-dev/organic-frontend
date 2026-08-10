import React from 'react'
import Navabar from "../Components/Navbar"

function Home({ Childeren }) {
    return (
        <>
            <div>
                <Sidebar />
                <Childeren />
                <footer />
            </div>
        </>
    )
}

export default Home