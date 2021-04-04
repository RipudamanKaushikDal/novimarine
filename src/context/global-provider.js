import React,{useRef} from 'react'
import GlobalContext from './global-context'

const ContextProvider = ({children}) => {
    const heroRef = useRef(null)
    const aboutRef = useRef(null)
    const listRef = useRef(null)

    return(
        <GlobalContext.Provider value={{heroRef,aboutRef,listRef}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ContextProvider