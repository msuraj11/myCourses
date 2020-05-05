import React,{Component} from 'react';
// import axios from 'axios';
import {hocFun} from './HOC';
import {Link} from 'react-router-dom';

class MyEnrolledCourses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList:[]
        }
    }
    

    updateCourses=(item)=>{
        // event.preventDefault();
        this.props.history.push('/updateStatus/'+item.COURSE_ID);
    }

    render(){
        return(
            <div>
                <h2 align="center">Enrolled Courses</h2>
                <div align="center"><button className="btn btn-outline-primary"><Link className="text-dark" to="/courseList"><b> Home </b></Link></button></div>
                <table align="center" className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Course Id</th>
                            <th>Course Name</th>
                            <th>Comments</th>
                            <th>Status</th>
                            <th>Teach Others</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.dataList.map((item,i) =>{
                            return(
                                 <tr className="table-active" key={i}>
                                 <td><b>{item.COURSE_ID}</b></td>
                                 <td><b>{item.COURSE_NAME}</b></td>
                                 <td>{item.COMMENTS}</td>
                                 <td>{item.STATUS}</td>
                                 <td>{item.TEACHOTHERS}</td>
                                 <td><button className="btn btn-outline-primary" onClick ={()=>this.updateCourses(item)} >Update</button></td>
                                 </tr>
                        )
                        })}
                       
                    </tbody>
                </table>
           
        </div>
        );
    }
}
const EnrolledCourses = hocFun(MyEnrolledCourses, { url: 'http://localhost:3001/course/rest/myEnrolledCourses' })

export default EnrolledCourses;

