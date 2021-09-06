import React, { useContext } from 'react'
import { AppContext } from '../../context'
import type { AppState } from '../../context/types'

const Box = () => {
  const { loading, data } = useContext(AppContext) as AppState

  return (
        <div>
            {loading && 'Loading' }
            {data.intro && data.intro[0].intro}
        </div>
  )
}

export default Box
