// src/containers/Counter.js

import React, { Component } from 'react';
import { connect } from 'react-redux';

class counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='container'>
                <div className='notification'>
                    <h1>{this.props.count}</h1>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.counter
    };
}

export default connect(mapStateToProps)(counter);