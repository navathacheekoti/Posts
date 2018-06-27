import React, { Component } from "react";
import Login from "./Loginwithgoogle";
import Nav from "./Nav";
import Posts from "../components/Posts";
import Header from "../components/Header";
import ViewPost from "./Viewpost";
import NewPost from "./Newpost";
import { Route } from "react-router-dom";
import Aux from "../hoc";
class App extends Component {
    state = {
        signin: false,
        name: "",
        img: "",
        posts:[]
    };
    componentDidUpdate() {
        fetch("https://posts-backend.herokuapp.com/")
        .then(res => res.json())
        .then(res => this.setState({posts:res}))
        .catch(err=>console.log(err));
    }
    onRouteChange = event => {
        this.setState({ signin: event });
    };
    userDetails = (name, img) => {
        this.setState({ name, img });
    };

    render() {
        const {img,name,signin,posts}=this.state;
        return (
            <div className="App">
                {signin ? (
                    <Aux>
                        <Route
                            path="/home"
                            exact
                            render={() => (
                                <Aux>
                                <Nav
                                    url={img}
                                    name={name}
                                    route={this.onRouteChange}
                                />
                                <Header />
                            </Aux>
                            )}
                        />
                        <Route
                            path="/home"
                            exact
                            render={() => (
                                 posts.map(post=><Posts posts={post} key={post._id}/>)

                            )}
                        />

                        <Route path="/new" exact render={()=>(<NewPost name={name}/>)} />
                        <Route path="/read/:id" component={ViewPost} />
                    </Aux>
                ) : (
                    <Aux>
                        <Route
                            path="/"
                            exact
                            render={() => (
                                <Login
                                    route={this.onRouteChange}
                                    user={this.userDetails}
                                />
                            )}
                        />
                        <Route
                            path="/signout"
                            exact
                            render={() => (
                                <Login
                                    route={this.onRouteChange}
                                    user={this.userDetails}
                                />
                            )}
                        />

                    </Aux>
                )}
            </div>
        );
    }
}

export default App;
