import React, { useReducer } from 'react'

const initialValue=0;

const reducers=(state,action)=>{
    switch(action){
        case '+':
            return state+1 
        case '-':
            if (state<=0){
                return state
            }else{
                return state-1
            }
        case 'reset':
            return initialValue
    }
}

const Reducer = () => {

    const [counter,dispatch]=useReducer(reducers,initialValue)

  return (
   <>   
        <div>
            <button onClick={()=>dispatch('-')} >Decrease</button>
        </div>
        <div>
            {counter}
        </div>
        <div>
            <button onClick={()=>dispatch('+')} >Increase</button>
        </div>
   </>
  )
}

export default Reducer