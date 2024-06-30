import { MouseEvent, useState } from "react"

type ListProps = {
    data : string[];
    onSelect?: (elemento:string) => void; //fat arrow function que no retorna nada
}

export default function List( props:ListProps) {
    const {data, onSelect} = props
    const [
        index, // la variable que guarda el estado
        setIndex // la fonction que la modifica
    ] = useState <number|null>(null) // cada vez que se ejecute renderiza la fincion List

    const handleClick = (element:string, i:number) => {
        let selectIndex: number | null = i
        if (index == i) {
            selectIndex = null
            console.log('Deseleccionado el index', index);
    
        }
        setIndex(selectIndex)
        onSelect?.(element); // ejecuta la funcion onSelect // ?. si onSelect es undefined no ejecuta la funcion
        console.log(element);
    };

    return (
        <>
            {data.length !== 0? (
                <ul className="p-2 shadow menu-vertical z-[1] bg-base-100 rounded-box ">
                {data.map((element, i) => (
                    <li className={`px-2 border-black border-2 ${index === i ? 'bg-blue-700 rounded-ee-box' : ''}`} 
                    onClick={() => handleClick(element, i)} 
                    key={element}><a>{element}</a></li>
                ))}
            </ul>
            ):
            <span>No hay contenido</span>}
            </>
    )
}