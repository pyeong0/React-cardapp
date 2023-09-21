// import React from 'react'
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Menu } from './styeldComp'
import Cards from './Cards'
import Detail from './Detail'
import { useSelector } from 'react-redux';

function App() {
const contents = useSelector((state) => state.contents);
const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // 50px 스크롤되면 h1 태그를 숨김 
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트 될 때 이벤트 리스너를 제거ㅅ
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
      <BrowserRouter> 
        <Menu>
        { !hideHeader && <h1>웨이트 트레이닝</h1> }
        </Menu>
        <Routes>
          {useSelector((state) => state.contents).map((content, idx) => {
            return <Route path={content.path} key={idx} element={<Detail content={content.detail} />} />
          })}
          <Route path="/" element={<Cards />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

