function UserCard({ name, email }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "0.75rem",
        marginBottom: "0.5rem",
        borderRadius: "8px",
      }}
    >
      <strong>{initials}</strong>
      <div>{name}</div>
      <div>{email}</div>
    </div>
  );
}

export default UserCard;
