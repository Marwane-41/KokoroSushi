import Image from "next/image";


export default function Navbar(){

    return (

        <div className="navbar bg-base-100 shadow-lg fixed top-0 left-0 right-0 z-50">
            <div className="flex-1">
                <Image
                src="/KokoriLogo.png"
                alt="Kanari Toronto Logo"
                width={40}
                height={70}
                className="rounded-full"
                
                />
                <a
          className="text-2xl font-bold font-serif tracking-wide text-primary text-center"
          href="#"
        >
          Kokoro Sushi
        </a>
                
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}