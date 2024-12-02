'use client';

import { SignOutButton, useAuth } from "@clerk/nextjs";

import { Menu, X } from "lucide-react";
import { Lobster, Pacifico } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const lobster = Lobster({
    subsets: ["latin"],
    weight: "400",
});

const pacifico = Pacifico({
    subsets: ["latin"],
    weight: "400",
});

export default function NavBar() {
    const { userId } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
            <nav className="w-full h-16 shadow-sm shadow-white fixed backdrop-blur-sm bg-black/30 z-10 top-0">
                <div className="flex items-center justify-between px-4 py-2 md:px-6">
                    {/* Logo Section */}
                    <div className="flex items-center gap-2">
                        <Image src="/logo12.svg" alt="Company Logo" width={40} height={40} />
                        <span className={`${lobster.className} text-2xl text-white`}>Docu</span>
                        <span className={`${pacifico.className} text-xl text-white`}>Cart</span>
                    </div>

                    {/* Desktop Navigation Links */}
                    <ul className="hidden md:flex space-x-6 items-center font-bold text-white">
                        <li className="cursor-pointer hover:underline"><Link href={"/"} /></li>
                        <li className="cursor-pointer hover:underline">About</li>
                        <li className="cursor-pointer hover:underline"><Link href={"/customer"}>
                            Products
                        </Link></li>
                        <li className="cursor-pointer hover:underline">Contact</li>
                    </ul>

                    {/* Authentication Button */}
                    <div className="text-white hidden md:block">
                        {userId ? (
                            <div className=" bg-pink-600 hover:bg-purple-600 border-2 border-white px-4 py-1">
                                <SignOutButton redirectUrl="/sign-in" />
                            </div>
                        ) : (
                            <div className=" bg-pink-600 hover:bg-purple-600 px-3 py-1">
                                <Link href="/sign-in">Sign In</Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden flex flex-col items-center">
                    <Button
                        onClick={toggleMenu}
                        className="backdrop-blur-2xl bg-white/20 rounded-xl p-4 w-max"
                        aria-expanded={menuOpen}
                        aria-label="Toggle navigation menu"
                    >
                        {menuOpen ? <X color="white" size={24} /> : <Menu color="white" size={24} />}
                    </Button>
                    {menuOpen && (
                        <div className=" w-full h-[60vh]  backdrop-blur-sm bg-black/70 z-40 flex flex-col items-center justify-center gap-4 mt-4 font-bold text-white">
                            <ul className="space-y-4">
                                <li className="cursor-pointer hover:underline">Home</li>
                                <li className="cursor-pointer hover:underline">About</li>
                                <li className="cursor-pointer hover:underline">Services</li>
                                <li className="cursor-pointer hover:underline">Contact</li>
                            </ul>
                            {/* Mobile Authentication Button */}
                            <div className="text-white mt-6 ">
                                {userId ? (
                                    <div className=" bg-pink-600 hover:bg-purple-600 border-2 border-white px-5 py-2">
                                        <SignOutButton redirectUrl="/sign-in" />
                                    </div>
                                ) : (
                                    <Button variant={'outline'} className=" bg-pink-600 hover:bg-purple-600">
                                        <Link href="/sign-in">Sign In</Link>
                                    </Button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}
