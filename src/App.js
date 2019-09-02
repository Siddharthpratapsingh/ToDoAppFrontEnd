import React, { Component } from 'react';
import './App.css';
import edit from "./editIcon.jpg";
import deleteIcon from "./delete.png";


import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTaskTitle:'',
      taskTitle: '',import React, { Component } from 'react';
      import './App.css';
      import edit from "./editIcon.jpg";
      import deleteIcon from "./delete.png";
      
      
      import axios from 'axios';
      
      class App extends Component {
        constructor(props) {
          super(props)
          this.state = {
            newTaskTitle:'',
            taskTitle: '',
            id: "",
            result1: [],
            error: null
          }
          this.handleChange = this.handleChange.bind(this);
        }
      
        componentDidMount() {
          fetch("http://localhost:8080/data/todo")
            .then(res => res.json())
            .then(
              (result) => {
                this.setState({
                  result1: result
                });
              })
        }
        handleChange = () => {
          this.setState((state) => ({
            edit: !state.edit,
          }));
          console.log(this.state.edit)
        }
        handlenewChange = evt => {
          this.setState({newTaskTitle: evt.target.value});
        };
        handleTextChange = (e) => {
         
          this.setState({
            taskTitle: e.target.value
          })
      
      
        }
        
        handleNewList = e => {
          
      
          console.log(this.state)
          axios.post("http://localhost:8080/data/todo", this.state)
            .then(response => {
              console.log(response)
      
            })
            .catch(error => {
              console.log(error)
            })
      
        }
        update=(id)=>{
          axios.put('http://localhost:8080/data/todo/'+id,{taskTitle:this.state.newTaskTitle})
          .then(response => {
            console.log(response)
      
          })
          .catch(error => {
            console.log(error)
          })
      
        }
        deleteFunction = (id) => {
          const { result1 } = this.state
      
          axios.delete('http://localhost:8080/data/todos/' + id).then(result => {
            this.setState({
              result1: result1.filter(product => product.id !== id)
      
            });
          }, (error) => {
            this.setState({ error });
          })
      
        }
        render() {
      
          const { taskTitle, result1 } = this.state
          let counter = 0
          
      
            return (
              
              <div className="main_content">
                <h1>nTask</h1>
                <h2>Get your all task noted</h2>
      
                <div className="todoCard">
                  <div class="inputSection">
                    <form onSubmit={this.handleNewList}>
      
                      <input placeholder="Task"
                        type="text"
                        className="taskTitle"
                        name="taskTitle"
                        value={taskTitle}
                        onChange={this.handleTextChange} />
                    </form>
                  </div>
                  <div className="dataArea">{
      
                    result1.map(user => {  return(           
                           <div key={user.id} className="row">
                            
                            <div className="data">
                              
                              <div className="details"><input type="text" className="update" onChange={this.handlenewChange} defaultValue={user.taskTitle}/></div>
                              <img src={edit} className="editData" onClick={()=>this.update(user.id)} />
                                     
                              <img src={deleteIcon} className="deleteData" onClick={() => this.deleteFunction(user.id)} />
                            </div>
                          </div>
                        
                    )})  
      
                    }</div>
      
      
                </div>
              </div>
      
            );
        }
      }
      
      export default App;
      
      id: "",
      result1: [],
      error: null
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://todo-app2.cfapps.io/data/todo/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            result1: result
          });
        })
  }
  handleChange = () => {
    this.setState((state) => ({
      edit: !state.edit,
    }));
    console.log(this.state.edit)
  }
  handlenewChange = evt => {
    this.setState({newTaskTitle: evt.target.value});
  };
  handleTextChange = (e) => {
   
    this.setState({
      taskTitle: e.target.value
    })


  }
  
  handleNewList = e => {
    

    console.log(this.state)
    axios.post("https://todo-app2.cfapps.io/data/todo/", this.state)
      .then(response => {
        console.log(response)

      })
      .catch(error => {
        console.log(error)
      })

  }
  update=(id)=>{
    axios.put('https://todo-app2.cfapps.io/data/todo/'+id,{taskTitle:this.state.newTaskTitle})
    .then(response => {
      console.log(response)

    })
    .catch(error => {
      console.log(error)
    })

  }
  deleteFunction = (id) => {
    const { result1 } = this.state

    axios.delete('https://todo-app2.cfapps.io/data/todos/' + id).then(result => {
      this.setState({
        result1: result1.filter(product => product.id !== id)

      });
    }, (error) => {
      this.setState({ error });
    })

  }
  render() {

    const { taskTitle, result1 } = this.state
    let counter = 0
    

      return (
        
        <div className="main_content">
          <h1>nTask</h1>
          <h2>Get your all task noted</h2>

          <div className="todoCard">
            <div class="inputSection">
              <form onSubmit={this.handleNewList}>

                <input placeholder="Task"
                  type="text"
                  className="taskTitle"
                  name="taskTitle"
                  value={taskTitle}
                  onChange={this.handleTextChange} />
              </form>
            </div>
            <div className="dataArea">{

              result1.map(user => {  return(           
                     <div key={user.id} className="row">
                      
                      <div className="data">
                        
                        <div className="details"><input type="text" className="update" onChange={this.handlenewChange} defaultValue={user.taskTitle}/></div>
                        <img src={edit} className="editData" onClick={()=>this.update(user.id)} />
                               
                        <img src={deleteIcon} className="deleteData" onClick={() => this.deleteFunction(user.id)} />
                      </div>
                    </div>
                  
              )})  

              }</div>


          </div>
        </div>

      );
  }
}

export default App;
