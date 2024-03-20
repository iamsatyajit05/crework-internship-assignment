import Image from "next/image"
import Link from "next/link"

const linksLargeDevice = [
    { href: "https://crework.substack.com/", label: "Newsletter" },
    { href: "https://crework.in/builders", label: "Builders Cohort" },
    { href: "https://crework.in/30daysofpm", label: "30 Days of PM" },
    { href: "https://crework.in/quiz", label: "Transition to PM Role" },
]

const linksSmallDevice = [
    { href: "https://crework.in/30daysofpm", label: "About Us" },
    { href: "https://crework.substack.com/", label: "Curriculum" },
    { href: "https://crework.in/builders", label: "Our Graduates" },
    { href: "https://.crework.in/builders", label: "Refund Policy" },
]

export default function Footer() {
    return (
        <footer className="w-full">
            <div className="max-w-screen-xl m-auto px-5 py-10 flex flex-col items-center gap-6 sm:gap-10">
                <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6">
                    <div>
                        <Link href="/" className="text-white text-xl md:text-3xl font-extrabold">
                            Crework<span className="text-[#FAAF3E] md:text-4xl text-2xl">.</span>
                        </Link>
                    </div>
                    <div className="flex flex-grow lg:flex-row justify-center gap-16 md:gap-32">
                        <div className="flex sm:hidden flex-col gap-4">
                            {linksSmallDevice.slice(0, 2).map(({ href, label }, index) => (
                                <Link key={index} href={href} className="text-[#C6C5C5] hover:text-white text-sm md:text-lg">
                                    {label}
                                </Link>
                            ))}
                        </div>
                        <div className="flex sm:hidden flex-col gap-4">
                            {linksSmallDevice.slice(2).map(({ href, label }, index) => (
                                <Link key={index} href={href} className="text-[#C6C5C5] hover:text-white text-sm md:text-lg">
                                    {label}
                                </Link>
                            ))}
                        </div>
                        <div className="hidden sm:flex flex-col gap-4">
                            {linksLargeDevice.slice(0, 2).map(({ href, label }, index) => (
                                <Link key={index} href={href} className="text-[#C6C5C5] hover:text-white text-sm md:text-lg">
                                    {label}
                                </Link>
                            ))}
                        </div>
                        <div className="hidden sm:flex flex-col gap-4">
                            {linksLargeDevice.slice(2).map(({ href, label }, index) => (
                                <Link key={index} href={href} className="text-[#C6C5C5] hover:text-white text-sm md:text-lg">
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-2">
                            <a target="_blank" href="https://twitter.com/CreworkHQ">
                                <Image src="/twitter.svg" alt="twitter" width={32} height={32} className="w-5 h-5 sm:w-10 sm:h-10" />
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/company/creworkhq/">
                                <Image src="/linkedin.svg" alt="linkedin" width={32} height={32} className="w-5 h-5 sm:w-10 sm:h-10" />
                            </a>
                            <a target="_blank" href="https://peerlist.io/company/crework">
                                <Image src="/peerlist.svg" alt="peerlist" width={32} height={32} className="w-5 h-5 sm:w-10 sm:h-10" />
                            </a>
                            <a target="_blank" href="https://www.instagram.com/creworkhq">
                                <Image src="/instagram.svg" alt="instagram" width={32} height={32} className="w-5 h-5 sm:w-10 sm:h-10" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 h-[1px] bg-gradient-to-r from-white to-transparent" />
                <div>
                    <p className="text-white text-sm sm:text-base">
                        Copyright © 2024 Crework
                    </p>
                </div>
            </div>
        </footer>
    )
}