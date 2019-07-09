import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from './../actions/index';
import {NavLink, Route} from 'react-router-dom';
import ProductDetail from './../components/ProductDetail'


class Product extends Component {

    // onUpdateProduct = (product) => {
    //     this.props.updateProduct(product);
    // };

    onDeleteProduct = (product) => {
        this.props.deleteProduct(product);
    };


    render() {
        let {product} = this.props;
        return (
            <tr>
                <td>{product.id}</td>
                <td>{product.pricing_name}</td>
                <td>{product.product_type}</td>
                <td/>
                <td/>
                <td>
                    <div className="btn-group text-right col-sm-6 ">
                        <NavLink to={`product/${product.id}/edit`} exact={false} key={product.id}
                            className="list-group-item">
                            <i className="fa fa-edit"/>
                        </NavLink>


                        <button type="button" className="btn btn-default">
                            <i className="fa fa-trash-alt" onClick={() => this.onDeleteProduct(product)}/>
                        </button>
                    </div>
                </td>
                <Route path="/product/:product_id/edit" component={ProductDetail} />
            </tr>
        );
    }
}


// deleteProduct

const mapStateToProp = (state) => {
    return {
        products: state.products
    }
};

const maapDispatchToProp = (dispatch, props) => {
    return {
        updateProduct: (product) => {
            dispatch(action.updateProduct(product))
        },
        deleteProduct: (product) => {
            dispatch(action.deleteProduct(product))
        },
    }
};


export default connect(mapStateToProp, maapDispatchToProp)(Product);
