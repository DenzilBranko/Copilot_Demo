import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ArticleDetails.module.css';
import articlesData from './data/articles.json'; // Import JSON data

const ArticleDetails: React.FC = () => {
    const { articleId } = useParams<{ articleId: string }>(); // Get articleId from route params
    const article = articlesData.articles.find((a) => a.articleId === articleId); // Find the article by ID

    if (!article) {
        return <div>Article not found</div>;
    }

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
                {article.articleType === 1 ? (
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
