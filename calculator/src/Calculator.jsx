import { useState } from "react";

const Calculator = () => {
    const [data, setData] = useState("0")


    const getValue = (e) => {

        if (data === "0") {
            setData(e.target.value) // replace of 0
        } else {
            setData(data.concat(e.target.value))
        }


        // console.log(e.target.value);
        // setData(data.concat(event.target.value))

    }
    //   setData(eval(data).toString())
    const calculation = () => {

        try {
            const expression = data
                .replace(/×/g, "*")
                .replace(/÷/g, "/");
            setData(eval(expression).toString())
        } catch {
            setData("ErroR")
        }

    }


    const back = () => {
        setData(data.slice(0, -1))
    }
    const clear = () => {
        setData("0")
    }

    return (
        <>


            <div className="container">
                <div className="display">
                    <input type="text" value={data}  readOnly />
                </div>
                <br />
                <div className="btns">

                    <button className="button" onClick={back} value={"⌫"}>⌫</button>
                    <button className="button" value="AC" onClick={clear}>AC</button>
                    <button className="button" onClick={getValue} value={"%"}>%</button>
                    <button className="button" onClick={getValue} value={"÷"} >÷</button>



                    <button className="button" onClick={getValue} value={"7"}>7</button>
                    <button className="button" onClick={getValue} value={"8"}>8</button>
                    <button className="button" onClick={getValue} value={"9"}>9</button>
                    <button className="button" onClick={getValue} value={"×"}>×</button>


                    <button className="button" onClick={getValue} value={"4"}>4</button>
                    <button className="button" onClick={getValue} value={"5"}>5</button>
                    <button className="button" onClick={getValue} value={"6"}>6</button>
                    <button className="button" onClick={getValue} value={"-"}>-</button>


                    <button className="button" onClick={getValue}  value={"1"}>1</button>
                    <button className="button" onClick={getValue} value={"2"}>2</button>
                    <button className="button" onClick={getValue} value={"3"}>3</button>
                    <button className="button" onClick={getValue} value={"+"}>+</button>


                    <button className="button" onClick={getValue} value={"00"}>00</button>
                    <button className="button" onClick={getValue}  value={"0"}>0</button>
                    <button className="button" onClick={getValue} value={"."}>.</button>
                    <button className="button" onClick={calculation} value={"="} >=</button>
                </div>
             



            </div>
        </>
    )
}
export default Calculator