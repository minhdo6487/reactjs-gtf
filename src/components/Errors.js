import React, {Component} from 'react';


class Errors extends Component {
    render() {
        let {errors} = this.props;

        if (errors === {}) {return ''}
        return (
            <div className="alert alert-danger" role="alert">
                {errors.message}
            </div>
        );
    }
}


export default Errors;
