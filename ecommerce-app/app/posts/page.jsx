import React from "react";

const fetchPost = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.json()
  );
};

const page = async () => {
  const post = await fetchPost();
  console.log(post);
  return post.slice(0, 5).map((item) => (
    <article key={item.id}>
      <h2>{item.title}</h2>
      <p>{item.body}</p>
    </article>
  ));
};

export default page;
