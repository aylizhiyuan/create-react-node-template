import React, { FC, useEffect } from 'react'
import list from './list'
import img from '../../assets/tigger2.gif'

const Index: FC = () => {
  useEffect(() => {
    // didmount
  }, [])

  return (
    <div>
      <h1>hooks</h1>
      <img src={img} />
    </div>
  )
}

export default Index
