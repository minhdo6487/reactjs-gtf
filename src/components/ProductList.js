import React, {Component} from 'react';
import Product from './Product';
import Errors from './Errors';
import * as action from './../actions/index';
import {connect} from 'react-redux';
import store from "../store";


class ProductList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            errors: []
        }
    }

    componentDidMount() {
        store.dispatch({type: 'FETCHING_DATA'});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps && nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    render() {
        let {match, products, auth} = this.props;
        let elements = products.map((product, index) => {
            return <Product
                        key={index}
                        product={product}
                        match={match}
                    />
        });
        let isFalure = (auth.isProgress === false) ? <Errors errors={this.props.errors}/> : '';


        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    {isFalure}

                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>Product IDs</th>
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>Company</th>
                            <th>Display Name</th>
                            <th/>
                        </tr>
                        </thead>
                        <tbody>
                            {elements}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


const mapStatetoProp = (state) => {
    return {
        products: state.products,
        errors: state.errors,
        auth: state.auth
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchData: () => {
            dispatch(action.fetchData());
        }
    }
};


export default connect(mapStatetoProp, mapDispatchToProps)(ProductList);
