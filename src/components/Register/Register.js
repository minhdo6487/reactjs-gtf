import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../../actions';
import store from '../../store';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './styles'
import './../../style.css'
import Fab from '@material-ui/core/Fab';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


class Regisger extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            username: '',
            password: '',
            confirm_password: '',
            fullname: '',
            mobile: '',
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
                    <div className="card box-radius ">
                        <div className="card-body">

                            <div className="form-header peach-gradient">
                                <h5 className="text-center">
                                    <i className="fa fa-user"/> Register
                                </h5>
                            </div>

                            {/*<Form onSubmit={this.onSubmit}>*/}
                            <ValidatorForm
                                ref="form"
                                onSubmit={this.onSubmit}
                                onError={errors => console.log(errors)}
                            >
                                <div className="mb-3 d-flex align-items-center">
                                    <div className="icon-text"><i className="fa fa-user-tie fa-2x"/></div>
                                    <TextField
                                        id="fullname"
                                        name="fullname"
                                        label="Fullname"
                                        className={classes.textField}
                                        value={this.state.fullname}
                                        onChange={this.onHandleChange}
                                        margin="normal"
                                    />
                                </div>
                                <div className="mb-3 d-flex align-items-center">
                                    <div className="icon-text"><i className="fa fa-user fa-2x"/></div>
                                    <TextValidator
                                        id="standard-name"
                                        label="Username"
                                        onChange={this.onHandleChange}
                                        name="username"
                                        validators={['required']}
                                        errorMessages={['this field is required']}
                                        margin="normal"
                                        value={this.state.username}
                                        className={classes.textField}
                                    />
                                </div>
                                <div className="mb-3 d-flex align-items-center">
                                    <div className="icon-text"><i className="fa fa-lock fa-2x"/></div>
                                    <TextValidator
                                        label="Password"
                                        onChange={this.onHandleChange}
                                        name="password"
                                        type="password"
                                        validators={['required']}
                                        errorMessages={['this field is required']}
                                        value={this.state.password}
                                        className={classes.textField}
                                    />

                                </div>
                                <div className="mb-3 d-flex align-items-center">
                                    <div className="icon-text"><i className="fa fa-user-lock fa-2x"/></div>
                                    <TextValidator
                                        id="confirm_password"
                                        label="Confirm Password"
                                        onChange={this.onHandleChange}
                                        name="confirm_password"
                                        type="password"
                                        validators={['required']}
                                        errorMessages={['this field is required']}
                                        value={this.state.confirm_password}
                                        className={classes.textField}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 text-left">
                                        <Fab
                                            variant="extended"
                                            size="medium"
                                            color="secondary"
                                            aria-label="Add"
                                            className={classes.margin}
                                            type="submit"
                                        >
                                            SIGN UP
                                        </Fab>
                                    </div>
                                    <div className="col-sm-6 d-flex align-items-center justify-content-end">
                                        Have an account? &nbsp;
                                        <a href="/login"> Login</a>
                                    </div>
                                </div>
                            {/*</Form>*/}
                            </ValidatorForm>
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

export default connect(mapStateToProp, mapDispatchToProp)(withStyles(styles)(Regisger));
