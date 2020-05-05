import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class UpdateStatus extends Component{
    constructor(props){
        super(props);
        this.state={
            updateData:{
                comments:'',
                status:'',
                teachOthers:'' ,
                courseId: props.match.params.courseIdParam,
                emailId:this.props.user.data[0].EMAILID
             },
             notify:''
        }
    }
    handleChange=(event)=>{
        const {updateData}=this.state;
        updateData[event.target.name]=event.target.value;
        this.setState({updateData});
    }
    updateCourseEvent=(event)=>{
        const sub=this;
        event.preventDefault();
        const {updateData}=this.state;
        console.log(this.state.updateData);
        axios.post('http://localhost:3001/course/rest/updateStatus', updateData)
            .then(function(response){
             console.log(response);
             sub.setState({notify:response.data.message});
             //console.log(notify);
            })
            .catch(function(error){
            console.log(error);
            sub.setState({notify:error.message});
            });
        }

    render(){
        return(
            <div>
                 
               <form onSubmit={this.updateCourseEvent}>
                <h2 align="center">CourseTracker</h2>
                    <table align="center" className="table table-hover">
                        <tbody>
                        <tr>
                            <td><b>Comments</b></td>
                            <td><textarea name="comments" className="form-control" placeholder="Enter Comments..." required 
                            onChange={this.handleChange}
                            /></td>
                        </tr>
                        <tr>
                            <td><b>Status</b></td>
                            <td><input className="form-control" type="text" name="status" placeholder="Enter status..." required 
                            onChange={this.handleChange}
                            /></td>
                        </tr>
                        <tr>
                            <td><b>TeachOthers</b></td>
                            <td><input type="radio" name="teachOthers" value="Yes" onChange={this.handleChange}/>Yes
                                
                            <input type="radio" name="teachOthers" value="No" onChange={this.handleChange}/>No</td>

                        </tr>
                        <tr>
                            <td><button className="btn btn-info" type="submit">Update</button></td>
                            <td><Link to = "/myEnrolledCourses"><b>Cancel</b></Link></td>
                        </tr>
                        </tbody>
                    </table>
                </form>
                <div align="center" className="text-danger"><strong> {this.state.notify}</strong></div>
            </div>
        )
    }
}
const mapStateToProps = (state,nextProps) =>{
    return{
        user :state.user
    }
}
export default connect(mapStateToProps) (UpdateStatus);

