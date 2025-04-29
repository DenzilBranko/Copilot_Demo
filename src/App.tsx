import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticleForm from './ArticleForm';
import ArticleDetails from './ArticleDetails';
import './ArticleForm.css';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ArticleForm />} />
                <Route path="/article-details/:articleId" element={<ArticleDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
