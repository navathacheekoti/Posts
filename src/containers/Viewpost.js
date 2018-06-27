import React, { Component } from "react";
import { Link } from "react-router-dom";

class ViewPost extends Component {
    state = {
        post: {}
    };
    componentDidMount() {
        fetch(
            `https://posts-backend.herokuapp.com/new/${
                this.props.match.params.id
            }`
        )
            .then(res => res.json())
            .then(res => this.setState({ post: res }))
            .catch(err => console.log(err));
    }
    render() {
        const { title, body, created, image, name } = this.state.post;

        return (
            <div>
                <article className="baskerville  br2 ba dark-gray ma5 ">
                    <header className="avenir tc-l ph3 ph4-ns pt4 pt5-ns">
                        <h1 className="f3 f2-m f-subheadline-l measure lh-title fw1 mt0 white">
                            {title}
                        </h1>
                    </header>
                    <div className="ph3 ph4-m ph5-l">
                        <div className="measure db center f5 f4-ns lh-copy">
                            <img
                                className="db w-100 mt4 mt5-ns"
                                src={image}
                                alt={title}
                            />
                            <p>{body}</p>
                            <time>{created}</time>
                            <p className="tc white b ba br2">{name}</p>
                        </div>
                    </div>
                    <div className="mb5">
                        <Link to="/home">BackHome</Link>
                    </div>
                </article>
            </div>
        );
    }
}
export default ViewPost;
