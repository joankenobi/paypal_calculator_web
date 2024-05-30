import { MouseEvent, useState } from "react"

type ListProps = {
    data : string[]
}

export default function List( props:ListProps) {
    const {data} = props
    const [
        index, // la variable que guarda el estado
        setIndex // la fonction que la modifica
    ] = useState <number|null>(null) // cada vez que se ejecute renderiza la fincion List

    const handleClick = (element:string, i:number) => {
        if (index == i) {
            setIndex(null)
            console.log('Deseleccionado el i', i);
            return
        }
        setIndex(i)
        console.log(element);
    };

    return (
            <ul className="p-2 shadow menu-vertical z-[1] bg-base-100 rounded-box ">
                {data.map((element, i) => (
                    <li className={`px-2 border-black border-2 ${index === i ? 'bg-blue-700 rounded-ee-box' : ''}`} 
                    onClick={() => handleClick(element, i)} 
                    key={element}><a>{element}</a></li>
                ))}
            </ul>
    )
}