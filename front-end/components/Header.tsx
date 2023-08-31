import Link from "next/link";
import DarkModeToggleButton from "./Dark-mode-toggle-button";
import Script from "next/script";
import Head from "next/head";
import headerNavLinks from "@/data/HeaderNavLink";
import Image from 'next/image'

interface HeadProps {
    title: string;
    description?: string;
    overrideTitle?: boolean;
    structuredData?: string;
  }

export default function Header({
    title,
    description,
    overrideTitle = false,
    structuredData = '',
  }: HeadProps){

    const htmlTitle = overrideTitle
      ? title
      : `${title} — SMOGNS · Web Developer`;
  
    return (
        <>  
            <Head>
                <title>{htmlTitle}</title>
                <meta name="description" content="오늘도 빡코딩!" />
                <link rel="icon" href="./img/footerLogo.png" />
            </Head> 
            <header className="text-gray-600 body-font pt-2 border-b-2 border-blue-200">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href={"/"} legacyBehavior>
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg> */}
                        {/* <div className="w-24 h-24"> */}
                            <Image src="/img/mainLogo.png" width={180} height={100} alt={"MY BLOG LOGO"} quality={100} />
                        {/* </div> */}
                        
                        {/* <span className="main-title font-[GoryeongStrawberry]">SMONGS BLOG</span> */}
                        </a>
                    </Link>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
                        {headerNavLinks
                            .filter((link) => link.href !== '/')
                            .map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    className="mr-5 hover:text-stone-900 dark:hover:text-gray-500 font-[TheJamsil5Bold]"
                                    replace
                                >
                                    {link.title}
                                </Link>
                        ))}
                    </nav>
                    <DarkModeToggleButton />
                </div>
            </header>
        </>
    )
}