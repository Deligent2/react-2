import React, {useState} from "react";

const App = () => {
    const [state, setState] = useState(0)
    const [inputValue, setInput] = useState('')

    const handleCalculator = (num)=>{
        if(num==='C'){
            setState(0)
            setInput('')
        }else{
            setState(eval(inputValue));
            setInput(`${eval(inputValue)}${num}`);
        }

    }

    const handleNumber=(num)=>{
        setInput(`${inputValue}${num}`);

    }

    return (
        <div className={'container'}>
            <input type="text" value={inputValue}/>
            <div className={'container-wrapper'}>
               <div className={'btn-wrap'}>
                   <button className={'number'} onClick={()=>handleNumber(1)}>1</button>
                   <button className={'number'} onClick={()=>handleNumber(2)}>2</button>
                   <button className={'number'} onClick={()=>handleNumber(3)}>3</button>
                   <button className={'symbol'} onClick={()=>handleCalculator('+')}>+</button>
               </div>



             <div className={'btn-wrap'}>
                 <button className={'number'} onClick={()=>handleNumber(4)}>4</button>
                 <button className={'number'} onClick={()=>handleNumber(5)}>5</button>
                 <button className={'number'} onClick={()=>handleNumber(6)}>6</button>
                 <button className={'symbol'} onClick={()=>handleCalculator('-')}>-</button>
             </div>
               <div className={'btn-wrap'}>

                   <button className={'number'} onClick={()=>handleNumber(7)}>7</button>
                   <button className={'number'} onClick={()=>handleNumber(8)}>8</button>
                   <button className={'number'} onClick={()=>handleNumber(9)}>9</button>
                   <button className={'symbol'} onClick={()=>handleCalculator('*')}>*</button>
               </div>
               <div className={'btn-wrap'}>
                   <button className={'symbol'} onClick={()=>handleCalculator('C')}>C</button>
                   <button className={'number'} onClick={()=>handleNumber(0)}>0</button>
                   <button className={'symbol'} onClick={()=>handleCalculator(' ')}>=</button>
                   <button className={'symbol'} onClick={()=>handleCalculator('/')}>/</button>

               </div>




            </div>

        </div>
    )
}

export default App;