import React, { useEffect, FC, useState } from 'react'
const Home: FC = () => {
  useEffect(() => {
    init()
  }, [])

  const init = async () => {}
  return (
    <>
      <div>home</div>
    </>
  )
}

export default Home
