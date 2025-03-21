import React, { useState } from 'react';
import './App.css';
import { convertToObject } from 'typescript';

const App: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState<string>('');

  const addTag = () => {
    const nextTagNumber = tags.length + 1;
    const nextTag = `Tag${nextTagNumber}`;
    setTags([...tags, nextTag]);
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  console.info("taga",tags)
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
          <div style={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'auto', flexDirection: 'row' }}>
            {tags.map((tag, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', padding: '5px' }}>
                <span onClick={() => removeTag(index)} style={{ border: '2px solid lightgreen', padding: '8px', boxSizing: 'border-box', marginRight: '10px' }}>{tag} <span style={{ fontWeight: 'bold', color: 'blue', fontSize: '10px', marginLeft:'30px',display:'inline-block' }}>-</span></span>
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
              <button onClick={addTag} style={{ marginLeft: '5px' }}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
