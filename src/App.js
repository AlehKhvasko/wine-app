import React from 'react'
import axios from 'axios'
import './App.css';
import WineBox from './components/WineBox.jsx';
import PostForm from './components/PostForm.jsx';
import DeleteForm from './components/DeleteForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      data: [],
      key: [],
      description: [],
      add:false,
      clicked: false
    }
  }
  async callApi() {
    try {
      const response = await axios.get('http://myapi-profstream.herokuapp.com/api/c01201/wines');
      this.setState({
        data: response.data,
        description: response.data.map(info => info.description),
        key: response.data.map(info => info.id),
      })
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  addHandler(){
      this.setState({
      add: !this.state.add,
    })
  }

componentDidMount() {
  this.callApi();
}

  render() { 

    return (
      <div>
      <h1>Wine list</h1>
      <div className="main_postForm">
        <div className="postForm">
          {this.state.add ? <PostForm /> : null}
          <button type="submit" onClick={() =>{this.setState({add: !this.state.add})}}>Add wine</button>
        </div>
        <div className="postForm">
          {this.state.delete ? <DeleteForm /> : null}
          <button type="submit" onClick={() =>{this.setState({delete: !this.state.delete})}}>Delete wine</button>
        </div>
      </div>
      <div className='mainDiv' >
      {this.state.data.map(info => {
        return <div><WineBox  
        key ={info['id']}
        id={info.id}
        name = {info.name}
        year = {info.year}
        click={this.state.visible?<div className='description'><img src={info.picture} alt='no img'/>
        <p>${info.price}</p><p>{info.description}</p></div> :null}/>
        <button onClick={() => {this.setState({visible:!this.state.visible})}}>Show description</button>
        </div>
      })}
      </div>
      </div>
    )
  }
}

export default App
