import React, { useState } from "react";
import "./Timeline.css";
import Sugestions from "./Sugestions";
import Post from "./posts/Post";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "redian_",
      postImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "johndoe",
      postImage:
        "https://media.istockphoto.com/id/1049028724/fr/photo/sourire-de-la-grenouille-aux-yeux-rouges.jpg?s=612x612&w=0&k=20&c=NHva2mvTRcxqY_9ydByVa7O45CHrXBcyb-ef5T3dQ0c=",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "mariussss",
      postImage:
        "https://cdn.britannica.com/84/206384-131-207CC735/Javan-gliding-tree-frog.jpg",
      likes: 140,
      timestamp: "2d",
    },
    {
      user: "kobee_18",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVAgX5uw3z7D8UtdYhWKH1SCs3iZynkWZv-sJUHLH4j5iac3iVokR7op9D0shlse830Lc&usqp=CAU",
      likes: 14,
      timestamp: "2d",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Sugestions />
      </div>
    </div>
  );
}

export default Timeline;
