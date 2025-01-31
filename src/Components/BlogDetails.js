// BlogDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    
    const blog = {
        blog_id: id,
        blog_image_name: 'placeholder.jpg',
        heading1: 'Sample Blog Title',
        blog_content: 'This is a sample blog content for demonstration purposes.'
    };

    return (
        <div className=" container px-4  align-items-center tex-center modal-body">
            <img src={blog.blog_image_name} alt={blog.heading1} className="img-fluid mb-3" />
            <h5>{blog.heading1}</h5>
            <p>{blog.blog_content}</p>
        </div>
    );
};

export default BlogDetails;
