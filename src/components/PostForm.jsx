import React, { Component } from 'react';
import axios from 'axios';


export default class PostForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            name:'',
            year: '',
            grapes: '',
            country: '',
            region: '',
            description: '',
            price: '',
        }
    }
    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios
        .post('http://myapi-profstream.herokuapp.com/api/c01201/wines',this.state)
        .then(response => {
            console.log(response);
        })
        .catch(error => {console.log(error);})
    }

    render() {
        const {name, year, grapes, country, region, description, price} = this.state;
        return (
            <div>
                <form className="main_postForm" onSubmit={this.submitHandler} action="post" method="post">
                    <div>
                        <p>name</p>
                        <input type="text" name='name' value={name} onChange={this.onChangeHandler}/>
                    </div>
                    <div>
                        <p>year</p>
                        <input type="text" name='year' value={year} onChange={this.onChangeHandler}/>
                    </div>
                    <div>
                        <p>grapes</p>
                        <input type="text"name='grapes' value={grapes} onChange={this.onChangeHandler}/>
                    </div>
                    <div>
                        <p>country</p>
                        <input type="text" name='country' value={country} onChange={this.onChangeHandler}/>
                    </div>
                    <div>
                        <p>region</p>
                        <input type="text" name='region' value={region} onChange={this.onChangeHandler}/>
                    </div>
                    <div>
                        <p>description</p>
                        <input type="text" name='description' value={description} onChange={this.onChangeHandler}/>
                    </div>
                    <div>
                        <p>price</p>
                        <input type="text" name='price' value={price} onChange={this.onChangeHandler}/>
                    </div>
                    <div><button type="submit">Add wine</button></div>
                </form>
                
            </div>
        )
    }
}
