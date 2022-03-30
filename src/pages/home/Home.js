import React from 'react'
import Hearder from '../../header/Hearder';
import Posts from '../../posts/Posts';
import Sidebar from '../../sidebar/Sidebar';

import "./home.css";

export default function Home() {
  return (
    <>
    <Hearder/>
    <div className="home">
    <Posts/>
    <Sidebar/>
     
    </div>
    </>
    
  )
}
