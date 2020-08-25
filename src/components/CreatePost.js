
import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class CreatePost extends Component {
    render() {
        return (
          <div>
            <input
            type="text"
            name="username"
            placeholder="Username"
            /* value={this.props.username} */
            onChange={this.props.addItem}
            />
            <input
            type="text"
            name="title"
            placeholder="Title"
            value={this.props.title}
            onChange={this.props.addItem}
            />
            <input
            type="text"
            name="content"
            placeholder="Content"
            value={this.props.content}
            onChange={this.props.addItem}
            />
            
            <button type="submit" onClick={this.props.submit}>
            <Link 
            to={{pathname:`/showpost/${this.props.list}`,
            ForwardedUser:this.props.userName,
            ForwarTitle: this.props.title,
            ForwarContent: this.props.content,
            ForwardedTime: this.props.postTime,
            }}> Add </Link> </button>
            <br/> 
          </div>
        );
    }
}
