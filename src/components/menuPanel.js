import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faGear, faCarSide, faFileInvoiceDollar, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import "../styles/menuPanel.css"
import { useContext } from 'react'
import { AppContext } from '../context/context'

const MenuPanel = () => {
    const { value } = useContext(AppContext)

    return (
        <div className={value ? 'menuPanelTrue' : 'menuPanelFalse'}>
            <div className="option">
                <div className="left">
                    <div className="icon">
                        <FontAwesomeIcon icon={faHouseChimney} className={"faIcon"} />
                    </div>
                    <div className="text">Inicio</div>
                </div>
                <FontAwesomeIcon icon="" className={"faIcon"} />
            </div>
            <div className="option">
                <div className="left">
                    <div className="icon">
                        <FontAwesomeIcon icon={faGear} className={"faIcon"} />
                    </div>
                    <div className="text">Maestros</div>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className={"faIcon"} />
            </div>
            <div className="option">
                <div className="left">
                    <div className="icon">
                        <FontAwesomeIcon icon={faCarSide} className={"faIcon"} />
                    </div>
                    <div className="text">Procesos</div>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className={"faIcon"} />
            </div>
            <div className="option">
                <div className="left">
                    <div className="icon">
                        <FontAwesomeIcon icon={faFileInvoiceDollar} className={"faIcon"} />
                    </div>
                    <div className="text">Reportes</div>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className={"faIcon"} />
            </div>
        </div>
    )
}

export default MenuPanel