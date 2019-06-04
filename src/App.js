import React, {useState, useEffect} from 'react';
import MenuBar from './Components/MenuBar';
import Posts from './Components/Posts';
import Header from './Styles/Header.css';
import AddPost from './Components/AddPost';



function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch ('https://private-c3edb-postsmock.apiary-mock.com/posts')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setPosts(data);
    })
  }, [])


  return (
    <div>
      <div className="Menu">
        <div>
          <h2 className='subtitle' align="center">Making Life Easier</h2>
          <h1 className='title' align="center">Discovering the World</h1>
        </div>
        <AddPost posts={posts}/>
        <MenuBar posts={posts}
        setPosts={setPosts}/>
        <Posts posts={posts} />
        {/* <Posts posts = {posts.filter((postsfltr) => postsfltr.category === 'lifestyle')} /> */}

        {/* Note: setear estado para filtro y funcion para All*/}
      </div>
    </div>
  );
}

export default App;

