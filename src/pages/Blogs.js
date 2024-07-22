import React from 'react'

const Blogs = (props) => {
    console.log(props)
    let BlogArray = props.blog_data.blog;
    console.log(BlogArray);
    // BlogArray.map((blog)=>{
    //     console.log(blog.blog_title)
    // })
    return (
        <>

            <div className='row'>
                {
                    BlogArray.map((blog) => (
                        <div className='col-3 mt-4'>
                        <div className="card">
                            <img className="card-img-top" src={blog.blog_url} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">{blog.blog_title}</h5>
                                    <p className="card-text">{blog.blog_content}</p>
                                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                        </div>
                        </div>
                    ))
                }
            </div></>
    )
}

export default Blogs
