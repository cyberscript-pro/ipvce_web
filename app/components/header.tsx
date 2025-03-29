import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Image from 'next/image';

function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const router = useRouter();

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
            </div>

        </header>
    );
}

export default Header
