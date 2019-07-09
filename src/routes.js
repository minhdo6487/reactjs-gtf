import React from 'react';
import Home from './components/Home/Home';
import LandingPage from './components/Home/LandingPage';
import ProductContainer from './containers/ProductContainer';
import NotFound from './components/NotFound';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ProductDetail from './components/ProductDetail';
import Contact from './components/Contact/Contact';
import DashBoard from './components/Dashboard';

const routes = [
    {
        path: '/',
        exact: true,
        main: ({match, location}) => <LandingPage compo={<Home match={match} location={location}/>} />
    },
    {
        path: '/contact',
        exact: true,
        main: ({match, location}) => <LandingPage compo={<Contact match={match} location={location}/>} />
    },
    {
        path: '/products',
        exact: false,
        main: ({match, location}) => <ProductContainer match={match} location={location}/>,
    },
    {
        path: '/product/:product_id/edit',
        exact: false,
        main: ({match, location, history}) => <ProductDetail history={history} match={match} location={location}/>,
    },
    {
        path: '/login',
        exact: false,
        main: ({location, history}) => <LandingPage compo={<Login location={location} history={history}/>} />,
    },
    {
        path: '/register',
        exact: false,
        main: ({location, history}) => <LandingPage compo={<Register location={location} history={history}/>} />,
    },
    {
        path: '/dashboard',
        exact: false,
        main: ({match, location, history}) => <DashBoard history={history} match={match} location={location}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;