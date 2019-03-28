import React, {Component} from 'react';
import './Panel.css'
import connect from "react-redux/es/connect/connect";


class Panel extends Component {
    render(){
        const {text, background} = this.props;
        const PanelStyle = {
            backgroundColor: background,
        };
        return (
            <div className='panel' style={PanelStyle}>
                <h1>{text}</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        text: state.text,
        background: state.background
    };
};


export default connect(mapStateToProps)(Panel);