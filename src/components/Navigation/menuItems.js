import React from "react";
import AccountCircle from '@material-ui/icons/AccountCircle';
import ContactSupport from '@material-ui/icons/ContactSupport';
import Info from '@material-ui/icons/Info';


export const menuItems = {
    "data" : [
        {
            "name": "Products",
            "url": "/products",
            "children": [
                {
                    "name": "List",
                    "url": "",
                    "icon": <i className="fa fa-list-alt"/>
                },
                {
                    "name": "Create",
                    "url": "create",
                    "icon": <i className="fa fa-plus"/>
                }
            ]
        },
        {
            "name": "Order",
            "url": "/products",
            "children": [
                {
                    "name": "List",
                    "url": "",
                    "icon": <i className="fa fa-list-alt"/>
                },
                {
                    "name": "Create",
                    "url": "create",
                    "icon": <i className="fa fa-plus"/>
                }
            ]
        }
    ]
};


export const navbarmenuItem = [
    {
        to: '/',
        name: 'Home page',
        exact: true,
        iconComponent: <Info />
    },
    {
        to: '/login',
        name: 'My Account',
        exact: false,
        iconComponent: <AccountCircle />
    },
    {
        to: '/contact',
        name: 'Contact Us',
        exact: false,
        iconComponent: <ContactSupport />
    },
];