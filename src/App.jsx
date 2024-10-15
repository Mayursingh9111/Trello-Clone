import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { BoardContext } from './context/BoardContext';



function App() {
  const boardData = {
    active:0,
    boards:[
      {
        name:'My Trello Board',
        bgcolor:'skyblue',
        list:[
          {id:"1",title:"To do",items:[{id:"AdrFt",title:"list actions menu: sort by"},{id:"AdrFu",title:"list: edit title"},{id:"AdrFv",title:"localStorage: set/get"},{id:"AdrFx",title:"css: fix bugs"},{id:"AdrFy",title:"testing: add tests for reducer fns & utils"}]},
          {id:"2",title:"In Progress",items:[{id:"BdrFd",title:"list actions menu: copy list"}]},
          {id:"3",title:"Done",items:[{id:"CdrFb",title:"show about menu: button"},{id:"CdrFc",title:"list actions menu: archive all cards, move all cards to a list, archive list, add card, move list"},{id:"CdrFd",title:"list: add, remove, move, "},{id:"CdrFe",title:"task: add, edit, remove, move"}]}
        ]
      }
    ]
  }
  const [allboard,setAllBoard] = useState(boardData); 
  
  return (
    <>
    <Header></Header>
    <BoardContext.Provider value={{allboard,setAllBoard}}>
      <div className='content flex'>
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
    </BoardContext.Provider>
    </>
  )
}

export default App
