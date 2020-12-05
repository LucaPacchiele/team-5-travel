// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
import { Route, Redirect } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";
import { authContext } from "../context/ProvideAuth";

import React, { useContext, useEffect, useState } from 'react'

/*
    se è autenticato return:
    <Route>
        {children}
    </Route>
    
    oppure se non lo è
    
    <Route>
        <Redirect to .... />
    </Route>
    */

export default function PrivateRoute({ children, ...rest }) {
    let auth = useContext(authContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />

    );
}