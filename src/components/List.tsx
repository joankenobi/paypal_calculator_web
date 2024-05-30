import { MouseEvent } from "react"

type ListProps = {
    data : string[]
}

export default function List( props:ListProps) {
    const {data} = props

    const handleClick = (element:string) => {
        console.log(element);
    };

    return (
            <ul className="p-2 shadow menu-vertical z-[1] bg-base-100 rounded-box ">
                {data.map((element) => (
                    <li onClick={() => handleClick(element)} key={element}><a>{element}</a></li>
                ))}
            </ul>
    )
}