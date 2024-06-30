import { useState, Fragment } from "react";
import { useForm } from "react-hook-form";

export function CalculatorPage() {

    const { register, handleSubmit, formState: {} } = useForm();

    const [activeComponent, setActiveComponent] = useState('siEnvio');
    const [monto, setMonto] = useState(Number);

    function handleInputChange(event:any) { // Esta función se llama cada vez que el valor del input cambia
        console.log(event);
        setMonto(event.target.value);
    };

    const diaTasa = 39.68 // 1 USDT = 34 Bs para cambios paypal (actualiza constantemente)
    let binanceTasa = 39.68 // 1 USDT = 38 Bs (actualiza constantemente)
    const USDTfee = (monto: number) => { return Number(monto * (1 - (10 / 100))).toFixed(2) }
    const Zinlifee = (monto: number) => { return (monto * (1 - (14 / 100))) }
    
    
    const montoRecibido = (paypalmonto: number, monto: number) => {
        const minus = activeComponent === 'siEnvio' ? true : false 
        let montoRecibido = minus ? paypalmonto : monto
        return montoRecibido
    }
    
    const paypalFee = (monto: number, minus: boolean) => {
        const paypalmonto = minus ? ((monto * (1 - (5.4 / 100))) - 0.3) : ((monto * (1 + (5.4 / 100))) + 0.3)
        return paypalmonto
    }

    const onSubmit = handleSubmit(async data => {
        data.recibido = montoRecibido(paypalFee(monto,true), monto)
        data.USDT = USDTfee(montoRecibido(paypalFee(monto,true), monto))
        data.ZINLI = Zinlifee(montoRecibido(paypalFee(monto,true), monto))
        data.gainUSDT = montoRecibido(paypalFee(monto,true), monto) - data.USDT
        data.gainZINLI = montoRecibido(paypalFee(monto,true), monto) - data.ZINLI
        data.bsEntregados = montoRecibido(paypalFee(monto,true), monto) * diaTasa
        data.usdtCambio = data.bsEntregados / binanceTasa
        data.gainUsdtBs = data.recibido - data.usdtCambio
        data.averageGainBs = (data.gainUsdtBs * data.recibido) / 100

        /** Guardar data*/

        console.log("onSubmit data");
        console.log(data);
    }) // toast es una notificación de exito;

    return (
        <div className="max-w-xl mx-auto">
            <form onSubmit={onSubmit}>

                <h1
                    className="text-3xl font-bold text-center"
                >Calculator</h1>
                <p
                    className="text-center text-lg mt-3 mb-3"
                >Selecciona si envias o saber cuanto quieres recibir en $ PayPal.</p>
                <div>
                    <div>
                        <button
                            onClick={() => setActiveComponent('siEnvio')}
                            className={activeComponent === 'siEnvio' ? "border-orange-500 bg-slate-500 p-3 rounded-lg w-auto mx-3 my-3 mt-3 border-2" : "border-orange-500 bg-slate-500 p-3 rounded-lg w-auto mx-3 my-3 mt-3"}
                        >si envio</button>
                        <button
                            onClick={() => setActiveComponent('paraRecibir')}
                            className={activeComponent !== 'siEnvio' ? "border-orange-500 bg-slate-500 p-3 rounded-lg w-auto mx-3 my-3 mt-3 border-2" : "border-orange-500 bg-slate-500 p-3 rounded-lg w-auto mx-3 my-3 mt-3"}
                        >Para recibir</button>
                    </div>
                    {
                        /** si envio */
                        <Fragment>
                            <div
                                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                            >
                                <input className="px-5" {...register("monto")} type="text" value={monto} onChange={handleInputChange} placeholder="monto"
                                />
                                <label
                                    className="bg-zinc-700 px-5"
                                >
                                    USD
                                </label>
                            </div>
                            <div>
                                {
                                    activeComponent === 'siEnvio' ?
                                        <Fragment>
                                            <label
                                                className="bg-zinc-700 p-2 rounded-lg block w-full mb-3 px-5"
                                            >
                                                Comisión PayPal: {monto - paypalFee(monto, true)}

                                            </label>
                                            <label
                                                className="bg-zinc-700 p-2 rounded-lg block w-full mb-3 px-5"
                                            >
                                                Monto recibido: {montoRecibido(paypalFee(monto,true), monto)}
                                            </label>
                                        </Fragment>
                                        :
                                        <Fragment>
                                            <label
                                                className="bg-zinc-700 p-2 rounded-lg block w-full mb-3 px-5"
                                            >
                                                Comisión PayPal: {paypalFee(monto, false) - monto}
                                            </label>
                                            <label
                                                className="bg-zinc-700 p-2 rounded-lg block w-full mb-3 px-5"
                                            >
                                                Debe enviar: {paypalFee(monto, false)}
                                            </label>
                                        </Fragment>
                                }
                                <label
                                    className="bg-zinc-700 p-2 rounded-lg block w-full mb-3 px-5"
                                >
                                    Tasa del día: {diaTasa} Bs / 1 USD
                                </label>
                            </div>
                            <div
                                className="bg-zinc-700 p-2 rounded-lg block w-full mb-3"
                            >
                                <label className="px-5"
                                >
                                    Recibirás {montoRecibido(paypalFee(monto,true), monto) * diaTasa}
                                </label>
                                <label className="px-5"> BS </label>
                            </div>
                            <div>
                                <div
                                    className=" p-2 rounded-lg block mb-3"
                                >
                                    {
                                        monto ?
                                            <label
                                                className="bg-blue-700 p-2 rounded-lg mb-3"
                                            > {USDTfee(montoRecibido(paypalFee(monto,true), monto))} </label> :
                                            <label
                                                className="bg-blue-700 p-2 rounded-lg mb-3"
                                            > -10% </label>
                                    }
                                    <label className="px-5"> USDT </label>
                                </div>
                                <div
                                    className=" p-2 rounded-lg block mb-3"
                                >
                                    {
                                        monto ?
                                            <label
                                                className="bg-blue-700 p-2 rounded-lg mb-3"
                                            > {Zinlifee(montoRecibido(paypalFee(monto,true), monto))} </label> :
                                            <label
                                                className="bg-blue-700 p-2 rounded-lg mb-3"
                                                > -14% </label>
                                            }
                                    <label className="px-5"> ZINLI </label>
                                </div>
                            </div>
                        </Fragment>
                    }
                    <button type="submit"
                        className="bg-zinc-800 p-2 rounded-lg mb-3"
                    >
                        Cambiar
                    </button>
                </div>
            </form>
        </div>

    )
}