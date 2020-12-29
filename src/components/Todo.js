import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Todo extends Component {
            

    getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
    };

   

    render() {

        // console.log("DW",this.props);


        const {id,title} = this.props.todo

        return (
           
            <div style={this.getStyle()}>
                  <p>
                      
                  <input type="checkbox" name="" id="" onChange={this.props.markComplete.bind(this,id)} /> { } 
                    {/* <input type="checkbox" name="" id="" onChange={this.markComplete.bind(this)} /> { }      */}


                           {/* { this.props.todo.title } */}
                { title }
                <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)} >x</button>
               </p>
            </div>
        )
    }
}

Todo.propTypes = {
        todo: PropTypes.object.isRequired

}

const btnStyle = {
            backgroundColor:'red',
            color: '#fff',
            border: 'none',
            padding: '5px 9px',
            borderRadius: '50%',
            cursor: 'pointer',
            float: 'right'

}
export default Todo

