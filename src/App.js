import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from './routes'
import {connect} from "react-redux";


class App extends Component {

    showContentMenu = (routes) => {
        let result = null;
        if (!routes) {
            return result;
        } else {
            result = routes.map((item, index) => {
                return  <Route
                            key={index}
                            path={item.path}
                            exact={item.exact}
                            component={item.main}
                        />
            });
            return result;
        }
    };

    render() {
        return (
            <div className="container-fluid">
                <Router>
                    {/* Menu */}

                    {/*<Home />*/}
                    {/* Content */}

                    {/* switch for handle case dirrect change on client URL*/}
                    <Switch>
                        {this.showContentMenu(routes)}
                    </Switch>
                </Router>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        display: state.display
    }
};


export default connect(mapStateToProps, null)(App);
