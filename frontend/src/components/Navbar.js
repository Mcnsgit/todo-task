import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header>
                <div>
                    <Link to='/'>
                        my list
                    </Link>
                    <Link to='/add-todo'>
                        add item
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Navbar