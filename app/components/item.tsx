import React from 'react'
import { useRouter } from "next/navigation";
import Image from 'next/image';

type ItemProps = {
    ruta: string;
    src: string;
    alt: string;
    title: string;
}

function Item(itemProps: ItemProps) {

    const router = useRouter();
    
    const navigateClick = (route: string) => {
        router.push(route);
    }

    return (
        <button onClick={ () => navigateClick(itemProps.ruta)} className={`flex items-center text-lg italic hover:text-blue-300`}>
            <Image 
                src={itemProps.src}
                alt={itemProps.alt}
                className={''}
                width={40}
                height={40}
            />
            <span>{itemProps.title}</span>
        </button>
    )
}

export default Item