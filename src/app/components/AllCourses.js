import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

class AllCourses extends Component {
    state = {
        notification: ''
    }
    enrollment = (itemAdded) => {
        const key = this;
        console.log(itemAdded);
        console.log(this.props)
        const courseObj = {
            courseId:  itemAdded.courseId,
            courseName:  itemAdded.courseName,
            emailId:  this.props.user.data[0].EMAILID
        }
        axios.post('http://localhost:3001/course/rest/enroleUser', courseObj).then(function (response) {
            console.log(response);
            key.setState({ notification: response.data.message });
        })
            .catch(function (error) {
                console.log(error);
                key.setState({ notification: error.message });
            });

    }

    render() {
        console.log(this.props)
        return (
            <div>
                
                <div align="right"><button className="btn btn-outline-danger"><Link className="text-dark" to="/login"><b> Log out </b></Link></button></div>
                <h2 align="center">All Courses</h2>
                <div>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <button className="btn btn-outline-primary"><Link className="text-dark" to="/addCourse"><b> Add course </b></Link></button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-primary"><Link className="text-dark" to="/myEnrolledCourses"><b> My Enrolled Courses </b></Link></button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-primary"><Link className="text-dark" to="/recommendedCourses"><b> Recommended Courses </b></Link></button>
                        </li>
                    </ul>
                </div>
                
                <div align="center" className="text-danger"><strong> {this.state.notification}</strong> </div>
                <table className="table table-bordered" >
                    <thead className="thead-dark">

                        <tr>
                            <th>Course Id</th>
                            <th>Course Name</th>
                            <th>Titles</th>
                            <th>Click to Enroll</th>
                        </tr>
                    </thead>
                    <tbody>


                        {

                            this.props.listData.map((item, i) => {
                                return (
                                    <tr className="table-primary" key={i}>
                                        <td>{item.courseId}</td>
                                        <td>{item.courseName}</td>
                                        <td>
                                            <table className="table table-striped" >
                                                <thead className="thead-light">

                                                    <tr>
                                                        <th>Course Title Id</th>
                                                        <th>Course Title</th>
                                                        <th>Link</th>
                                                        <th>Topics</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                        item.title.map((ite, j) => {
                                                            return (
                                                                <tr className="table-success" key={j}>
                                                                    <td>{ite.courseTitleId}</td>
                                                                    <td>{ite.courseTitle}</td>
                                                                    <td>{ite.link}</td>
                                                                    <td>
                                                                        <table className="table table-striped" >
                                                                            <thead className="thead-light">

                                                                                <tr>
                                                                                    <th>Topic Id</th>
                                                                                    <th>Topic name</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                {
                                                                                    ite.topic.map((it, k) => {
                                                                                        return (
                                                                                            <tr className="table-warning" key={k}>
                                                                                                <td>{it.topicId}</td>
                                                                                                <td>{it.topicName}</td>
                                                                                            </tr>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </td>
                                        <td><button className="btn btn-outline-success" onClick={() => this.enrollment(item)}>Enroll Course</button></td>
                                    </tr>
                                )
                            })



                        }

                    </tbody>
                </table>

            </div>
        )
    }
}
const mapStateToProps = (state, nextProps) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(AllCourses);
