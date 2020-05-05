import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
//import {Link} from 'react-router-dom';

export const hocFun = (WrappedComponent, input) => {
class HOCclass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            compData:[]
        }
    }
    
    
    componentDidMount() {
        this.getData().then(response => {
        let compData = input.isCourse ? response.data : response.data;
        this.setState({compData});
        });
    }

    getData = () => {
        const compData = this.props.user.data[0].EMAILID
        
        return new Promise((resolve, reject) => {
            axios.post(input.url,{"emailId": compData}).then(function (response) {
                resolve(response);
            }).catch(function (error) {
                reject(error);
            });
        });
    }


    render() {
        return(
            <WrappedComponent dataList={this.state.compData} history={this.props.history} user={this.props.user}/>
        )
     
    }
}
const mapStateToProps = (state,nextProps) =>{
    return{
        user :state.user
    }
}
return connect(mapStateToProps) (HOCclass);
}
