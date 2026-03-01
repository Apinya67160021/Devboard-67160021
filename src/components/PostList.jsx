import PostCard from "./PostCard";

function PostList({ posts }) {
  return (
    <div>
      <h2>โพสต์ล่าสุด</h2>
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}

export default PostList;
