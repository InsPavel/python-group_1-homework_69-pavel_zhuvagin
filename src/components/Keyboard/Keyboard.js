import React, {Component} from 'react';
import './Keyboard.css'


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


class Keyboard extends Component {
    render(){
        return (
            <div className='row ml-0'>
                {numbers.map(number => {
                    return (
                        <div className='col col-4 p-1'>
                            <button className='w-100'>{number}</button>
                        </div>
                    )
                })}
                <div className='col col-4 p-1'>
                    <button className='w-100'>{'<'}</button>
                </div>
                <div className='col col-4 p-1'>
                    <button className='w-100'>{'0'}</button>
                </div>
                <div className='col col-4 p-1'>
                    <button className='w-100'>{'E'}</button>
                </div>
            </div>
        )
    }
}

export default Keyboard;