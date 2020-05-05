import React, { Component } from 'react';
//import {connect} from 'react-redux';
//import { bindActionCreators } from 'redux';
//import * as userAction from '../actions/userAction';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            regdata: {
                name: '',
                sapId: '',
                emailId: '',
                primarySkill: '',
                band: '',
                password: ''
            },
            notification: '',
            notification2: ''
        }
    }

    handleChanged = (event) => {
        console.log(event.target);
        const { regdata } = this.state;
        regdata[event.target.name] = event.target.value;
        this.setState({ regdata });
        console.log(this.state)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const suraj = this;
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:3001/users/rest/registerUser', this.state.regdata).then(function (response) {
                resolve(response);
                console.log(response)
                suraj.setState({ notification: response.data.message });
                //suraj.props.history.push('./login');
            }).catch(function (error) {
                reject({ status: error.response.status, message: error.message });
                suraj.setState({ notification2: error.message })
            });
        })
    }


    render() {
        return (

            <div>
                <div align="right"><button className="btn btn-outline-primary"><Link className="text-dark" to="/login"><b> Log in </b></Link></button></div>
                <h2 align="center">Registration</h2>

                <form onSubmit={this.handleSubmit}>
                    <table align="center">
                        <tbody>
                            <tr>
                                <td><b>Name:</b></td><td><input className="form-control" id="username" type="text" name="name" onChange={this.handleChanged} required /></td>
                            </tr>
                            <tr>
                                <td><b>Sap ID:</b></td><td><input className="form-control" id="sapid" type="number" name="sapId" onChange={this.handleChanged} required /></td>
                            </tr>
                            <tr>
                                <td><b>Email ID:</b></td><td><input className="form-control" id="emailid" type="email" name="emailId" onChange={this.handleChanged} required /></td>
                            </tr>
                            <tr>
                                <td><b>Primary Skill:</b></td><td><input className="form-control" id="primarySkill" type="textarea" name="primarySkill" onChange={this.handleChanged} required /></td>
                            </tr>
                            <tr>
                                <td><b>Band:</b></td><td><input className="form-control" id="band" type="text" name="band" onChange={this.handleChanged} required /></td>
                            </tr>
                            <tr>
                                <td><b>Password:</b></td><td><input className="form-control" id="pswd" type="password" name="password" onChange={this.handleChanged} required /></td>
                            </tr>
                            <tr>
                                <td><button className="btn btn-info" id="btn" type="submit"  >Submit</button></td><td><Link to="/login"><b> cancel </b></Link></td>
                            </tr>
                            <tr>

                            </tr>
                        </tbody>
                    </table>
                    <div align="center" className="alert alert-success"><strong> {this.state.notification}
                    </strong> </div>
                    <div align="center" className="alert alert-warning"><strong> {this.state.notification2}
                    </strong> </div>

                </form>

            </div>

        );
    }
}

export default Registration;
