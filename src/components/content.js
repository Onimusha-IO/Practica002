import User from "./user"
import MenuPanel from "./menuPanel"

import "../styles/content.css"

const Content = () => {
    return (
        <div className="content"><User /><MenuPanel /></div>
    )
}

export default Content