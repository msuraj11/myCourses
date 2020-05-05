import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../actions/userAction';
import {Link} from 'react-router-dom';


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : {
                userName:'',
                password:''
            },
            notification:''
        }
    }

    handleChange = (event) => {
        const { data } = this.state;
        data[event.target.name] = event.target.value;
        this.setState({data});
    }

    handleLogin = (event) => {
        event.preventDefault();
        this.props.actions.loginUser(this.state.data);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user.status === 'success'){
            this.props.history.push('./courseList');
            
        }
        else{
            this.setState({ notification: nextProps.user.message});
            
        }
    }

render() {
    return (
      <div>
        <h2 align="center" >Log In</h2>
          <form>
          
          <table align="center" className="table table-striped">
          <tbody>
              <tr><td><b>E-Mail:</b></td><td><input className="form-control" type="text" name="userName" onChange={this.handleChange} /></td></tr>
              <tr><td><b>Password:</b></td><td><input className="form-control" type="password" name="password" onChange={this.handleChange} /></td></tr>
              <tr><td></td><td><button className="btn btn-outline-primary" type="submit" onClick={this.handleLogin} >Sign In</button></td></tr>
              <tr><td></td><td><b><i>Not yet Registered?</i></b><Link to="/registration"><b> Sign Up </b></Link></td></tr>
             </tbody> 
            </table>
          </form>
          <div align="center" className="text-danger"><strong> {this.state.notification}
               </strong> </div>
     </div>  
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(userAction,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
