import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type BackProps = {
    route: string;
}

function BackTo( { route }: BackProps ) {

    const router = useRouter();
    
    const navigate = (ruta: string) => {
        router.push(ruta);
    }

    return (
        <div onClick={ () => navigate(route)}>
            <Image 
                src={'back.svg'}
                alt={'atras'}
                className={''}
                width={40}
                height={40}
            />
        </div>
    )
}

export default BackTo