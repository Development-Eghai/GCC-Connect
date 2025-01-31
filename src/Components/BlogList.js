// // BlogList.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const BlogList = () => {
//     const [blogs, setBlogs] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//     const [dataLimit, setDataLimit] = useState(10);

//     useEffect(() => {
//         fetchBlogs();
//     }, [currentPage, dataLimit]);

//     const fetchBlogs = async () => {
//         try {
//             const response = await axios.post('https://truck.truckmessage.com/dashboard_blog_post', {
//                 page_no: currentPage,
//                 data_limit: dataLimit,
//             });
//             const { blog_data, total_no_of_data } = response.data.data || {};
//             setBlogs(blog_data || []);
//             setTotalPages(Math.ceil(total_no_of_data / dataLimit) || 1);
//         } catch (error) {
//             console.error('Failed to fetch blogs:', error);
//         }
//     };

//     const renderBlogs = () => {
//         return blogs.map((blog) => (
//             <div className="blog-card" key={blog.blog_id}>
//                 <img src={blog.blog_image_name || 'placeholder.jpg'} alt={blog.heading1 || 'Blog'} />
//                 <div className="blog-card-body">
//                     <h5 className="blog-card-title">{blog.heading1 || 'Untitled Blog'}</h5>
//                     <p className="blog-card-desc">{blog.heading2 || 'No description available.'}</p>
//                     <div className="mt-3">
//                         <Link to={`/blog/${blog.blog_id}`} className="btn btnclrview w-100">View Details</Link>
//                     </div>
//                 </div>
//             </div>
//         ));
//     };

//     return (
//         <div className="main-content">
//             <div className="text-center py-4 bgheader">
//                 <h2 className="trckfont text-danger p-0 mb-0">TRUCK MESSAGE BLOG</h2>
//             </div>
//             <div className="blog-container container" id="blog-list-container">
//                 {renderBlogs()}
//             </div>
//             <footer>
//                 <div className="pagination-controls">
//                     <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
//                         <i className="fas fa-chevron-left"></i> Previous
//                     </button>
//                     <div>
//                         <span id="pagination-info">Page {currentPage} of {totalPages}</span>
//                     </div>
//                     <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
//                         Next <i className="fas fa-chevron-right"></i>
//                     </button>
//                     <select value={dataLimit} onChange={(e) => setDataLimit(Number(e.target.value))}>
//                         <option value="10">10</option>
//                         <option value="20">20</option>
//                         <option value="50">50</option>
//                     </select>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default BlogList;


// BlogList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoTabletLandscapeOutline } from 'react-icons/io5';

const BlogList = () => {
    const [currentPage, setCurrentPage] = useState(1);
 
    const blogs = [
        { blog_id: 1, blog_image_name: 'placeholder.jpg', heading1: 'Blog Title 1', heading2: 'Description for blog 1' },
        { blog_id: 2, blog_image_name: 'placeholder.jpg', heading1: 'Blog Title 2', heading2: 'Description for blog 2' },
        { blog_id: 3, blog_image_name: 'placeholder.jpg', heading1: 'Blog Title 3', heading2: 'Description for blog 3' },
        { blog_id: 3, blog_image_name: 'placeholder.jpg', heading1: 'Blog Title 3', heading2: 'Description for blog 3' },
        { blog_id: 3, blog_image_name: 'placeholder.jpg', heading1: 'Blog Title 3', heading2: 'Description for blog 3' },
    ];

    const renderBlogs = () => {
        return blogs.map((blog) => (
            <div className="blog-card" key={blog.blog_id}>
            <div className='p-5 bg-info '></div>
                <div className="blog-card-body">
                    <h5 className="blog-card-title">{blog.heading1}</h5>
                    <p className="blog-card-desc">{blog.heading2}</p>
                    <div className="mt-3">
                        <Link to={`/blog/${blog.blog_id}`} className="btn btn-success btnclrview w-100">View Details</Link>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="main-content">
            <div className="text-center py-4 bgheader">
                <h2 className="trckfont  text-dark p-5 text-white fw-bold bg-black mb-0">GCC BLOG</h2>
            </div>
            <div className="blog-container container" id="blog-list-container">
                {renderBlogs()}
            </div>
            
        </div>
    );
};

export default BlogList;
