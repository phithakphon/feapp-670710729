import React from 'react';
//import Header from './Components/Header';
//import MovieList from './Components/MovieList';
//import Footer from './Components/Footer';
//import Greeting from './Components/Greeting';
//import Card from './Components/Card';
//import ProfileCard from './Components/ProfileCard';
//import './App.css';
import Button from './Components/Button';

const members = [
  { id: 1, name: 'สมหญิง ใจดี', nickname: 'ฝน',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
   { id: 2, name: 'สมพร นอนหงาย', nickname: 'พร',
    major: 'วิทยาการคอมพิวเตอร์', favorites: ['กระท่อม', 'งู'] },
    { id: 3, name: 'สม น้ำหน้า', nickname: 'สม',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชามะนาว', 'ไดโนเสาร์'] },
];

/*function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}*/
function App() {
  return (
    <div>
      {/* Nav แยกด้านบน */}
      <nav className="flex items-center justify-between bg-slate-800 px-6 py-4">
        <span className="text-xl font-bold text-white">🎬 MovieHub</span>

        <div className="flex gap-6 text-slate-300">
          <a href="#">หน้าแรก</a>
          <a href="#">หนังใหม่</a>
          <a href="#">รายการโปรด</a>
        </div>
      </nav>

      {/* ส่วนอื่นอยู่ข้างล่าง */}
      <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl bg-white p-4 shadow">การ์ด 1</div>
        <div className="rounded-xl bg-white p-4 shadow">การ์ด 2</div>
        <div className="rounded-xl bg-white p-4 shadow">การ์ด 3</div>
        <div className="rounded-xl bg-white p-4 shadow">การ์ด 4</div>
      </div>

      <div>
        <div className="bg-slate-100 text-center">
          <h1 className="text-4xl font-bold text-slate-800">
            MovieHub
          </h1>

          <p className="text-lg text-slate-500">
            รวมหนังดีที่คุณห้ามพลาด
          </p>

          <p className="text-sm font-semibold uppercase text-cyan-600">
            since 2026
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
          <h2 className="text-xl font-bold text-slate-800">
            Interstellar
          </h2>

          <p className="mt-2 text-slate-500">
            การเดินทางข้ามกาแล็กซีเพื่อหาบ้านใหม่ให้มนุษยชาติ
          </p>

          <span className="mt-4 inline-block rounded-full bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-700">
            Sci-Fi
          </span>
        </div>
      </div>
      <div className="flex gap-3 p-6">
     <Button>บันทึก</Button>
    <Button variant="danger">ลบ</Button>
     <Button variant="ghost">ยกเลิก</Button>
</div>
    </div>
  );
}

export default App;

