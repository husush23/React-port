import { useEffect, useState } from "react";
import client from "../client";

function Posts() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
            asset->{
                _id,
                url
            },
            alt
        }
    }`,
      )
      .then((data) => setPosts(data))
      .catch(console.error);
    console.log(posts);
  }, []);

  return <div>hello</div>;
}

export default Posts;
