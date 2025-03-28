"use client"
import React from 'react'
import BackTo from '../components/back'

function InformacionGeneral() {

    return (
        <div>
            <div className='top-10 left-10 w-10 p-2 rounded-4xl shadow-2xl'>
                <BackTo route='/' />
            </div>

            <div className='mx-2 text-pretty'>
                <p className='my-1'>
                    El centro fue inaugurado el en septiembre 1974 como consecuencia de la idea de Fidel Castro de reunir en instituciones educacionales a adolescentes cubanos que al entrar al preuniversitario tuvieran inclinaciones por las carreras científicas.
                </p>

                <p className='my-1'>
                    Esta institución fue creada en la provincia de Matanzas, como muchas otras en todo el país. En un principio contaba con diferentes bloques de enseñanza para Matemáticas, Física y Química, Bloque 1,2 y 3 respectivamente. El instituto possee cerca de 40 sociedades científicas para propiciar la orientación vocacinal de los jóvenes dentro de ellas se encuentran: Historia Local, Flora Y Fauna, Espeleología, Meteorología, Salud, entre otras, durante algún tiempo la vocacional amplió su perfil académico en carreras de Humanidades, pero debido a lineamientos gubernamentales, el instituto inclinó de nuevo su orientación educacional hacia la formación de carreras como Ingeniería, Medicina, Arquitectura y otras más de carácter técnico.
                </p>
            </div>
        </div>
    )
}

export default InformacionGeneral