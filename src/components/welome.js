import Content from "./content"
import Nav from "./nav"

import "../styles/welcome.css"
import { DataProvider } from "../context/context"

const Welcome = () => {
    return (
        <DataProvider>
            <div className="">
                <Nav />
                <Content />
            </div>
        </DataProvider>
    )
}

export default Welcome