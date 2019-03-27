import React, {Component} from 'react';
import Panel from "../../components/Panel/Panel";
import Keyboard from "../../components/Keyboard/Keyboard";
import './Password.css'

class Password extends Component {
    render(){
        return (
            <div className='password'>
                <Panel/>
                <Keyboard/>
            </div>
        )
    }
}

export default Password;

