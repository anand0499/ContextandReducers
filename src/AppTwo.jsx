import React from 'react'
import ContextProvider from './ComponentForAppTwo/ContextProvider'
import ChildApp from './ComponentForAppTwo/ChildApp'
import ReducersHook from './ComponentForAppTwo/ReducersHook'

const AppTwo = () => {
  return (
    <ContextProvider>
        <ChildApp/>
        <ReducersHook/>
    </ContextProvider>
  )
}

export default AppTwo