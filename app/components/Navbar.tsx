
import type { JSX } from 'react/jsx-dev-runtime';
import { Link } from 'react-router';
const Navbar = () : JSX.Element => {
    return( 
        <nav className='navbar'>
            <Link to="/">
                <p className='text-exl font-bold text-gradient'
                >Resumind</p>
            </Link>
            <Link to='/upload' className='primary-button max-w-fit'>
                Upload Resume 
            </Link>

        </nav>

    )
}
export default Navbar