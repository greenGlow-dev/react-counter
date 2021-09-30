import React from "react";
import ReactDom from "react-dom";

class Mega extends React.Component {

    state= {
        count :0
    }

    upcounter = () =>{
      this.setState({count:this.state.count+1})
    }
    downcounter = () =>{
        this.setState({count:this.state.count-1})
       }

    render() {
        return (
            <div className='container mt-5'>
                <div className='card'>
                    <div className='card-header'>Counter</div>
                    <div className='card-body'>{this.state.count}</div>
                    <div className='card-footer'>
                        <button className='btn btn-success' onClick={this.upcounter}>+</button>
                        <button className='btn btn-danger ml-2' onClick={this.downcounter}>-</button>
                    </div>
                </div>

            </div>
        )
    }
}

ReactDom.render(<Mega />, document.getElementById('root'))




