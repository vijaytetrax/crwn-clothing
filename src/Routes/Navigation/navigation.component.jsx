import { Outlet, Link } from "react-router-dom";
import { Fragment } from 'react';
import CrwnLogo from '../../Assests/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">

                <Link className="logo-conatiner" style={{margin: "10px"}} to='/'>
                    <img src={CrwnLogo} alt="Crwn Logo" className="logo" />
                </Link>

                <div className='nav-links-container'>
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    <Link className="nav-link" to='/sign-in'>
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;