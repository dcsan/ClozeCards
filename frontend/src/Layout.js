import _ from 'lodash'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import LandingPage from './LandingPage'
import {Menu} from 'semantic-ui-react'
import { connect } from 'react-redux'

import { ViewPost, NewPost } from './Post'
import BrowsePosts from './BrowsePosts'

class Layout extends Component {
  matchViewPost = ({match}) => {
    return <ViewPost slug={match.params.slug}/>
  }
  render = () => {
    return(
      <Router>
        <div>
          <Menu attached="top" inverted={true} color="blue" size="huge" stackable={true}>
            <Menu.Item as={Link} to={"/"} header>ClozeCards</Menu.Item>
            <Menu.Item as={Link} to={"/top/"}>Top Posts</Menu.Item>
            <Menu.Item as={Link} to={"/content/"}>Recent Posts</Menu.Item>
            <Menu.Item as={Link} to={"/content/"}>Trending Posts</Menu.Item>
            <Menu.Item as={Link} to={"/teach/"}>Teach</Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item as={Link} to={"/new-content/"} name="New Post"></Menu.Item>
              <Menu.Item as={Link} to={"/news/"}>News</Menu.Item>
              <Menu.Item as={Link} to={"/login/"}name="login"/>
            </Menu.Menu>
          </Menu>
          <Route path="/" exact={true} component={LandingPage}/>
          <Route path="/top/" exact={true} render={() => <BrowsePosts/>}/>
          <Route path="/new-content/" exact={true} render={() => <NewPost/>}/>
          <Route path="/posts/:slug" exact={true} render={this.matchViewPost}/>
        </div>
      </Router>
    );
  }
}

export default connect((store) => store)(Layout);
