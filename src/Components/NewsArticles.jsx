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
  ];

  return (
    <section className="container mt-5  mb-5" >
      <div className="news-header mt-5">
        <h2 className="news-title">News & Articles</h2>
        <a href="/blog" className="news-link">
          Check All Blog Posts →
        </a>
      </div>
      <div className="news-articles-container">
        {articles.map((article, index) => (
          <div key={index} className="news-article">
            <div className="news-date">
                {article.date}</div>
            <div className="news-category">{article.category}</div>
            <h3 className="news-article-title">{article.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsArticles;
