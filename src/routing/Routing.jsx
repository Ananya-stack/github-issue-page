import React,{useState} from 'react'
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'
import Header from '../header/Header'
import Home from '../component/home/Home'
import Login from '../component/form/Login'
import Signup from '../component/form/Signup'
import Issues from '../component/issue/Issue'   
import IssueDetails from '../component/IssueDetails/IssueDetails'       
import Comment from '../component/addcomment/Comment'
import ProtectedRoute from '../component/protectedRoute/ProtectedRoute'


function Routing( ) {

  return (
    <div>

      <Router>
            <Header/>
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path ='/reg' exact component={Signup } />
         
            {/* protected */}
            {/* <ProtectedRoute path="/issue" component={Issues} /> */}
            <Route path="/issue" component={Issues} /> 
            {/* <ProtectedRoute  path="/issue-detail" exact component={IssueDetails} /> */}
            <Route path="/issue-detail" exact component={IssueDetails}></Route>
            {/* <ProtectedRoute  path="/comment" exact component={Comment} /> */}
          <Route path='/comment' component={Comment} />

      </Switch>
      </Router>
    </div>
    
  )
}
export default Routing;
