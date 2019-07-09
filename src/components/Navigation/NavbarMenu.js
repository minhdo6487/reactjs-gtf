import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles'
import {Route, Link} from "react-router-dom";
import {navbarmenuItem} from './menuItems';
import styles from './styles';
import {connect} from "react-redux";

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                let active = match ? 'active' : '';
                // trong truong hop muon dua vao nhieu class
                /*
                return  <li className={ `my-li $(active)` }>
                            <Link to={to}>{label}</Link>
                        </li>
                */
                return  <li className={`nav-item ${active}`}>
                    <Link className="nav-link" to={to} try_name={'try name'}>
                        {label}
                    </Link>
                </li>
            }}
        />
    )
};


class NavbarMenu extends Component {
    showMenu = (menu) => {
        let menu_elements = '';
        if (!menu) {
            return menu_elements
        } else {
            menu_elements = menu.map((item, index) => {
                return  <MenuLink
                    key={index}
                    label={item.name}
                    to={item.to}
                    iconComponent={item.iconComponent}
                    activeOnlyWhenExact={item.exact}
                />
            })
        }
        return menu_elements;
    };

    render() {
        return (
            <ul className="navbar-nav ml-auto">
                {this.showMenu(navbarmenuItem)}
            </ul>
        );
    }
}


const mapStateTprops = state => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateTprops, null)(withStyles(styles)(NavbarMenu));
