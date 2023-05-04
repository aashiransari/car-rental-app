import React from 'react'

const BackDrop = ({ sideMenu, closeSideMenu }) => {
    return (
        <div className={`${sideMenu ? "backdrop backdrop__open" : "backdrop"}`} onClick={closeSideMenu}></div>
    )
}

export default BackDrop
