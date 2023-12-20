import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";

const ProtectedRouter = ({component, ...rest}) => {
    let RenderComponents = component;
    
    const isAuthenticated = JSON.parse(localStorage.getItem('token'));

    return (
        <Routes>
            <Route {...rest} render = { 
                    props => {
                        return isAuthenticated !== null && isAuthenticated !== '' ? (
                            <RenderComponents {...props}/>
                            ) : (
                                <Navigate 
                                    to = {{
                                        pathname : '/login'
                                    }}
                                />
                            ) 
                        }
                    }
            />
        </Routes>
    )
}

export default ProtectedRouter;