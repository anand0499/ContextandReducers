import React, { useReducer } from 'react'

const initialValue=0;

const reducer=(state,action )=>{
    switch(action.type){
        case '+':
            return state+1 
        case '-':
            return state-1 
        case 'reset':
            return initialValue;
        default :
            return initialValue
    }
}

const ReducersHook = () => {
    const [counter,dispatch]=useReducer(reducer,initialValue)
  return (
    <>
        <div>ReducersHook</div>
        <div>
            {counter}
        </div>
        <div>
            <button onClick={()=>dispatch({type:"-"})} >Decrease</button>
            <button onClick={()=>dispatch({type:"+"})} >Increase</button>
            <button onClick={()=>dispatch({type:"reset"})} >Reset</button>
        </div>
    </>
  )
}

export default ReducersHook