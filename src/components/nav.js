import { useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import "../styles/nav.css"
import { AppContext } from "../context/context"

const Nav = () => {
    const { value, setValue } = useContext(AppContext)

    return (
        <div className="header">
            <div className="left">
                <FontAwesomeIcon icon={faBars} onClick={() => {
                    setValue(!value)
                }} className={"faIcon"} />
                <div className="logo"></div>
            </div>
            <div className="avatar"></div>
        </div>
    )
}

export default Nav