import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import ShowPost from './ShowPost'




export default class CreatePost extends Component {

      
      state={
      userName:"",
      title:"",
      content:"",
      list:[]
    }

 

    updateInput(key, value){
      this.setState({
        [key]:value

      })
    }

    addItem(){
      const userName = {
          id: 1 + Math.random(),
          value: this.state.userName.slice()
      };
      const title = {
        id: 1 + Math.random(),
        value: this.state.title.slice()
    };
    const content = {
        id: 1 + Math.random(),
        value: this.state.content.slice()
    };

      const list = [...this.state.list];

      list.push(userName, title, content);

      this.setState({
        list,
        userName:"",
        title:"",
        content:"",
      });

    }

    deleteItem (id) {
      const list = [...this.state.list];
      const updateList = list.filter(item => item.id !== id);

      this.setState({list: updateList});
    }
  
    render () {
      return (
          <div>
           
            <input
            type="text"
            placeholder="Username"
            value={this.state.userName}
            onChange={e=> this.updateInput("userName", e.target.value)}
            />
            <input
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={e=> this.updateInput("title", e.target.value)}
            />
            <input
            type="text"
            placeholder="Content"
            value={this.state.content}
            onChange={e=> this.updateInput("content", e.target.value)}
            />
            
            <button onClick={()=> this.addItem()}>Add</button>
            <Link to={{pathname:`/showpost/${this.state.list}`,ForwardedUser:this.state.list}}><button onClick={()=> this.addItem()}>Post</button></Link> 
            
            
            <br/>
            
            <ul className="formSaved">
              {this.state.list.map(item => {
                return (
                 
                  <li key={item.id}> {item.value} <button onClick={()=>this.deleteItem(item.id)}> X </button> </li>
              
                  
                )
              })}
            </ul>
            
          </div>
      );
    }
  }


