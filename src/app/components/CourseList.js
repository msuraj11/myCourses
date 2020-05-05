import React, { Component } from 'react';
import AllCourses from './AllCourses';
import axios from 'axios';

// import { connect } from 'react-redux'; //to connect react&redux
// import { bindActionCreators } from 'redux'; //to connect all events
// import * as courseAction from '../actions/courseAction';

class CourseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        this.getData().then(response => {
            console.log("from component did mount of ")
            this.setState({ list: response.data });
            //console.log(this.state.list)
        });


    }
    getData = () => {
        console.log("get method in ")
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:3001/course/rest/getAllCourse').then(function (response) {
                resolve(response);
            }).catch(function (error) {
                reject(error);
            });
        });
    }

   

    render() {
        console.log("render of clist")

        return (
            <div>
               
                <AllCourses listData={this.state.list} />
                
            </div>
        )
    }
}

export default CourseList;