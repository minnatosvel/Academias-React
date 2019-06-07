import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router } from 'react-router-dom'
import MenuBar from './Components/MenuBar';
import Posts from './Components/Posts';
import Header from './Components/Header';
import AddPost from './Components/AddPost';



function App() {

  const [posts, setPosts] = useState([]);
  const [postListCategory, setPostListCategory] = useState([]);
  const [setFilterCategory] = useState('all');

  useEffect(() => {
    fetch ('https://private-c3edb-postsmock.apiary-mock.com/posts')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setPosts(data);
      setPostListCategory(data);
    })
  }, [])

  function filterFnctn (value){
    if(value === 'all'){
      setPosts(postListCategory);
    } else{
      setPosts(postListCategory.filter((postsfltr)=>postsfltr.category === value));
    }
  }

   function handleSubmitPost(newPost) {
    setPosts([...posts, newPost]);
    }

  return (
    <div className="main-container">
      <div>
        <Header></Header>
      </div>
      <switch>
        <Router>
          <div className="post-container">
            <AddPost posts={posts} handleAddPost={handleSubmitPost}/>
            <MenuBar posts={posts}
            handleSelectedFilter={filterFnctn}/>
            <Posts posts={posts} 
            handleSelectedCategoryFltr={setFilterCategory}
            />
          </div>
        </Router>
      </switch>
    </div>
  );
}


export default App;

