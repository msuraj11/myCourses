import React,{Component} from 'react';
import axios from 'axios';
import {hocFun} from './HOC';
import {Link} from 'react-router-dom';

class RecommendedCourses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList:[],
            notification:''
        }
    }
        

    enrollment = (itemAdded) => {
        const key=this;
        console.log(itemAdded);
        console.log(this.props)
        const courseObj = {
            courseId: itemAdded.courseId,
            courseName: itemAdded.courseName,
            emailId : this.props.user.data[0].EMAILID
            }
            axios.post('http://localhost:3001/course/rest/enroleUser', courseObj).then(function(response){
                console.log(response);
                key.setState({notification:response.data.message});
                })
                .catch(function(error){
                console.log(error);
                key.setState({notification:error.message});
                });
            
    }

    render(){
        return(
            <div>
                <h2 align="center">Recommended Courses</h2>
                <div align="center"><button className="btn btn-outline-primary"><Link className="text-dark" to="/courseList"><b> Home </b></Link></button></div>
                <div align="center" className="text-danger"><strong> {this.state.notification}</strong> </div>
                <table align="center" className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Course Id</th>
                            <th>Course Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.dataList.map((item,i) =>{
                            return(
                                 <tr className="table-info" key={i}>
                                 <td><b>{item.courseId}</b></td>
                                 <td><b>{item.courseName}</b></td>
                                 <td><button className="btn btn-outline-primary" onClick ={() => this.enrollment(item)} >Enroll Course</button></td>
                                 </tr>
                        )
                        })}
                       
                    </tbody>
                </table>
           
        </div>
        );
    }
}
RecommendedCourses = hocFun(RecommendedCourses,{url : 'http://localhost:3001/course/rest/recomendedCourses',isCourse : true})

export default RecommendedCourses;


