export function Card() {
    return (
        <div className=" bg-slate-200 border-black p-3 rounded-lg w-auto">
            <div className="card-body">
                <h5 className=" text-black ">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className=" border-blue-800 bg-blue-700 p-2 text-white  rounded-lg border-2  ">Go somewhere</button>
            </div>
        </div>
    )
}