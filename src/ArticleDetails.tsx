import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ArticleDetails.module.css';
import articlesData from './data/articles.json'; // Import JSON data

const ArticleDetails: React.FC = () => {
    const { articleId } = useParams<{ articleId: string }>(); // Get articleId from route params
    const [filteredArticle, setFilteredArticle] = useState(
        articlesData.data
            .flatMap((page) => page.articles)
            .find((a) => a.articleId === articleId) || null
    ); // Initialize with the article matching the route param

    const tags = articlesData.data.flatMap((page) => page.tags); // Fetch tags from the `tags` attribute of the data section

    const handleTagClick = (tag: string) => {
        const article = articlesData.data
            .flatMap((page) => page.articles)
            .find((a) => a.tag === tag); // Find the article matching the clicked tag
        setFilteredArticle(article || null); // Update the filtered article
    };

    if (!filteredArticle) {
        return <div>Article not found</div>;
    }

    return (
        <div className={styles['article-details-container']}>
            <div className={styles.title}>{filteredArticle.title}</div>
            <div className={styles['hero-image']}>
                <img src={filteredArticle.hero} alt={filteredArticle.title} className={styles['hero-img']} />
            </div>
            <div className={styles['author-details']}>
                <div className={styles['author-hover']}>
                    <div className={styles['author-name']}>Author: {filteredArticle.authorName}</div>
                    <p className={styles['author-description']}>{filteredArticle.description}</p>
                </div>
            </div>
            <div className={`${styles.subtitle} ${styles['bordered-field']}`}>{filteredArticle.subtitle}</div>
            <div className={styles.content}>
                {filteredArticle.articleType === 1 ? (
                    <div className={styles.description}>{filteredArticle.description}</div>
                ) : (
                    <div className={styles.description}>
                        This is a video article. Watch it{' '}
                        <a href={filteredArticle.mediaUrl} target="_blank" rel="noopener noreferrer">
                            here
                        </a>.
                    </div>
                )}
            </div>
            <div className={styles.tags}>
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className={styles.tag}
                        onClick={() => handleTagClick(tag)} // Add click handler for tags
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ArticleDetails;
