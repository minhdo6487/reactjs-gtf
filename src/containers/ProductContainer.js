import React, {Component} from 'react'
import {connect} from 'react-redux';
import ProductList from './../components/ProductList'


class ProductContainer extends Component {
    render() {
        let {products, match} = this.props;

        return (
            <div>
                <ProductList
                    products={products}
                    match={match}
                />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};


export default connect(mapStateToProps, null)(ProductContainer);
