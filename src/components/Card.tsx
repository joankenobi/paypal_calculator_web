export function Card() {
    return (
        <div className=" bg-slate-200 border-black p-3 rounded-lg w-auto" style={{
            width: '350px'
        } // mala practica
        }>
            <div className="card-body">
                <CardBody />
            </div>
        </div>
    )
}

export function CardBody() {
    return (
        <>
            <h5 className=" text-black ">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className=" border-blue-800 bg-blue-700 p-2 text-white  rounded-lg border-2  ">
                <a href="#">
                    Go somewhere
                </a>
            </button>
        </>
    )
}