import React, { Component } from 'react'
import axios from 'axios';

export default class DeleteForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             id: '',
             delete: ''
        }
    }

    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    deleteHandler = (e) => {
        e.preventDefault();
        axios.delete('http://myapi-profstream.herokuapp.com/api/c01201/wines' + '/' + this.state.delete)
        .then(response => console.log(response))
        .catch(err => {
            console.error(err);
            console.error(err.data);
        })
    }

    render() {
        return (
            <div>

            <form>
            <div>
                <p>Enter id number of wine you want to delete</p>
                <input type="text" name='delete' value={this.state.delete} onChange={this.onChangeHandler}/>
            </div>
            <button type="submit" onClick={this.deleteHandler}>Delete</button>      
            </form>
            </div>
        )
    }
}
