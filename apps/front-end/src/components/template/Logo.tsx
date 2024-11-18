import { Righteous } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'


const fonte = Righteous({
    subsets: ["latin"],
    weight: "400",
})


export default function Logo() {
    return (
        <>
            <Link href="/"className={` flex items-center space-x-2 gap-2 ${fonte.className}`}>
            <Image src="/logo.svg" width={50} height={50} alt="Logo"/>
            <h1 className="flex flex-col items-center text-lg leading-5">
                <div>Convit<span className='text-blue-500'>3</span></div>
                <div>Digital</div>
            </h1>
            </Link>
        </>
    )
}