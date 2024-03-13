import { Link } from 'react-router-dom'
import AddTodo from '../pages/AddTodo'

const Navbar = () => {
    const handleAddTodo = () => {
        AddTodo()
    }

    return (
        <div>
            <header>
                <div>
                    <Link to='/'>
                        my list
                    </Link>
                    <Link to='/addtodo' onClick={handleAddTodo}>
                        add item
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Navbar
