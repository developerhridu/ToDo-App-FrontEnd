// Change state according to input value in class component

import React, {Component} from 'react';

class ChangeStateAccordingToInputValue extends Component {
    inputRef;

    constructor() {
        super();

        this.state = {
            color: 'Red'
        }
    }
    changeValue = () =>{
        let val = this.inputRef.value;
        console.log(val);
        // alert(value2)
        if (val == 1){
            this.setState({color: "Blue"})

        }
        else if (val == 2){
            this.setState({color: "Green"})

        }
        else if (val == 3){
            this.setState({color: "Yellow"})

        }

    }
    render() {
        return (
            <div>
                <h2>{this.state.color}</h2>
                <input ref={(input) =>{this.inputRef = input}} />
                {/*<button onClick={()=> this.setState({color: "Blue"})}>Blue</button>*/}
                {/*<button onClick={()=> this.setState({color: "Green"})}>Green</button>*/}
                {/*<button onClick={()=> this.setState({color: "Yellow"})}>Yellow</button>*/}
                {/*<button onClick={()=> this.setState({color: "White"})}>White</button>*/}
                <button className="btn btn-primary" onClick={this.changeValue}>Change Color</button>

            </div>
        );
    }
}

export default ChangeStateAccordingToInputValue;