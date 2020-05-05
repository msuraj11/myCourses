import React,{Component} from 'react';
//import {connect} from 'react-redux';
//import { bindActionCreators } from 'redux';
//import * as userAction from '../actions/userAction';
import {Link} from 'react-router-dom';
import axios from 'axios';

class AddCourse extends Component {
  constructor(props){
    super(props);
    this.state = {
        courseData : {
            courseName:'',
            courseTitle:'',
            link:'',
            topic:[]
        },
        
        text:'',
        notification:''
    }
}


handleChanges = (event) => {
    const { courseData } = this.state;
    courseData[event.target.name] = event.target.value;
    this.setState({courseData});
}

handleSubmit = (event) => {
    event.preventDefault();
    const pawar=this;
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:3001/course/rest/addNewCourse', this.state.courseData).then(function (response) {
            resolve(response);
            console.log(response)
            pawar.setState({notification:response.data.message});
            pawar.props.history.push('./courseList');
        }).catch(function (error) {
            reject({ status: error.response.status, message: error.message });
            
        });
    })
}

handleArrayChange = (event) => {
    this.setState({text : event.target.value});
    console.log(this.state.text)
}

handleAddArray = (event) => {
    console.log(this.state.courseData.topic);
    this.state.courseData.topic.push({topicName: this.state.text});
    //this.setState(this.state);
}

handleDelete = (val) => {
    for(var i=0; i < this.state.courseData.topic.length; i++){
        if(this.state.courseData.topic[i] === val){
            delete this.state.courseData.topic[i];
        }
        this.setState({ topic:this.state.courseData.topic});
    }
}

render() {
    return (

      <div>
        <h2 align="center">Add Course</h2>
        <div align="center"><mark>{this.state.notification}</mark></div>
        <table align="center" className="table table-hover">
            <tbody>
            <tr>
                <td><b>Course Name:</b></td><td><input className="form-control" type="text" name="courseName" onChange={this.handleChanges} /></td>
            </tr>
            <tr>
                <td><b>Course Title:</b></td><td><input className="form-control" type="text" name="courseTitle" onChange={this.handleChanges} /></td>
            </tr>
            <tr>
                <td><b>Reference Link:</b></td><td><input className="form-control" type="text" name="link" onChange={this.handleChanges} /></td>
            </tr>
            <tr>
                <td><b>Topic:</b></td><td><input className="form-control" type="textarea" name="text" onChange={this.handleArrayChange} /></td><td><button class="btn btn-outline-primary" onClick={this.handleAddArray}><b>+</b></button></td>
            </tr>
            

            {this.state.courseData.topic.map((val) => {
                    return <tr>
                                <td>
                                    {val.topicName}
                                    <button className="btn btn-outline-primary" onClick={() => this.handleDelete(val)}> X </button>
                                </td>
                            </tr>

                            })}

            </tbody>
          </table>
          
        
        <div align="center">
            <button className="btn btn-outline-primary" type="submit" onClick={this.handleSubmit} >Submit</button><Link to="/courseList"><b> Cancel </b></Link>
        </div>
 </div>  
   
    );
  }
}

export default AddCourse;
