import React from 'react';
import './ArticleDetails.css';

const ArticleDetails: React.FC = () => {
    const article = {
        title: "GitHub Copilot - About, Features and Use Cases",
        hero: "https://www.freecodecamp.org/news/content/images/size/w2000/2023/06/Screenshot-2023-06-14-at-12.42.04-PM.png",
        authorName: "Anonymous",
        authorImage: "https://via.placeholder.com/50", // Placeholder for author image
        description: "This is a detailed description of the article.",
        articleType: "text", // Can be "text" or "video"
        mediaUrl: "https://www.example.com/video.mp4", // For video type
        tags: ["Tag1", "Tag2"]
    };

    return (
        <div className="article-details-container">
            <input type="text" className="title-input" value={article.title} readOnly />
            <div className="hero-image">
                <img src={article.hero} alt={article.title} />
            </div>
            <div className="author-details">
                <div className="author-hover">
                    <img src={article.authorImage} alt={article.authorName} className="author-image" />
                    <span className="author-name">{article.authorName}</span>
                    <p className="author-description">{article.description}</p>
                </div>
            </div>
            <input type="text" className="subtitle-input" placeholder="Subtitle" readOnly />
            <div className="content">
                {article.articleType === "text" ? (
                    <div className="description">{article.description}</div>
                ) : (
                    <video controls className="media-player">
                        <source src={article.mediaUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
            <div className="tags">
                {article.tags.map((tag, index) => (
                    <button key={index} className="tag-button">
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ArticleDetails;
