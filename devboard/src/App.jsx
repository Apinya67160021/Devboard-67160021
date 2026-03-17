// import useState → ใช้เก็บ state (favorites)
import { useState } from "react";

// import component ต่าง ๆ มาใช้ใน App
import Navbar from "./components/Navbar"; // แถบบน (แสดงจำนวน favorite)
import PostList from "./components/PostList"; // รายการโพสต์ (fetch เอง)
import UserList from "./components/UserList"; // รายชื่อ user (fetch เอง)
import AddPostForm from "./components/AddPostForm"; // ฟอร์มเพิ่มโพสต์ (ยังไม่ใช้จริง)

function App() {
  // สร้าง state เก็บ id ของโพสต์ที่กด favorite
  const [favorites, setFavorites] = useState([]);

  // ฟังก์ชัน toggle favorite (กดแล้วเพิ่ม/ลบ)
  function handleToggleFavorite(postId) {
    setFavorites(
      (prev) =>
        prev.includes(postId) // ถ้ามีอยู่แล้ว
          ? prev.filter((id) => id !== postId) //  ลบออก
          : [...prev, postId], // เพิ่มเข้าไป
    );
  }

  return (
    <div>
      {/* ส่งค่า favoriteCount ไปให้ Navbar แสดง */}
      <Navbar favoriteCount={favorites.length} />

      {/* layout หลัก */}
      <div
        style={{
          maxWidth: "900px", // กำหนดความกว้าง
          margin: "2rem auto", // จัดให้อยู่กลาง
          padding: "0 1rem", // padding ซ้ายขวา
          display: "grid", // ใช้ grid layout
          gridTemplateColumns: "2fr 1fr", // ซ้ายใหญ่ ขวาเล็ก
          gap: "2rem", // ช่องว่าง
        }}
      >
        {/* ฝั่งซ้าย */}
        <div>
          {/* ฟอร์มเพิ่มโพสต์ (ตอนนี้ยังไม่ทำงานจริง) */}
          <AddPostForm onAddPost={() => {}} />

          {/* 
            PostList:
            - รับ favorites → เอาไว้เช็คว่าโพสต์ไหนถูกกด
            - รับ onToggleFavorite → เอาไปใช้ในปุ่มหัวใจ
          */}
          <PostList
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        </div>

        {/* ฝั่งขวา */}
        <div>
          {/* 
            UserList:
            - ไม่มี props เพราะ fetch user เอง
          */}
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default App;
