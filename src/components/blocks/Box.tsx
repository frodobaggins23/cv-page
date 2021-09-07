import React, { ReactChild } from 'react'

type Props = {
  children: ReactChild | Array<ReactChild>
}
const Box = ({ children }: Props) => {
  return (
        <div>
           {children}
        </div>
  )
}

export default Box
