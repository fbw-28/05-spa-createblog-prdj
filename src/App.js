import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navegation from './components/Navegation';
import Home from "./components/Home";
import CreatePost from './components/CreatePost';
import ShowPost from './components/ShowPost';


export default class App extends React.Component {
     
    state={
      userName:"",
      title:"",
      content:"",
      list:[],
      postTime:"",
    };

    addItem =(e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    submit = (e) => {
      e.preventDefault();
      let post = {
        userName: this.state.userName,
        title: this.state.title,
        content: this.state.content,
        postTime: new Date().toLocaleDateString()
      };

      this.setState({
        list: [post, ...this.state.list]
  
        });
    };
    
  
      /* const list = [...this.state.list];

      list.push(userName, title, content);

      this.setState({
      list,
      userName:"",
      title:"",
      content:"",
      }); */
  
    
    
  /*   deleteItem (id) {
      const list = [...this.state.list];
      const updateList = list.filter(item => item.id !== id);

      this.setState({list: updateList});
    } */

    render(){
      return (
        
        <BrowserRouter>
        <Navegation/>
            <div className="App">
         
              <Switch>
                <Route exact path="/" component={Home}/>
                
                <Route 
                path="/createapost" 
                render={(props)=> (
                <CreatePost 
                {...props} 
                addItem={this.addItem} 
                submit={this.submit}
                userName={this.state.userName}
                title={this.state.title}
                content={this.state.content}/> 
                )
              } 
                />
                <Route path="/showpost" render={(props) => (<ShowPost {...props} list={this.state.list}/>)} />
              </Switch>
            </div>
        </BrowserRouter>
      );
    }
}

