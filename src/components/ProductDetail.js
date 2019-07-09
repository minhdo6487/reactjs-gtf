import React, {Component} from 'react';
import * as action from './../actions/index'
import {connect} from 'react-redux';
import store from './../store'

class ProductDetail extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: "",
            description: ""
        }
    }

    onHandleChange = (event) => {
        event.preventDefault();
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        })
    };

    onHandleSubmit = (event) => {
        event.preventDefault();
        this.props.addProduct(this.state);
        this.props.history.push('/products')
    };

    componentWillReceiveProps(nextProps, nextContext){
        if (nextProps && nextProps.product) {
            this.setState({
                name: nextProps.product.pricing_name,
                description: nextProps.product.description
            });
        }

    }

    componentDidMount() {
        let {match} = this.props;
        let product_id = match.params.product_id;
        store.dispatch({
            type: "FETCHING_SPECIFIC",
            id: product_id
        });
    }

    render() {
        return (
            <div className="col-sm-10 mt-5">
                <div className="card box-radius box-transparent">
                    <div className="card-body">
                        <h5>
                            Product
                        </h5>
                        <form onSubmit={this.onHandleSubmit}>
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        Product Name
                                    </span>
                                </div>
                                <input type="text"
                                       className="form-control"
                                       name="name"
                                       placeholder="name"
                                       onChange={this.onHandleChange}
                                       value={this.state.name}
                                />
                            </div>
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        Description
                                    </span>
                                </div>
                                <textarea name="description"
                                          className="form-control"
                                          cols="30"
                                          rows="10"
                                          onChange={this.onHandleChange}
                                          value={this.state.description}
                                          placeholder="Description"
                                />
                            </div>
                            <div className="row">
                                <div className="col-sm-12 text-left">
                                    <button type="submit" className="btn btn-primary">Accept</button>
                                    <button type="submit" className="btn btn-danger">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProp = (state) => {
    return {
        products: state.products,
        product: state.product
    }
};

const mapDispatchToProp = (dispatch, props) => {
    return {
        addProduct: (product) => {
            dispatch(action.addProduct(product))
        },
        fetchSpecific: (id) => {
            dispatch(action.fetchSpecific(id))
        }
    }
};


export default connect(mapStateToProp, mapDispatchToProp)(ProductDetail);
