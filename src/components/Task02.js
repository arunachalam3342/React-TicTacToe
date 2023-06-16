import React, { useState } from 'react';
//Task02

const Task02 = () => {
    const [result, setResult] = useState("");
    const [hist,setHist]=useState("0");
    const handleClick = (e) => {
        setResult(result.concat((e.target.name)));
    }

    const clear = () => {
        setResult("");
    }

    const calculateAns=()=>{
        try{
            setHist(result);
            setResult(eval(result).toString());
            
        }catch(err){
            setResult("Error")
        }
        
    }

    const backspace = () => {
        setResult(result.slice(0, result.length - 1));
    }
    return (
        <div>
            <div class="contain">
                <div>
                    <form>
                        <p id="hist">{hist}</p>
                        <input type="text" value={result} />
                    </form>
                </div>
                <div class="keypad">
                    <button class="btn-primary btn" onClick={clear} id="clear">AC</button>
                    <button class="btn-primary btn" onClick={backspace} id="backspace">C</button>
                    <button class="btn-primary btn" name="/" onClick={handleClick}>&divide;</button>
                    <button class="btn-primary btn" name="7" onClick={handleClick}>7</button>
                    <button class="btn-primary btn" name="8" onClick={handleClick}>8</button>
                    <button class="btn-primary btn" name="9" onClick={handleClick}>9</button>
                    <button class="btn-primary btn" name="*" onClick={handleClick}>&times;</button>
                    <button class="btn-primary btn" name="4" onClick={handleClick}>4</button>
                    <button class="btn-primary btn" name="5" onClick={handleClick}>5</button>
                    <button class="btn-primary btn" name="6" onClick={handleClick}>6</button>
                    <button class="btn-primary btn" name="-" onClick={handleClick}>&ndash;</button>
                    <button class="btn-primary btn" name="1" onClick={handleClick}>1</button>
                    <button class="btn-primary btn" name="2" onClick={handleClick}>2</button>
                    <button class="btn-primary btn" name="3" onClick={handleClick}>3</button>
                    <button class="btn-primary btn" name="+" onClick={handleClick}>+</button>
                    <button class="btn-primary btn" name="0" onClick={handleClick}>0</button>
                    <button class="btn-primary btn" name="." onClick={handleClick}>.</button>
                    <button class="btn-primary btn" onClick={calculateAns} id="result">=</button>
                </div>
            </div>
        </div>
    )
}

export default Task02;
