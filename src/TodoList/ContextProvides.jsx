
import React, { useReducer } from 'react'
import { ContextStore } from './ContextStore'

const initialValue={
    TodoListForUsers:[]
}

const reducer=(state,action)=>{
    switch(action.type){
        case "ADD":
            return {
                todolist:[]
            }
    }
}

const ContextProvides = (props) => {

    const [state,dispatch]=useReducer(reducer,initialValue)
    value={
        todolist:state.TodoListForUsers,
        addUser:()=>{},
        removeUser:()=>{}
    }

  return (
   <ContextStore.Provider>
        {props.children}
   </ContextStore.Provider>
  )
}

export default ContextProvides