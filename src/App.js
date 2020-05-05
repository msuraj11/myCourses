import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Login from './app/components/Login';
import Registration from './app/components/Registration';
import CourseList from './app/components/CourseList';
import AddCourse from './app/components/AddCourse';
import MyEnrolledCourses from './app/components/MyEnrolledCourses';
import RecommendedCourses from './app/components/RecommendedCourses';
import UpdateStatus from './app/components/UpdateStatus';

class App extends Component {
  render() {
    return (
      <div className="App">
         <BrowserRouter>
            <Switch>
              <Route path="/registration" component={Registration} />
              <Route path="/login" component={Login} />
              <Route path="/courseList" component={CourseList}/>
              <Route path="/addCourse" component={AddCourse}/>
              <Route path="/myEnrolledCourses" component={MyEnrolledCourses}/>
              <Route path="/recommendedCourses" component={RecommendedCourses}/>
              <Route path="/updateStatus/:courseIdParam" component={UpdateStatus}/>
              <Route path="/" component={Login} exact/>
              
            </Switch>
          
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
