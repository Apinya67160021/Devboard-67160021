import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import UserCard from "./components/UserCard";

const POSTS = [
  { id: 1, title: "React คืออะไร?", body: "React เป็น library สำหรับสร้าง UI" },
  { id: 2, title: "ทำไมต้องใช้ Components?", body: "แบ่ง UI เป็นชิ้นเล็ก ๆ" },
  { id: 3, title: "JSX คืออะไร?", body: "เขียน HTML ใน JS ได้" },
  { id: 4, title: "Props ทำงานอย่างไร?", body: "ส่งข้อมูลเข้า component" },
];

const USERS = [
  { id: 1, name: "สมชาย ใจดี", email: "somchai@dev.com" },
  { id: 2, name: "สมหญิง รักเรียน", email: "somying@dev.com" },
  { id: 3, name: "วิชาญ โค้ดเก่ง", email: "wichan@dev.com" },
];

function App() {
  return (
    <div>
      <Navbar />

      <div style={{ maxWidth: "900px", margin: "2rem auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "2rem",
          }}
        >
          <div>
            <PostList posts={POSTS} />
          </div>

          <div>
            <h2>สมาชิก</h2>
            {USERS.map((user) => (
              <UserCard key={user.id} name={user.name} email={user.email} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
