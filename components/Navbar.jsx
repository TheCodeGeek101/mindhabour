'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { IoMenuSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useAutoAnimate } from '@formkit/auto-animate/react';

const navLinks = [
    {
        label:'Home',
        href:'#'
    },
    {
        label:'About',
        href:'#'
    },
    {
        label:'Services',
        href:'#'
    },
    {
        label:'FAQ',
        href:'#'
    },
    {
        label:'Donations',
        href:'#'
    }
];

const Navbar = () => {
    const [animationParent] = useAutoAnimate()
    const [showMenu, setMenu] = useState(false);

    function toggleMenu(){
        setMenu(!showMenu);
    }

    return (
        <>
        <div className="bg-primary mx-auto w-full items-center flex justify-between  px-5 py-2 md:px-20 ">
            <section className="items-center flex gap-8">
                <p className="text-3xl font-semibold">
                    <Image
                    src="/mindhabour.png"
                    width={50}
                    height={50}
                    alt="logo of the site"
                    />
                </p>
                <div className="hidden md:flex my-3.5  gap-6  items-center text-gray-300">
                    {
                       navLinks.map((navLink,i) => (
                        <Link key={i} className="hover:opacity-70"  href={navLink.href}>
                            {navLink.label}
                        </Link>
                       ))
                    }
                </div>
            </section>
            <section className="hidden md:flex gap-8 items-center">
                <Link className="hover:opacity-70 text-gray-300" href={'#'}>
                    Login
                </Link>

                <Link className="w-[80%] rounded-full bg-tertiary px-6 text-center text-white hover:opacity-50 py-2" href={'#'}>
                    Sign up
                </Link>
            </section>
            {
              showMenu && <div className="fixed inset-x-0 top-24 mx-8 flex flex-col items-center rounded-xl bg-primary text-white md:hidden">
                <section className="my-8 flex flex-col items-center gap-6">
                    {
                       navLinks.map((navLink,i) => (
                        <Link key={i} className="hover:opacity-70"  href={navLink.href}>
                            {navLink.label}
                        </Link>
                       ))
                    }
                </section>
                <hr className="mx-auto w-[80%] border-gray-600"/>
                 <section className="flex flex-col w-full py-6 gap-6 items-center">
                    <Link className="hover:opacity-70" href={'#'}>
                        Login
                    </Link>

                    <Link className="w-[80%] rounded-full bg-tertiary px-6 text-center text-white hover:opacity-50 py-2" href={'#'}>
                        Sign up
                    </Link>
                 </section>
                </div>      
            }
            <button 
                ref={animationParent}
                onClick={toggleMenu} 
                className="text-4xl md:hidden text-gray-400">
                { showMenu ? <MdClose /> : <IoMenuSharp />}
            </button> 
        </div>
        </>
    );
}

export default Navbar;