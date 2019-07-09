import React, { Component } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles'
import {connect} from 'react-redux';
import styles from './styles';
import * as action from './../../actions/index'
import {menuItems} from './menuItems';


class MenuBar extends Component {
    constructor( props ) {
        super( props );
        this.state = {}
    }
    // this method sets the current state of a menu item i.e
    // whether it is in expanded or collapsed or a collapsed state
    handleClick( item ) {
        this.setState( prevState => (
            { [ item ]: !prevState[ item ] }
        ) )
    }

    // if the menu item doesn't have any child, this method simply
    // returns a clickable menu item that redirects to any location and if there is no child this method uses recursion to go until the last level of children and then returns the item by the first condition.
    handler( children ) {
        const { classes } = this.props;
        const { state } = this;

        return children.map( ( subOption, index ) => {
            if ( !subOption.children ) {
                return (
                    <div key={ index  }  className={classes.nested}>
                        <ListItem button key={ index } >
                            <ListItemIcon className="w-15">
                                {subOption.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={ subOption.name }
                            />
                        </ListItem>


                    </div>
                )
            }

            return (
                <div key={ subOption.name }>
                    <ListItem
                        button
                        onClick={ () => this.handleClick( subOption.name ) }>
                        <ListItemText
                            inset
                            primary={ subOption.name } />
                        { state[ subOption.name ] ?
                            <ExpandLess /> :
                            <ExpandMore />
                        }
                    </ListItem>
                    <Collapse
                        in={ state[ subOption.name ] }
                        timeout="auto"
                        unmountOnExit
                    >
                        { this.handler( subOption.children ) }
                    </Collapse>
                </div>
            )
        })
    }

    handleDrawerClose = () => {
        this.props.onToggle(false)
    };

    render() {
        const { classes, display} = this.props;
        if (!display.is_side_bar) {return ''}
        return (
            <div className={classes.list}>
                <Drawer
                    variant="persistent"
                    className={classes.drawer}
                    anchor="left"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    open={display.is_side_bar}>
                    <div>
                        <List>
                            <ListItem
                                key="menuHeading"
                                divider
                                disableGutters
                            >
                                <ListItemText
                                    className={ classes.menuHeader }
                                    inset
                                    primary="Sunseap Project"
                                />
                                <div className={classes.drawerHeader}>
                                    <IconButton onClick={this.handleDrawerClose}>
                                        <ChevronLeftIcon />
                                    </IconButton>
                                </div>
                            </ListItem>
                            { this.handler( menuItems.data ) }
                        </List>
                    </div>
                </Drawer>
            </div>
        )
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


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MenuBar));
