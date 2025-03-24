"use client";
import React from 'react'
import Card from '../components/card'
import { useRouter } from 'next/navigation'
import BackTo from '../components/back';

function BibliotecaDigital() {
    
    const router = useRouter();

    const navigate = (route: string) => {
        router.push(`/biblioteca-digital/${route}`)
    }

    return (
        <div className='bg-gray-100'>
            <div className='top-10 left-10 w-10 p-2 rounded-4xl shadow-2xl'>
                <BackTo route='/' />
            </div>
            <div className='w-full min-h-screen flex flex-col items-center justify-center'>
                <div className='w-full flex flex-col items-center justify-center'>
                    <div className='flex flex-col w-44 min-h-40 bg-white mr-4 rounded-2xl shadow-2xl p-1'>
                        <Card 
                            name='Libros de Texto' 
                            src='doc.svg' 
                            alt='' 
                            classImage='mx-auto my-4'
                            classText='text-center font-black text-lg' 
                            width={50} 
                            height={50} 
                        />
                        <div className='flex flex-col items-center justify-center'>
                            <a href='https://biblioteca.cubaeduca.cu/s/biblioteca-cubaeduca/page/decimo-grado' className='p-2 shadow-2xl mt-1 text-center font-black text-lg'>
                                <span>10mo Grado</span>
                            </a>
                            <a href='https://biblioteca.cubaeduca.cu/s/biblioteca-cubaeduca/page/undecimo-grado' className='p-2 shadow-2xl mt-1 text-center font-black text-lg'>
                                <span>11mo Grado</span>
                            </a>
                            <a href='https://biblioteca.cubaeduca.cu/s/biblioteca-cubaeduca/page/duodecimo-grado' className='p-2 shadow-2xl mt-1 text-center font-black text-lg'>
                                <span>12mo Grado</span>
                            </a>
                        </div> 
                    </div>
                    <div className='w-44 min-h-40 bg-white mr-4 rounded-2xl shadow-2xl p-1 mt-2' onClick={ () => navigate('obras-literarias')}>
                        <Card 
                            name='Obras Literarias' 
                            src='doc.svg' 
                            alt='' 
                            classImage='mx-auto my-4'
                            classText='text-center font-black text-lg' 
                            width={50} 
                            height={50} 
                        />
                    </div>
                    <div className='w-44 min-h-40 bg-white mr-4 rounded-2xl shadow-2xl p-1 mt-2' onClick={ () => navigate('textos-importancia')}>
                        <Card 
                            name='Textos Relevantes' 
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

export default BibliotecaDigital