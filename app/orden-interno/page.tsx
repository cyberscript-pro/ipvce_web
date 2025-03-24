"use client";
import React from 'react'
import Card from '../components/card'
import { useRouter } from 'next/navigation'
import BackTo from '../components/back';

function OrdenInterno() {
    
    const router = useRouter();

    const navigate = (route: string) => {
        router.push(`/orden-interno/${route}`);
    }

    return (
        <div className='bg-gray-100'>
            <div className='top-10 left-10 w-10 p-2 rounded-4xl shadow-2xl'>
                <BackTo route='/' />
            </div>
            <div className='w-full min-h-screen flex flex-col items-center justify-center p-3'>
                <div className='max-w-[670px] flex flex-wrap items-center justify-center mt-2'>
                    <div className='w-40 h-40 bg-white mr-4 rounded-2xl shadow-2xl p-1 mt-2' onClick={ () => navigate('horarios')}>
                        <Card 
                            name='Horarios' 
                            src='reloj.svg' 
                            alt='' 
                            classImage='mx-auto my-4'
                            classText='text-center font-black text-lg' 
                            width={50} 
                            height={50} 
                        />
                    </div>
                    <div className='w-40 h-40 bg-white mr-4 rounded-2xl shadow-2xl p-1 mt-2' onClick={ () => navigate('claustro')}>
                        <Card 
                            name='Claustro' 
                            src='person.svg' 
                            alt='' 
                            classImage='mx-auto my-4'
                            classText='text-center font-black text-lg' 
                            width={50} 
                            height={50} 
                        />
                    </div>
                    <div className='w-40 h-40 bg-white mr-4 rounded-2xl shadow-2xl p-1 mt-2' onClick={ () => navigate('consejo-direccion')}>
                        <Card 
                            name='Consejo de Direccion' 
                            src='groups.svg' 
                            alt='' 
                            classImage='mx-auto my-4'
                            classText='text-center font-black text-lg' 
                            width={50} 
                            height={50} 
                        />
                    </div>
                    <div className='w-40 h-40 bg-white mr-4 rounded-2xl shadow-2xl p-1 mt-2' onClick={ () => navigate('consejo-feem')}>
                        <Card 
                            name='Consejo de la FEEM' 
                            src='group.svg' 
                            alt='' 
                            classImage='mx-auto my-4'
                            classText='text-center font-black text-lg' 
                            width={50} 
                            height={50} 
                        />
                    </div>
                    <div className='w-40 h-40 bg-white mr-4 rounded-2xl shadow-2xl p-1 mt-2' onClick={ () => navigate('reglamento')}>
                        <Card 
                            name='Reglamento' 
                            src='doc.svg' 
                            alt='' 
                            classImage='mx-auto my-4'
                            classText='text-center font-black text-lg' 
                            width={50} 
                            height={50} 
                        />
                    </div>

                    <div className='w-40 h-40 bg-white mr-4 rounded-2xl shadow-2xl p-1 mt-2' onClick={ () => navigate('resoluciones')}>
                        <Card 
                            name='Resoluciones' 
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

export default OrdenInterno