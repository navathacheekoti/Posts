import React from 'react';
import { Link } from "react-router-dom";


const Posts = (props)=>{
    const {title,body,created,_id,image,name}=props.posts;
    return(
        <div>
            {props.posts?
            <section className="mw6 center mt10 white">
                <article className="pv4 bt bb b--black-10 ph3 ph0-l">
                    <div className="flex flex-column flex-row-ns">
                        <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                            <h2 className="f3 athelas mt0 lh-title">
                                {title}
                            </h2>
                            <p className="f5 f4-l lh-copy athelas">
                                {body.substring(0,50)}....
                            </p>
                        </div>
                        <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                            <img
                                src={image}
                                className="db"
                                alt={title}
                            />
                        </div>
                    </div>
                    <p className="f6 lh-copy  mv0">
                        By <span className="ttu">{name}</span>
                    </p>
                    <time className="f6 db">{created}</time>
                    <p className="b" id='button'>
                        <Link to={'/read/'+_id}>ReadMore...</Link>
                    </p>
                </article>
            </section>
            :null}
        </div>
    );
}
export default Posts;
// class Posts extends Component {
//
//     render() {
//         const {title,body,created,_id,image,name}=this.props.posts
//         return (
//             <div>
//                 {this.props.posts?
//                 <section className="mw6 center mt10">
//                     <article className="pv4 bt bb b--black-10 ph3 ph0-l">
//                         <div className="flex flex-column flex-row-ns">
//                             <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
//                                 <h2 className="f3 athelas mt0 lh-title">
//                                     {title}
//                                 </h2>
//                                 <p className="f5 f4-l lh-copy athelas">
//                                     {body.substring(0,50)}
//                                 </p>
//                             </div>
//                             <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
//                                 <img
//                                     src={image}
//                                     className="db"
//                                     alt="Photo of a dimly lit room with a computer interface terminal."
//                                 />
//                             </div>
//                         </div>
//                         <p className="f6 lh-copy  mv0">
//                             By <span className="ttu">{name}</span>
//                         </p>
//                         <time className="f6 db">{created}</time>
//                         <p className="" id='button'>
//                             <Link to={'/read/'+_id}>ReadMore</Link>
//                         </p>
//                     </article>
//                 </section>
//                 :null}
//             </div>
//         );
//     }
// }
// export default Posts;
