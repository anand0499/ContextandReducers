import React, { useContext } from 'react'
import { ContextStore } from './ContextStroe'

const ChildApp = () => {
    const value=useContext(ContextStore)
  return (
    <div style={{background:value.background , color:value.color}} >ChildApp</div>
  )
}

export default ChildApp