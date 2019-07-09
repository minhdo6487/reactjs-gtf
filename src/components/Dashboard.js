import React, {Component} from 'react';
import Menu from "./Navigation/Menu";
import {connect} from "react-redux";
import SidebarComponent from "./Navigation/SidebarComponent";
import ProductContainer from './../containers/ProductContainer';


class Dashboard extends Component {
    render() {
        return (
            <div className="clearfix">
                <SidebarComponent />
                <Menu />
                <ProductContainer />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        display: state.display
    }
};


export default connect(mapStateToProps, null)(Dashboard);
