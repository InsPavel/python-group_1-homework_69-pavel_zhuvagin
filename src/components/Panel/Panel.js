import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Panel.css'

class Panel extends Component {
    render(){
        return (
            <div className='panel'>
                <h1>{this.props.password}</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        password: state.password
    };
};


export default connect(mapStateToProps)(Panel);