// import React from "react";

// const NewsArticles = () => {
//   const articles = [
//     {
//       date: "24 Feb",
//       category: "Mobile, Business",
//       title:
//         "Empowered consumers are prepared to make changes in response to disruptions!",
//     },
//     {
//       date: "27 Feb",
//       category: "Growth, Leadership",
//       title:
//         "Family business stands to gain from next generation's focus on growth and sustainability.",
//     },
//     {
//       date: "01 Mar",
//       category: "Challenges, Performance",
//       title:
//         "Productivity rises with remote working, but worker trust may pose a larger challenge!",
//     },
//   ];

//   return (
//     <section className="container mt-5  mb-5" >
//       <div className="news-header mt-5">
//         <h2 className="news-title">News & Articles</h2>
//         <a href="/blog" className="news-link">
//           Check All Blog Posts →
//         </a>
//       </div>
//       <div className="news-articles-container">
//         {articles.map((article, index) => (
//           <div key={index} className="news-article">
//             <div className="news-date">
//                 {article.date}</div>
//             <div className="news-category">{article.category}</div>
//             <h3 className="news-article-title">{article.title}</h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default NewsArticles;


import React from "react";

const NewsArticles = () => {
  const articles = [
    {
      date: "24 Feb",
      category: "Mobile, Business",
      title:
        "Empowered consumers are prepared to make changes in response to disruptions!",
    },
    {
      date: "27 Feb",
      category: "Growth, Leadership",
      title:
        "Family business stands to gain from next generation's focus on growth and sustainability.",
    },
    {
      date: "01 Mar",
      category: "Challenges, Performance",
      title:
        "Productivity rises with remote working, but worker trust may pose a larger challenge!",
    },
    // {
    //   date: "05 Mar",
    //   category: "Innovation, Technology",
    //   title:
    //     "How emerging technologies are reshaping the future of businesses globally!",
    // },
  ];

  return (
    <section className="container mt-5 mb-5">
      {/* Header Section */}
      <div className="news-header mt-5 d-flex justify-content-between align-items-center">
        <h2 className="news-title">News & Articles</h2>
        <a href="#" className="news-link">
          Check All Blog Posts →
        </a>
      </div>

      {/* Articles Section */}
      <div className="row mt-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center"
          >
            {/* Card */}
            <div className="card news-article h-100 shadow-sm" style={{ width: "90%" }}>
              <div className="card-body">
                <p className="card-text text-muted mb-1">{article.date}</p>
                <h6 className="text-primary news-category">{article.category}</h6>
                <h5 className="card-title news-article-title mt-3">{article.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsArticles;


