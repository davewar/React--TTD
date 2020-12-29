import React, { Component } from 'react'

export class AddTodo extends Component {


    state = {
        title: ''
    }

    changedValue = (e) => this.setState({title: e.target.value})

    handleSubmit = (e) => {
        e.preventDefault()
       this.props.addTodo(this.state.title)
       this.setState({title: ''})
    }

    render() {
        return (
            <form style={{display: 'flex', padding:'5px'}} onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.title}
                onChange={this.changedValue}
                name="title" placeholder="Add todo...." style={{flex:'10'}}/>
                <input type="submit" value="Submit" className="btn" style={{flex:'1'}}/>
            </form>
        )
    }
}

export default AddTodo

