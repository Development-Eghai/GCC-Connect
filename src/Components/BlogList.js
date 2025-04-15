import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from './footer';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('https://api.admin.pixeladvant.com/api/blog_details/');
                setBlogs(response.data);
                setError(null);
            } catch (err) {
                setError("Failed to load blogs.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const renderBlogs = () => {
        return (
            <div className="row gap-4"> {/* g-4 adds gutter spacing between cards */}
                {blogs.map((blog) => (
                    <div className="col-12 col-sm-6 col-md-4" key={blog.id}>
                        <div className="card h-100 shadow-sm border-1 ">
                            <img
                                src={blog.feature_image}
                                alt={blog.image_alt_text}
                                className="card-img-top"
                                style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{blog.heading}</h5>
                                <p className="card-text text-muted">{blog.sub_heading}</p>
                                <Link to={`/blog/${blog.id}`} className="btn btn-primary mt-auto w-100">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };
    
    

    return (
        <div >
            <div className="container py-5">
            <h2 className="text-center mb-4 p-4 bg-success text-white rounded">GCC Blog</h2>
            {loading && <p>Loading blogs...</p>}
            {error && <div className="alert alert-danger">{error}</div>}
            {!loading && !error && renderBlogs()}
           
        </div>
        <div>
            <Footer />
        </div>
         </div>
         
    );
};

export default BlogList;
