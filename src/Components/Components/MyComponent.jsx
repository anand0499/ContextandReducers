import React, { useContext } from 'react'
import { MyContext } from './MyContext'

const MyComponent = () => {
    const value=useContext(MyContext)
  return (
    <>
        {value.First_Name} && {value.Last_Name}
    </>
  )
}

export default MyComponent