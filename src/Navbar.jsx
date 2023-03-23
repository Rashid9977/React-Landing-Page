import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from 'react'





const Navbar = () => {
    const [show, setShow] = useState(true)
    const handleShow = () => {
        setShow(current => !current)
    }


    return (
        <header className='header1'>
            <div className='logo'>
                <AdbIcon className='iconadb' /> RAComp
            </div>
            {show &&
                <div className='display-menu'>
                    <Link className='menu' to={'/'}>Home</Link>
                    <Link className='menu' to={'/about'}>About</Link>
                    <Link className='menu' to={'/service'}>Service</Link>
                    <Link className='menu' to={'/blog'}>Blog</Link>
                </div>
            }

            <button onClick={handleShow} className='toggle'><MenuIcon /></button>
        </header>
    )
}

export default Navbar