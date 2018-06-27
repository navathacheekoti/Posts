import React,{ Component} from 'react';
import { Link } from "react-router-dom";

class NewPost extends Component {
    state = {
        title: "",
        url: "",
        content: "",
        success:false
    };
    onTitleChange = event => {
        this.setState({ title: event.target.value });
    };
    onUrlChange = event => {
        this.setState({ url: event.target.value });
    };
    onContentChange = event => {
        this.setState({ content: event.target.value });
    };
    onSucess=(event)=>{
        this.setState({success:event})
    }
    onSubmit=()=>{
        fetch("https://posts-backend.herokuapp.com/new", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: this.state.title,
                image: this.state.url,
                body: this.state.content,
                name:this.props.name
            })
        })
            .then(res => res.json())
            .then(user => {
                if (user._id) {
                    console.log(user)
                    this.onSucess(true);

                }
            })
            .catch(err=>console.log(err));
    }
  render(){
    return(
      <div className='w-100 measure center br2 ba dark-gray mt5 tc'>

              <main className="pa4 black-80 w-250">
                  <div className="measure ">
                      <fieldset
                          className="ba b--transparent ph0 mh0"
                      >
                          <legend className="f1 fw6 ph0 mh0">Add New Post</legend>
                          <div className="mt3">
                              <label
                                  className="db fw6 lh-copy f6"
                                  htmlFor="title"
                              >
                                  Title
                              </label>
                              <input
                                  className="pa2 input-reset ba br-2 dark-gray w-100"
                                  type="text"
                                  name="title"
                                  onChange={this.onTitleChange}
                                  placeholder='title'
                              />
                          </div>
                          <div className="mv3">
                              <label
                                  className="db fw6 lh-copy f6"
                                  htmlFor="image"
                              >
                                  ImageUrl
                              </label>
                              <input
                                  className="b pa2 input-reset ba br-2 dark-gray w-100"
                                  type="text"
                                  name="image"
                                  onChange={this.onUrlChange}
                                  placeholder='https://asdfe.jpg'

                              />
                          </div>
                      </fieldset>
                      <div className="">
                          <label htmlFor="post">Post Content</label>
                          <textarea name="post" rows="8" cols="80" className='w-100 b pa2 input-reset ba br-2 dark-gray' aria-describedby="comment-desc" onChange={this.onContentChange} required></textarea>

                      </div>
                      {(this.state.title==='')||(this.state.content==='')||(this.state.url==='')?<p>Please enter the title , url and content</p>:
                      <div className="lh-copy mt3">
                         <p className="pa3 b button" onClick={this.onSubmit}>Submit</p>
                      </div>
                  }
                      {this.state.success?<p>Successfully submitted the post</p>:null}
                  </div>
              </main>
              <div className='mb5'>
                  <Link to="/home">BackHome</Link>
              </div>
      </div>
    );
  }
}
export default NewPost;
