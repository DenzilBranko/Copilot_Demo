import React from 'react';
import './ArticleDetails.css';

const ArticleDetails: React.FC = () => {
    const article = {
        title: "GitHub Copilot - About, Features and Use Cases",
        hero: "https://www.freecodecamp.org/news/content/images/size/w2000/2023/06/Screenshot-2023-06-14-at-12.42.04-PM.png",
        authorName: "Anonymous",
        authorImage: "https://via.placeholder.com/50", // Placeholder for author image
        description: "This is a detailed description of the article.",
        subtitle: "A brief overview of GitHub Copilot features and use cases.", // Added subtitle
        articleType: "text", // Can be "text" or "video"
        mediaUrl: "https://www.example.com/video.mp4", // For video type
        tags: ["Tag1", "Tag2"]
    };

    return (
        <div className="article-details-container">
            <div className="title">{article.title}</div>
            <div className="hero-image">
                <div className="hero-placeholder">Hero Image Placeholder</div>
            </div>
            <div className="author-details">
                <div className="author-hover">
                    <div className="author-name">Author: {article.authorName}</div>
                    <p className="author-description">{article.description}</p>
                </div>
            </div>
            <div className="subtitle bordered-field">{article.subtitle}</div> {/* Updated subtitle field */}
            <div className="content">
                {article.articleType === "text" ? (
                    <div className="description">{article.description}</div>
                ) : (
                    <div className="description">This is a video article.</div>
                )}
            </div>
            <div className="tags">
                {article.tags.map((tag, index) => (
                    <span key={index} className="tag">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ArticleDetails;
