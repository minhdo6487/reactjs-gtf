import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles'
import {Route, Link} from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from "@material-ui/core/AppBar";
import {Grid} from "@material-ui/core";
import {connect} from 'react-redux';
import SidebarComponent from './../../components/Navigation/SidebarComponent'
import * as action from './../../actions/index'
import classNames from 'classnames';
import {navbarmenuItem} from './menuItems';



const drawerWidth = 250;
const styles = (theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: 8,
        flex: 1,
        color: 'inherit'
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
    menuButton: {
        marginRight: 20,
    },

    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }

});


const MenuLink = ({ to, activeOnlyWhenExact, iconComponent }) => {
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
                return  <li className={`nav-link ${active}`}>
                    <Link className="text-light" to={to} try_name={'try name'}>
                        {iconComponent}
                    </Link>
                </li>
            }}
        />
    )
};




class Menu extends Component {


    showMenu = (menu) => {
        let menu_elements = '';
        if (!menu) {
            return menu_elements
        } else {
            menu_elements = menu.map((item, index) => {
                return  <MenuLink
                    key={item.id}
                    label={item.name}
                    to={item.to}
                    iconComponent={item.iconComponent}
                    activeOnlyWhenExact={item.exact}
                />
            })
        }
        return menu_elements;
    };

    onToggle = () => {
        this.props.onToggle();
    };

    render() {
        const { classes, display } = this.props;

        return (
            <div>
                <SidebarComponent />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: display.is_side_bar,
                    })}
                >
                    <Toolbar disableGutters={!display.is_side_bar}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.onToggle}
                            className={classNames(classes.menuButton, classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Grid container spacing={3} justify="flex-start" >
                            <Grid item sm={6}> </Grid>
                            <Grid item sm={6} position="relative">
                                <div className="input-group input-group-sm">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fa fa-search"/>
                                    </span>
                                    </div>
                                    <input type="text"
                                           className="form-control"
                                           name="search"
                                           placeholder="Search"
                                    />
                                    <ul className="nav">
                                        {this.showMenu(navbarmenuItem)}
                                    </ul>
                                </div>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        display: state.display
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggle: (is_display) => {
            dispatch(action.onToggle(is_display))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Menu));
