import { useState, useEffect } from "react"; //
import PostCard from "./PostCard";
import LoadingSpinner from "./LoadingSpinner"; //

// รับ props มาจาก App
function PostList({ favorites, onToggleFavorite }) {
  const [posts, setPosts] = useState([]); // เก็บโพสต์
  const [loading, setLoading] = useState(true); // loading
  const [error, setError] = useState(null); // error
  const [search, setSearch] = useState(""); // search

  // ✅ 🔥 แยก function ออกมา (สำคัญมาก)
  async function fetchPosts() {
    try {
      setLoading(true); // เริ่มโหลด
      setError(null); // ล้าง error

      const res = await fetch("https://jsonplaceholder.typicode.com/posts");

      if (!res.ok) throw new Error("ดึงข้อมูลไม่สำเร็จ");

      const data = await res.json();

      // (เหมยมีของเดิม → แปลงเป็นอังกฤษอ่านรู้เรื่อง)
      const cleanData = data.slice(0, 20).map((post, index) => ({
        ...post,
        title: `Post ${index + 1}`,
        body: "This is a sample post description for testing the UI.",
      }));

      setPosts(cleanData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // หยุดโหลด
    }
  }

  // โหลดครั้งแรก
  useEffect(() => {
    fetchPosts(); // เรียกใช้ function
  }, []);

  // filter
  const filtered = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  );

  // loading
  if (loading) return <LoadingSpinner />;

  // error
  if (error)
    return (
      <div style={{ padding: "1.5rem", color: "red" }}>
        เกิดข้อผิดพลาด: {error}
      </div>
    );

  return (
    <div>
      {/* 🔥 หัวข้อ + ปุ่มโหลดใหม่ */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>โพสต์ล่าสุด</h2>

        {/* ✅ ปุ่มโหลดใหม่ */}
        <button
          onClick={fetchPosts} // 👈 กดแล้วเรียก function เดิม
          style={{
            padding: "0.4rem 0.8rem",
            background: "#1e40af",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          โหลดใหม่
        </button>
      </div>

      {/* search */}
      <input
        type="text"
        placeholder="ค้นหาโพสต์..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", marginBottom: "1rem" }}
      />

      {/* ไม่พบ */}
      {filtered.length === 0 && <p>ไม่พบโพสต์</p>}

      {/* list */}
      {filtered.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          postId={post.id}
          isFavorite={favorites.includes(post.id)}
          onToggleFavorite={() => onToggleFavorite(post.id)}
        />
      ))}
    </div>
  );
}

export default PostList;
