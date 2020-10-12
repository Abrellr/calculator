//calculator with react

import React,{useState} from "react";



const Calculator = () =>{
    const content =[['clear','.',':','x'],['7','8','9','-'],['4','5','6','+'],['1','2','3','=']];
    
    const [userInput,setUserInput] = useState("");
    const [outcome,setOutcome] = useState(null);

    const handleClick = (column)=>{
        if(column==='='){
            const expression = userInput.replace(/x/g, "*");
            const sanitizedExpression = expression.replace(/([^+-/*\d]*)/g, "");
            try {
                setOutcome(eval(sanitizedExpression));
                setUserInput("")
            } catch (error) {
                setUserInput("invalid expression")
            }
            
            
            
        }else{
            return setUserInput(userInput + column);
        }
    }
    

    return(
        <>
        <table style={{border: '1px solid black'}}>
            <tr>
            <td colSpan="4" ><input value={userInput}></input></td>
            </tr>
            {content.map((row,outerIndex)=>{
                return(
                    <tr>
                        {row.map((column,innerIndex)=>{
                            return(
                                column==='clear'? 
                                <td  key={[innerIndex,outerIndex]} onClick={(e)=>setUserInput("")} width="25%">{column}</td>
                                :  <td key={[innerIndex,outerIndex]} onClick={(e)=>handleClick(column)}>{column}</td>
                                )})
                        }
                    </tr>
                )
            })}
        </table>
        <div>{outcome&& <p>Result: {outcome}</p>}</div>
        </>
    )

}


export default Calculator;