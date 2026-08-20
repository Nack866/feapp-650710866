import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Card from './components/Card';
import ProfileCard from './components/ProfileCard';


const members = [
  {
    id: 1,
    name: 'สมหญิง ใจดี',
    nickname: 'ฝน',
    major: 'เทคโนโลยีสารสนเทศ',
    favorites: ['ชาเขียว', 'แมว']
  },
  {
    id: 2,
    name: 'สมชาย ใจดี',
    nickname: 'บอล',
    major: 'วิทยาการคอมพิวเตอร์',
    favorites: ['กาแฟ', 'ฟุตบอล']
  },
  {
    id: 3,
    name: 'นภัสสร แสนดี',
    nickname: 'นุ่น',
    major: 'การออกแบบดิจิทัล',
    favorites: ['ชานม', 'สุนัข']
  }
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