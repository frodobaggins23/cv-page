import React, { createContext, ReactNode, useEffect, useReducer } from 'react'
import type { ApiData, AppState } from './types'

const initialState = {
  loading: true,
  data: {}
}

export const AppContext = createContext(initialState)

const ACTIONS = {
  LOAD_API: 'load-api'
}

const loadApi = (data:ApiData) => ({
  type: ACTIONS.LOAD_API,
  data
})

const appReducer = (state: AppState, action:Record<string, any>) => {
  switch (action.type) {
    case ACTIONS.LOAD_API:
      return {
        ...state,
        data: action.data,
        loading: false
      }
    default:
      return { ...state }
  }
}

const getDataFromApi = async (handleSave: (data: ApiData) => void) => {
  const response = await fetch('/api/get-copy')
  const data = await response.json()
  handleSave(data)
}

const AppContexProvider = ({ children }: {children: ReactNode | Array<ReactNode>}) => {
  const [state, dispatch] = useReducer(appReducer, initialState)
  const handleSaving = (data: ApiData) => {
    dispatch(loadApi(data))
  }
  useEffect(() => {
    getDataFromApi(handleSaving)
  }, [])

  return (
        <AppContext.Provider value={state}>
        {children}
        </AppContext.Provider>
  )
}

export default AppContexProvider
