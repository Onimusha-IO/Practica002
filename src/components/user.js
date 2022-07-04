import "../styles/user.css"

const User = () => {
    return (
        <div className="user">
            <div className="photo"></div>
            <label className="userName">Juan Pablo Ramirez</label>
            <label className="jobTitle">Facturación</label>
            <a href="/">Cerrar sesión</a>
        </div>
    )
}

export default User