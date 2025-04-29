import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './ArticleForm.css';

const ArticleForm: React.FC = () => {
    const jsonData = {
        data: {
            articles: [
                {
                    title: "GitHub Copilot - About, Features and Use Cases",
                    hero: "https://www.freecodecamp.org/news/content/images/size/w2000/2023/06/Screenshot-2023-06-14-at-12.42.04-PM.png",
                    articleId: "a2b448sq",
                    categoryId: "r4wd2u8",
                    categoryName: "Programming",
                    authorId: "y7w3w242",
                    authorName: "John Doe",
                    articleType: 1,
                    tags: ["Science", "Technology"]
                },
                {
                    title: "Has Codeium Cracked the Code for AI Assistants?",
                    hero: "https://www.bigdatawire.com/wp-content/uploads/2024/05/AI-copilot_shutterstock_AI-generated.jpg",
                    articleId: "b2n2ss92",
                    categoryId: "ewd32s3",
                    categoryName: "Artificial Intelligence",
                    authorId: "n7232g2",
                    authorName: "Jane Smith",
                    articleType: 2,
                    tags: ["AI", "Technology"]
                }
            ]
        }
    };

    const [data] = useState(jsonData.data);
    const [filters, setFilters] = useState({
        authorId: '',
        categoryId: '',
        articleType: '',
        tag: ''
    });

    const navigate = useNavigate(); // Initialize useNavigate

    const uniqueAuthors = [...new Map(data.articles.map((article: any) => [article.authorId, article.authorName])).entries()];
    const uniqueCategories = [...new Map(data.articles.map((article: any) => [article.categoryId, article.categoryName])).entries()];
    const uniqueTags = [...new Set(data.articles.flatMap((article: any) => article.tags))];
    const uniqueArticleTypes = [...new Set(data.articles.map((article: any) => article.articleType))];

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleArticleClick = (articleId: string) => {
        navigate(`/article-details/${articleId}`); // Navigate to ArticleDetails with articleId
    };

    const filteredArticles = data.articles.filter((article: any) => {
        return (
            (!filters.authorId || article.authorId === filters.authorId) &&
            (!filters.categoryId || article.categoryId === filters.categoryId) &&
            (!filters.articleType || article.articleType.toString() === filters.articleType) &&
            (!filters.tag || article.tags.includes(filters.tag))
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
                <select name="categoryId" value={filters.categoryId} onChange={handleFilterChange}>
                    <option value="">Category</option>
                    {uniqueCategories.map(([categoryId, categoryName]) => (
                        <option key={categoryId} value={categoryId}>
                            {categoryName}
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
            </div>
            <div className="articles">
                {filteredArticles.map((article: any) => (
                    <div className="article" key={article.articleId}>
                        <div className="hero-image">
                            <img src={article.hero} alt={article.title} className="thumbnail" />
                        </div>
                        <div className="text-content">
                            <input type="text" placeholder="Title" className="title-input" value={article.title} readOnly />
                            <input type="text" placeholder="Subtitle" className="subtitle-input" value={article.tags.join(', ')} readOnly />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticleForm;