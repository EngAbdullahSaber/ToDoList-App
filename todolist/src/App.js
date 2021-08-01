
import  React, { Component } from 'react';
import  ToDoItems from './Componenets/toDoItems/todoItems'
import  AddItems from './Componenets/AddItems/addItems'


class App extends Component  {
  state={
    items :[
      {id : 1 ,name:"ahmed" , age : 22 },
      {id : 2 ,name:"ali" ,   age : 19 },
      {id : 3 ,name:"abdo" ,  age : 25},
    ]
  }
  deleteItems =(id) =>{
    let items = this.state.items.filter( item =>{
      return item.id !==id 
    })
    this.setState({items})
    
  }

  addItem=(item) =>{
    item.id = Math.random();
    let items =this.state.items;
    items.push(item);
    this.setState({items})

  }
  render(){
    return (
      <div className="App container">
       <h1 className="text-center"> TodoList App</h1>
        <ToDoItems items={this.state.items} deleteItems={this.deleteItems}/>
        <AddItems addItem ={this.addItem}/>
      </div>
    );

  }
 
}

export default App;
