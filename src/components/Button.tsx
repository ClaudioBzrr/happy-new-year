import {ButtonHTMLAttributes} from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    title:string
}


export function Button({title,...rest}:ButtonProps){
    return(
        <button
            className='xl:py-2 xl:px-2 p-2 mx-1 bg-slate-800 rounded-3xl text-[#fff]'
            {...rest}
        >
            {title}
        </button>
    )
}