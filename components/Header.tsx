'use client';
import { useState, useEffect } from 'react'
import logo from '@/public/images/logo.png'
import Image from 'next/image';
import cn from '@/lib/utils';

function Header(){

    const [hambOpen, setHambOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menuOpen]);

    const handleClick = ()=> {
        setHambOpen(!hambOpen);
        setMenuOpen(!menuOpen);
    }

    const handleClickMenu = ()=> {
        setHambOpen(false);
        setMenuOpen(false);
    }

    return(
        <>
            <header className={cn("bg-white w-full px-6 py-4", hambOpen ? 'open-hamb' : '')}>
            <Image src={logo} alt="logo" className='w-14 h-14' />
            </header>
        </>
    )
}

export default Header;