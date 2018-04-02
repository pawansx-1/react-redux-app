// src/containers/AddCounter.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCounter } from '../actions';
import {bindActionCreators} from 'redux';

class AddCounter extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="container">
                <form>
                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-primary" onClick={(e) => {e.preventDefault(); this.props.dispatch(addCounter())}}>
                                Add Counter
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
