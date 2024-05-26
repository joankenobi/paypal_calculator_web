import { ReactNode } from "react"

interface CardProps {
    children: ReactNode
}

export function Card(props:CardProps) {
    const {children} = props
    return (
        <div className=" bg-slate-200 border-black p-3 rounded-lg w-auto" style={{
            width: '350px',
            margin: '5px',
        } // mala practica
    }>
            <div className="card-body">
                <p>---------------</p>
                {children}
                <p>---------------</p>
            </div>
        </div>
    )
}
interface CardBodyProps {
    text: string
    title: string
    button:{
        text:string
        link?:string
    }
}

export function CardBody( props:CardBodyProps) {
    const {text,title,button} = props
    return (
        <>
            <h5 className=" text-black ">{title}</h5>
            <p className="card-text">{text}</p>
            <button className=" border-blue-800 bg-blue-700 p-2 text-white  rounded-lg border-2  ">
                <a href={button.link}>
                    {button.text}
                </a>
            </button>
        </>
    )
}