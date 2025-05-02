import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ArticleForm.css';
import articlesData from './data/articles.json'; // Import JSON data

const ArticleForm: React.FC = () => {
    const [data, setData] = useState(articlesData.data.flatMap((page) => page.articles)); // Flatten articles from all pages
    const [filters, setFilters] = useState({
        authorId: '',
        articleType: '',
        tag: '',
        categoryId: '' // Add categoryId to filters
    });

    const navigate = useNavigate();

    const uniqueAuthors = [
        ...new Map(data.map((article: any) => [article.authorId, article.authorName])).entries()
    ];
    const uniqueTags = [...new Set(articlesData.data.flatMap((page) => page.tags))]; // Fetch tags from the `tags` attribute of the data section
    const uniqueArticleTypes = [...new Set(data.map((article: any) => article.articleType))];
    const uniqueCategories = [
        ...new Map(data.map((article: any) => [article.categoryId, article.categoryName])).entries()
    ]; // Extract unique categories

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleArticleClick = (articleId: string) => {
        navigate(`/article-details/${articleId}`); // Navigate to ArticleDetails with articleId
    };

    const filteredArticles = data.filter((article: any) => {
        return (
            (!filters.authorId || article.authorId === filters.authorId) &&
            (!filters.articleType || article.articleType.toString() === filters.articleType) &&
            (!filters.tag || article.tag === filters.tag) && // Filter by `tag` attribute
            (!filters.categoryId || article.categoryId === filters.categoryId) // Filter by categoryId
        );
    });

    return (
        <div className="form-container">
            <div className="filters">
                <select name="authorId" value={filters.authorId} onChange={handleFilterChange}>
                    <option value="">Author</option>
                    {uniqueAuthors.map(([authorId, authorName]) => (
                        <option key={authorId} value={authorId}>
                            {authorName}
                        </option>
                    ))}
                </select>
                <select name="articleType" value={filters.articleType} onChange={handleFilterChange}>
                    <option value="">Article type</option>
                    {uniqueArticleTypes.map((type) => (
                        <option key={type} value={type}>
                            Type {type}
                        </option>
                    ))}
                </select>
                <select name="tag" value={filters.tag} onChange={handleFilterChange}>
                    <option value="">Tag</option>
                    {uniqueTags.map((tag) => (
                        <option key={tag} value={tag}>
                            {tag}
                        </option>
                    ))}
                </select>
                <select name="categoryId" value={filters.categoryId} onChange={handleFilterChange}>
                    <option value="">Category</option>
                    {uniqueCategories.map(([categoryId, categoryName]) => (
                        <option key={categoryId} value={categoryId}>
                            {categoryName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="articles">
                {filteredArticles.map((article: any) => (
                    <div
                        className="article"
                        key={article.articleId}
                        onClick={() => handleArticleClick(article.articleId)} // Pass articleId to ArticleDetails
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="hero-image">
                            <img src={article.hero} alt={article.title} className="thumbnail" />
                        </div>
                        <div className="text-content">
                            <input type="text" placeholder="Title" className="title-input" value={article.title} readOnly />
                            <input type="text" placeholder="Subtitle" className="subtitle-input" value={article.subtitle} readOnly />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticleForm;