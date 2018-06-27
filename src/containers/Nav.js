import React, { Component } from "react";

import { Link } from "react-router-dom";

class Post extends Component {
    login = () => {
        this.props.route(false);
    };
    render() {
        return (
            <div className="post">
                <span className="nav">
                    <Link to="/home" className="link link1">
                        Home
                    </Link>
                    <Link to="/new" className="link link2">
                        New Post
                    </Link>
                </span>
                <span className="user">
                    <p onClick={this.login}>
                        <Link to="/signout" className="link name link3">
                            Signout
                        </Link>
                    </p>
                    <p className="name">{this.props.name}</p>
                    <img
                        className="image"
                        src={this.props.url}
                        alt={this.props.name}
                    />
                </span>
            </div>
        );
    }
}
export default Post;
