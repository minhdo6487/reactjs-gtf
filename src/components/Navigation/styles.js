const drawerWidth = 250;

const styles = (theme) => ({
    // nav bar
    root: {
        // flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },



    // side bar
    list: {
        width: 250,
    },
    links: {
        textDecoration:'none',
    },
    menuHeader: {
        paddingLeft: '30px'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
    },
    drawer: {
        width: 250,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 250,
    },

    nested: {
        paddingLeft: theme.spacing(10),
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


export default styles;
