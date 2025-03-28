import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Image from 'next/image';

function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const router = useRouter();
    
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const navigateClick = (route: string) => {
        router.push(route);
    }

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-2 py-4">
                <div className="flex items-center">
                    <Image
                        src="/ipvce.png"
                        alt="Logo"
                        width={50}
                        height={50}
                        className="mr-2 rounded-3xl"
                    />
                    <h1 className={`italic text-xl font-bold`}>IPVCE Carlos Marx</h1>
                </div>

                
{/* 
                <div className={`flex items-center`}>
                    <button onClick={handleClick} className="lg:hidden">
                        <Image
                            src={isOpen ? '/close.svg' : '/open.svg'}
                            alt="Menu"
                            width={40}
                            height={40}
                        />
                    </button>
                </div>*/}
            </div>

            {/*
            {isOpen && (
                <div className="md:hidden bg-blue-700">
                    <button onClick={ () => navigateClick('/')} className={` block p-4 hover:bg-blue-600`}>Inicio</button>
                    <button onClick={ () => navigateClick('/orden-interno')} className={` block p-4 hover:bg-blue-600`}>Orden Interno</button>
                    <button onClick={ () => navigateClick('/ciencia')} className={` block p-4 hover:bg-blue-600`}>Ciencia</button>
                    <button onClick={ () => navigateClick('/deporte')} className={` block p-4 hover:bg-blue-600`}>Deporte</button>
                    <button onClick={ () => navigateClick('/cultura')} className={` block p-4 hover:bg-blue-600`}>Cultura</button>
                    <button onClick={ () => navigateClick('/biblioteca-digital')} className={` block p-4 hover:bg-blue-600`}>Biblioteca Digital</button>
                </div>
            )}
            */}
        </header>
    );
}

export default Header