'use client';
import { useState } from 'react';
import Link from "next/link";

const links = [
    { href: "https://crework.in/30daysofpm", label: "30 Days of PM" },
    { href: "https://crework.substack.com/", label: "Newsletter" },
    { href: "https://crework.in/builders", label: "Builders Cohort" },
]

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="w-full sticky md:static top-0 z-[100] bg-background">
            <div className="max-w-screen-xl w-full m-auto p-5 flex justify-between items-center flex-wrap md:flex-nowrap gap-5">
                <div className="flex items-center gap-10">
                    <Link href="/" className="text-white text-xl md:text-3xl font-extrabold">
                        Crework<span className="text-[#FAAF3E] md:text-4xl text-2xl">.</span>
                    </Link>
                </div>
                <div>
                    <button className="space-y-1.5 outline-none block sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen
                            ? <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 11.9757L16.1868 18.1625C16.5151 18.4908 16.9604 18.6752 17.4247 18.6752C17.8889 18.6752 18.3342 18.4908 18.6625 18.1625C18.9908 17.8342 19.1752 17.3889 19.1752 16.9247C19.1752 16.4604 18.9908 16.0151 18.6625 15.6868L12.4733 9.5L18.6613 3.31317C18.8238 3.15061 18.9527 2.95765 19.0406 2.74529C19.1285 2.53293 19.1737 2.30534 19.1736 2.0755C19.1736 1.84567 19.1283 1.6181 19.0403 1.40578C18.9523 1.19347 18.8233 1.00056 18.6608 0.838083C18.4982 0.675605 18.3052 0.546736 18.0929 0.458833C17.8805 0.370929 17.6529 0.325714 17.4231 0.325768C17.1933 0.325822 16.9657 0.371145 16.7534 0.459148C16.541 0.547151 16.3481 0.676112 16.1857 0.838667L10 7.0255L3.81317 0.838667C3.65181 0.671449 3.45877 0.538041 3.24531 0.446226C3.03185 0.354411 2.80224 0.306028 2.56987 0.3039C2.33751 0.301772 2.10705 0.345941 1.89194 0.433831C1.67683 0.521722 1.48138 0.651572 1.31699 0.815806C1.15261 0.98004 1.02257 1.17537 0.934478 1.3904C0.846385 1.60542 0.801998 1.83584 0.803907 2.0682C0.805816 2.30057 0.853982 2.53022 0.945596 2.74377C1.03721 2.95732 1.17044 3.15049 1.3375 3.312L7.52667 9.5L1.33867 15.688C1.1716 15.8495 1.03838 16.0427 0.946763 16.2562C0.85515 16.4698 0.806983 16.6994 0.805074 16.9318C0.803165 17.1642 0.847552 17.3946 0.935645 17.6096C1.02374 17.8246 1.15377 18.02 1.31816 18.1842C1.48255 18.3484 1.678 18.4783 1.89311 18.5662C2.10822 18.6541 2.33868 18.6982 2.57104 18.6961C2.8034 18.694 3.03301 18.6456 3.24648 18.5538C3.45994 18.462 3.65298 18.3286 3.81433 18.1613L10 11.9757Z" fill="white" />
                            </svg>
                            : <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="1.5" x2="24" y2="1.5" stroke="white" stroke-width="2" />
                                <line y1="17.5" x2="24" y2="17.5" stroke="white" stroke-width="2" />
                                <line y1="9.5" x2="24" y2="9.5" stroke="white" stroke-width="2" />
                            </svg>
                        }
                    </button>
                </div>
                <div className={`${menuOpen ? 'block w-screen fixed left-0 right-0 top-16 bg-background pb-5' : 'hidden'} grow md:grow-0 sm:flex gap-10`}>
                    <ul className="flex flex-col items-center justify-end sm:flex-row flex-1 gap-5 md:gap-12">
                        {links.map(({ href, label }, index) => (
                            <li key={index}>
                                <Link href={href} className="text-[#BDBCBC] hover:text-white transition-all text-base md:text-xl">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
