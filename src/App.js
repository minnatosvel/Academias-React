import React, {useState, useEffect} from 'react';
import MenuBar from './Components/MenuBar';
import Posts from './Components/Posts';


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
        <MenuBar posts = {posts}
        setPosts={setPosts}/>
        <Posts posts = {posts.filter((postsfltr) => postsfltr.category == 'travel')} />

        {/* Note: setear estado para filtro y funcion para All*/}
      </div>
    </div>
  );
}

export default App;

{/* {post.map((props)=> {
  return (
    <MediaCard props={props}/>
  )
})}  */}
