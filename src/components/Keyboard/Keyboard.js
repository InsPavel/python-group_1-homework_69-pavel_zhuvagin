import React, {Component} from 'react';
import './Keyboard.css'
import connect from "react-redux/es/connect/connect";


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class Keyboard extends Component {
    disabledButtonNumber = () => {
        const {text} = this.props;
        return text.length === 4 ||
            (text === 'Access Granted' || text === 'Error')
    };

    disabledButtonRemove = () => {
        const {text} = this.props;
        return text.length === 0
    };

    disabledButtonEnter = () => {
        const {text} = this.props;
        return text === 'Access Granted' ||
            text === 'Error'
    };

    render(){
        const {addNumber, removeNumber, enterPassword} = this.props;
        return (
            <div className='row ml-0'>
                {numbers.map(number => {
                    return (
                        <div className='col col-4 p-1' key={number}>
                            <button
                                className='w-100'
                                onClick={() => addNumber(number)}
                                disabled={this.disabledButtonNumber()}
                            >
                            {number}
                            </button>
                        </div>
                    )
                })}
                <div className='col col-4 p-1'>
                    <button
                        className='w-100'
                        onClick={removeNumber}
                        disabled={this.disabledButtonRemove()}
                    >
                    {'<'}
                    </button>
                </div>
                <div className='col col-4 p-1'>
                    <button
                        className='w-100'
                        onClick={() => addNumber(0)}
                        disabled={this.disabledButtonNumber()}
                    >
                    {'0'}
                    </button>
                </div>
                <div className='col col-4 p-1'>
                    <button
                        className='w-100'
                        onClick={() => enterPassword()}
                        disabled={this.disabledButtonEnter()}
                    >
                    {'E'}
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        text: state.text
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addNumber: (number) => dispatch({type: 'ADD_NUMBER', number}),
        removeNumber: () => dispatch({type: 'REMOVE_NUMBER'}),
        enterPassword: () => dispatch({type: 'ENTER_PASSWORD'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);