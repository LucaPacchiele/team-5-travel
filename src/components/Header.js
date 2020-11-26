import React, { useContext, useEffect } from 'react'

import { AppContext } from '../context/AppContext'

const Header = () => {
    const { callApi } = useContext(AppContext)



    return (
        <div className="Header">
            <button onClick={() => { callApi() }}>asd</button>
        </div>
    )
}

export default Header
