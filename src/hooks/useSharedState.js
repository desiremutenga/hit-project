import { useState,createContext,useContext } from "react";

const SharedContext =createContext();

export const SharedProvider = ({children}) => {
    const[sharedState, setSharedState] = useState([]);

    return (<SharedContext.Provider value={{sharedState,setSharedState}}>
            {children}
    </SharedContext.Provider>);
}
 
export const useSharedContext = ()=>{
    return useContext(SharedContext)
};