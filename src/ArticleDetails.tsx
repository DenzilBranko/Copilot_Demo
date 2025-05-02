import React from 'react';
import styles from './ArticleDetails.module.css'; // Import CSS Module

const ArticleDetails: React.FC = () => {
    const article = {
        title: "GitHub Copilot - About, Features and Use Cases",
        hero: "https://www.bigdatawire.com/wp-content/uploads/2024/05/AI-copilot_shutterstock_AI-generated.jpg",
        authorName: "John Doe",
        authorImage: "https://via.placeholder.com/50", // Placeholder for author image
        description: "This is a detailed description of the article.",
        subtitle: "A brief overview of GitHub Copilot features and use cases.", // Added subtitle
        articleType: "text", // Can be "text" or "video"
        mediaUrl: "https://www.example.com/video.mp4", // For video type
        tags: ["Tag1", "Tag2"]
    };

    return (
        <div className={styles['article-details-container']}>
            <div className={styles.title}>{article.title}</div>
            <div className={styles['hero-image']}>
                <img src={article.hero} alt={article.title} className={styles['hero-img']} />
            </div>
            <div className={styles['author-details']}>
                <div className={styles['author-hover']}>
                    <div className={styles['author-name']}>Author: {article.authorName}</div>
                    <p className={styles['author-description']}>{article.description}</p>
                </div>
            </div>
            <div className={`${styles.subtitle} ${styles['bordered-field']}`}>{article.subtitle}</div>
            <div className={styles.content}>
                {article.articleType === "text" ? (
                    <div className={styles.description}>{article.description}</div>
                ) : (
                    <div className={styles.description}>This is a video article.</div>
                )}
            </div>
            <div className={styles.tags}>
                {article.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ArticleDetails;
