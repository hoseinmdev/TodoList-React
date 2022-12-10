import { createContext } from "react";

const TodoContext = createContext()

const Provider = ({children}) => {
    
    return ( 
        <TodoContext.Provider>
            {children}
        </TodoContext.Provider>
     );
}
 
export default Provider;{children}