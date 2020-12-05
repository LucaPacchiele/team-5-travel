import React, { createContext, useEffect, useState } from 'react'

import { useCookies } from 'react-cookie';

export const authContext = createContext()

// esporto auth che contiene:
//   user,
//   signin,
//   signout

export default function ProvideAuth({ children }) {
    const [cookies, setCookie, removeCookie] = useCookies();
    const [user, setUser] = useState(cookies.user); //user contiene il nome dell'utente (username)

    const [isAuthenticated, setIsAuthenticated] = useState(false);




    const signin = (username) => {

        
        const current = new Date() //tempo corrente

        current.setHours(current.getHours(), current.getMinutes()+50, current.getSeconds()); //setHours(22, 10, 30) orario: 22h:10m:30s
        console.log("logout alle ore ->", current)
        
        setUser(username);
        setCookie('user', username, { path: '/', expires: current });
        setIsAuthenticated(true);

        
        // setTimeout(cb, 100); // fake async
    }

 

    const signout = () => {
        setUser(null);
        removeCookie('user')
        setIsAuthenticated(false);
    };

    const auth = {
        user,
        signin,
        signout
    }
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}
