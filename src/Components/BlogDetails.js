import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Footer from './footer';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const BlogDetails = () => {
    const { id } = useParams(); // Blog ID from URL params
    const [blog, setBlog] = useState(null);
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const apiUrl = 'https://api.admin.pixeladvant.com/api/blog_comments/';
    const blogDetailsUrl = `https://api.admin.pixeladvant.com/api/blog_details/${id}/`;

    const fetchBlogDetails = async () => {
        try {
            const response = await axios.get(blogDetailsUrl);
            setBlog(response.data);
        } catch (err) {
            console.error('Blog fetch error:', err);
            setError('Failed to load blog details. Please try again later.');
        }
    };

    // const fetchComments = async () => {
    //     try {
    //         const response = await axios.get(`${apiUrl}?blog_id=${id}`);
    //         setComments(response.data);
    //     } catch (err) {
    //         console.error('Comments fetch error:', err);
    //         setError('Failed to load comments. Please try again later.');
    //     }
    // };
    const fetchComments = async () => {
        try {
            const response = await axios.get(apiUrl);
            const allComments = response.data;
            const filteredComments = allComments.filter(comment => comment.blog_id == id); // Filter based on blog ID
            setComments(filteredComments);
        } catch (err) {
            console.error('Comments fetch error:', err);
            setError('Failed to load comments. Please try again later.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !comment) {
            setError('All fields are required');
            toast.error('Please fill all the fields'); // Show error toast
            return;
        }

        setIsSubmitting(true);
        setError('');

        const params = {
            blog_id: id, 
            name: name,
            email_id: email,
            comment: comment,
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success('Comment submitted successfully!'); // Show success toast
                setName('');
                setEmail('');
                setComment('');
                fetchComments(); // Refresh the comments list
            } else {
                toast.error(result.message || 'Failed to submit comment'); // Show error toast
            }
        } catch (err) {
            toast.error('An error occurred. Please try again later.'); // Show error toast
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        fetchBlogDetails();
        fetchComments(); // Fetch comments when the component mounts
    }, [id]);

    if (!blog && !error) return <div className="container text-center py-5">Loading blog...</div>;
    if (error) return <div className="container text-center py-5 text-danger">{error}</div>;

    return (
        <div className="bg-white">
            {blog && (
                <Helmet>
                    <title>{blog.seo_title || blog.heading}</title>
                    <meta name="description" content={blog.meta_description || blog.sub_heading} />
                </Helmet>
            )}

            <div className="container py-5">
                <div className="row">
                    {/* Main blog content */}
                    <div className="col-lg-8">
                        <img
                            src={blog.feature_image}
                            alt={blog.image_alt_text}
                            className="img-fluid rounded mb-4"
                            style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
                        />
                        <h3 className="fw-bold">{blog.heading}</h3>
                        <p className="text-muted fw-bold">{blog.sub_heading}</p>

                        {/* Blog HTML Content */}
                        <div
                            className="blog-content mt-0 mb-5"
                            dangerouslySetInnerHTML={{ __html: blog.full_description }}
                        />

                        {/* Comments */}
                        <div className="mb-5">
                            <h5>{comments.length} Comments</h5>
                            {comments.map((comment, index) => (
                                <div key={index} className="mb-3 p-3 bg-light rounded">
                                    <strong>{comment.name}</strong> <br />
                                    <small className="text-muted">{comment.created_at}</small>
                                    <p className="mt-2">{comment.comment}</p>
                                </div>
                            ))}
                        </div>

                        {/* Leave a Reply */}
                        <div>
                            <h5>Leave a Reply</h5>
                            <form className="bg-light p-4 rounded" onSubmit={handleSubmit}>
                                <div className="row ">
                                    <div className="col-md-12 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        className="form-control"
                                        rows="4"
                                        placeholder="Your comment"
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        required
                                    />
                                </div>
                                {error && <div className="alert alert-danger">{error}</div>}
                                <button type="submit" className="btn btn-success" disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting...' : 'Submit Comment'}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="col-lg-4 mt-5 bg-light rounded p-3 mt-lg-0">
                        <div className="mb-4">
                            <h6 className="fw-bold">Tags</h6>
                            <div className="d-flex flex-wrap gap-2">
                                {blog.tags?.split(',').map((tag, index) => (
                                    <span key={index} className="py-2 px-4 rounded bg-success text-white">{tag.trim()}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BlogDetails;
