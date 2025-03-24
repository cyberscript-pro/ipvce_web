import React from 'react'
import Image from 'next/image'

type CardProps = {
    name: string;
    src: string;
    alt: string;
    classImage: string;
    classText: string;
    width: number;
    height: number;
} 

function Card(cardProps: CardProps) {
    return (
        <div>
            <Image 
                src={cardProps.src}
                alt={cardProps.alt}
                className={`${cardProps.classImage} object-cover`}
                width={cardProps.width}
                height={cardProps.height}
            />
            
            <h2 className={cardProps.classText}>{cardProps.name}</h2>
        </div>
    )
}

export default Card