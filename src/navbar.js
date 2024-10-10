import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (

        <nav className="nav">
            <Link to="/about" className="site-title"><span>Dev</span>Minds</Link>
            <ul>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/contact">Contact Us</CustomLink>
            </ul>
        </nav>

    )
}


function CustomLink({ to, children, ...props }) {
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvePath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
