"use client"
import React from 'react'
import BackTo from '../components/back'
import Card from '../components/card';
import { useRouter } from 'next/navigation';

function Ciencia() {
    const router = useRouter();

    const navigate = (route: string) => {
        router.push(`/ciencia/${route}`)
    }

    return (
        <div className='bg-gray-100'>
            <div className='top-10 left-10 w-10 p-2 rounded-4xl shadow-2xl'>
                <BackTo route='/' />
            </div>
            <div className='w-full min-h-screen flex flex-col items-center justify-center'>
                <div className='w-full flex flex-col items-center justify-center'>
                    <div className='w-44 min-h-40 bg-white mr-4 rounded-2xl shadow-2xl p-1 mt-2' onClick={ () => navigate('curiosidades')}>
                        <Card 
                            name='Curiosidades' 
                            src='doc.svg' 
                            alt='' 
                            classImage='mx-auto my-4'
                            classText='text-center font-black text-lg' 
                            width={50} 
                            height={50} 
                        />
                    </div>
                    <div className='w-44 min-h-40 bg-white mr-4 rounded-2xl shadow-2xl p-1 mt-2' onClick={ () => navigate('sociedades-cientificas')}>
                        <Card 
                            name='Sociedades Cientificas' 
                            src='doc.svg' 
                            alt='' 
                            classImage='mx-auto my-4'
                            classText='text-center font-black text-lg' 
                            width={50} 
                            height={50} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ciencia