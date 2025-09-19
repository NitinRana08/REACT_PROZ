import { useState } from "react";

const Calculator = () => {
    const [data, setData] = useState("0")


    const getValue = (e) => {

        if (data === "0") {
            setData(e.target.value) // replace of 0
        } else {
            setData(data.concat(e.target.value))
        }


        console.log(e.target.value);
        // setData(data.concat(event.target.value))

    }
    const calculation = () => {
        setData(eval(data).toString())
    }
    const back = () => {
        setData(data.slice(0, -1))
    }
    const clear = () => {
        setData("0")
    }

    return (
        <>
            <h2>hola ji its nitis's Calculator.</h2>

            <div className="container">
                <div>
                    <input type="text" value={data} placeholder="0" readOnly />
                </div>
                <br />
                <div className="btns">

                <button onClick={back} value={"⌫"}>⌫</button>
                <button value="AC" onClick={clear}>AC</button>
                <button onClick={getValue} value={"%"}>%</button>
                <button onClick={getValue} value={"/"} >÷</button>
        


                <button onClick={getValue} value={"7"}>7</button>
                <button onClick={getValue} value={"8"}>8</button>
                <button onClick={getValue} value={"9"}>9</button>
                <button onClick={getValue} value={"×"}>×</button>
  

                <button onClick={getValue} value={"4"}>4</button>
                <button onClick={getValue} value={"5"}>5</button>
                <button onClick={getValue} value={"6"}>6</button>
                <button onClick={getValue} value={"-"}>-</button>
  

                <button onClick={getValue} value={"1"}>1</button>
                <button onClick={getValue} value={"2"}>2</button>
                <button onClick={getValue} value={"3"}>3</button>
                <button onClick={getValue} value={"+"}>+</button>


                <button onClick={getValue} value={"%"}>na</button>
                <button onClick={getValue} value={"0"}  >0</button>
                <button onClick={getValue} value={"."}>.</button>
                 <button onClick={calculation} value={"="} >=</button>
                </div>



            </div>
        </>
    )
}
export default Calculator