import { Link } from "react-router-dom"
const Header = () => {
    return (
        <nav className="w-full h-[60px] bg-gray-900 text-white flex justify-between items-center p-3">
            <Link to='/' className="select-none">
                Header
            </Link>
            <Link to='/compile'>Compile</Link>

        </nav>
    )
}

export default Header