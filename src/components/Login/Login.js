import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../../actions';
import store from '../../store';

import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './styles'
import './../../style.css'
import Fab from '@material-ui/core/Fab';


class Login extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            username: '',
            password: ''
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

    onSubmit = (event) => {
        event.preventDefault();
        store.dispatch({
            type: "LOGIN",
            payload: this.state
        })
    };

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            username: '',
            password: ''
        });
        this.props.history.push('/dashboard')
    }

    render() {
        let {classes} = this.props;
        return (
            <div id="showcase" className={classes.login_register_wrapper}>
                <div className={classes.login_register}>
                    <div className="card box-radius box-transparent">
                        <div className="card-body">
                            <div className="form-header default-color">
                                <h5 className="text-center">
                                    <i className="fa fa-user"/> Login
                                </h5>
                            </div>

                            <form onSubmit={this.onSubmit}>
                                <div className="input-group input-group-sm mb-3">
                                    <TextField
                                        id="standard-name"
                                        name="username"
                                        label="username"
                                        className={classes.textField}
                                        value={this.state.username}
                                        onChange={this.onHandleChange}
                                        margin="normal"
                                    />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <TextField
                                        id="password"
                                        label="password"
                                        className={classes.textField}
                                        value={this.state.password}
                                        onChange={this.onHandleChange}
                                        margin="normal"
                                        type="password"
                                        name="password"
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 text-left">
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <a className="text-danger" href="/forgot-password">Forgot your password ?</a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 text-left">
                                        <Fab
                                            variant="extended"
                                            size="medium"
                                            color="primary"
                                            aria-label="Add"
                                            className={classes.margin}
                                            type="submit"
                                        >
                                            SIGN IN
                                        </Fab>
                                    </div>
                                    <div className="col-sm-6 d-flex align-items-center justify-content-end">
                                        Not a member? &nbsp;
                                        <a href="/register"> Register</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProp = state => {
    return {
        isProgress: state.auth.isProgress
    }
};

const mapDispatchToProp = (dispatch, props) => {
    return {
        auth: (payload) =>
            dispatch(action.auth(payload))
    }
};

export default connect(mapStateToProp, mapDispatchToProp)(withStyles(styles)(Login));
