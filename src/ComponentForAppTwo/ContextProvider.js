import React from 'react'
import { ContextStore } from './ContextStroe'

const ContextProvider = (props) => {
    const value={
        background:'green',
        color:'blue'
    }
  return (
    <ContextStore.Provider value={value} >
        {props.children}
    </ContextStore.Provider>
  )
}

export default ContextProvider