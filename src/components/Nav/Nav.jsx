import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link> {/* Here, the count of items in cart must be shown too! */}
        </nav>
    );
}

export default Nav;