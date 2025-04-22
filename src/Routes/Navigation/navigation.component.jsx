import { Outlet, Link } from "react-router-dom";
import { Fragment } from 'react';

const Navigation = () => {
    return (
        <Fragment>
            <div className='logo-conatiner'>
                <Link className="nav-link" to='/'>
                    Home
                </Link>
            </div>
            <div className='nav-links-container'>
                <Link className="nav-link" to='/shop'>
                    SHOP
                </Link>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;