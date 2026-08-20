import React from 'react';
import Header from './Components/Header';
import MovieList from './Components/MovieList';
import Footer from './Components/Footer';
import Greeting from './Components/Greeting';
import Card from './Components/Card';
import ProfileCard from './Components/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'สมหญิง ใจดี', nickname: 'ฝน',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
   { id: 2, name: 'สมพร นอนหงาย', nickname: 'พร',
    major: 'วิทยาการคอมพิวเตอร์', favorites: ['กระท่อม', 'งู'] },
    { id: 3, name: 'สม น้ำหน้า', nickname: 'สม',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชามะนาว', 'ไดโนเสาร์'] },
];

function App() {
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
}


export default App;
