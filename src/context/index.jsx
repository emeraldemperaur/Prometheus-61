import { useState, createContext } from "react";

const P61Context = createContext();

const P61Provider = (props) => {
    const [localeDate, setLocaleDate] = useState(getLocalTime);
    const [logUser, setLogUser] = useState("");
    const [logKey, setLogKey] = useState("");

    const logUserLogin = (loginUser, loginKey) =>{
        setLogUser(prevState => ([
            ...prevState,
            loginUser
        ]));
        setLogKey(loginKey);

    }


    return(
        <>
       <P61Context.Provider value={{
        //State
        localeDate: localeDate,
        logUser: logUser,
        logKey: logKey,
        //Methods
        userLog: logUserLogin
       }}>
        {props.children}
       </P61Context.Provider>
      
       </>
    )
}
export{
    P61Context,
    P61Provider
}

const getLocalTime = () => {
    const newDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    console.log(newDate.toLocaleDateString('en-us', options))
    return newDate.toLocaleDateString('en-us', options)      
}