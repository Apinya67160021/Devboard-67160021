function PostCard({ title, body }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "1rem",
        marginBottom: "1rem",
        borderRadius: "8px",
      }}
    >
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default PostCard;
