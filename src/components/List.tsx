
type ListProps = {
    data : string[]
}

export default function List( props:ListProps) {
    const {data} = props
    return (
            <ul className="p-2 shadow menu z-[1] bg-base-100 rounded-box ">
                {data.map((element) => (
                    <li><a>{element}</a></li>
                ))}
            </ul>
    )
}