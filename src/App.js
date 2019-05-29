import React, {useState, useEffect} from 'react';
import MediaCard from './Components/Card.js';

function App() {

  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch ('https://private-c3edb-postsmock.apiary-mock.com/posts')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setPost(data); 
      console.log(data);    
    })
  }, [])


  return (
    <div className="App">
        {/* {post.map((postItem) => {
          return <li key = {postItem.id}>{postItem.title}</li>
        })} */}
        {post.map((postItem)=> {
          return <MediaCard 
          key={postItem.id} 
          title={postItem.title}
          shortDescription={postItem.shortDescription}
          category={postItem.category}
          ></MediaCard>
        })} 
    </div>
  );
}

export default App;
