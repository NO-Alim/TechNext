import React,{useState,useContext,useEffect,useCallback} from 'react'

const url = 'https://api.spacexdata.com/v3/launches'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);


    const fetchApi = useCallback (async () => {
        setLoading(true);
        try {
            const response = await fetch(`${url}`)
            const data = await response.json();
            setArticles(data)
            setLoading(false);
            
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    })
    useEffect(() =>{
        fetchApi();
    },[])
    return <AppContext.Provider value={{loading, setLoading,articles}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext,AppProvider}