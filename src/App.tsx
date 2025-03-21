import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState<string>('');

  const addTag = () => {
    if (newTag.trim() !== '') {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <div>
        <h1>Design UI</h1>
        <div>
          <input type="text" placeholder="Title" />
        </div>
        <div>
          <input type="text" placeholder="Hero Image URL" />
        </div>
        <div>
          <select>
            <option value="" disabled selected>Author Name</option>
            <option value="author1">Author 1</option>
            <option value="author2">Author 2</option>
          </select>
        </div>
        <div>
          <input type="text" placeholder="SubTitle" />
        </div>
        <div>
          <select>
            <option value="" disabled selected>Article Type</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
          </select>
        </div>
        <div>
          <textarea placeholder="Description" />
        </div>
        <div>
          <select>
            <option value="" disabled selected>Category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
          </select>
        </div>
        <div>
            <div>
            {tags.map((tag, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
              <input type="text" value={tag} readOnly style={{ width: '100px', marginRight: '5px' }} />
              <button onClick={() => removeTag(index)} style={{ marginRight: '5px' }}>-</button>
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
              <input
              type="text"
              placeholder="Tag"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              style={{ width: '100px', marginRight: '5px' }}
              />
              <button onClick={addTag} style={{ marginLeft: '5px' }}>+</button>
            </div>
            </div>
            </div>
        </div>
      </div>
  );
}

export default App;
