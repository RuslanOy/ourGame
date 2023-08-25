import React from 'react'
import './styles/mainStyle.scss'

function MainPage(): JSX.Element {
  return (
    <div className='main__div'>
        <h1 className='main__header'>Привет друг, давай поиграем!</h1>
        <img className='main__imgg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebrvT5cjW1ZI78QFGi2W3pwXHBgu2KlxK4g&usqp=CAU" alt="img" />
    </div>
  )
}

export default MainPage;