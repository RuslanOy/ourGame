import React from 'react'
import '../main/styles/mainStyle.scss'

function Error(): JSX.Element {
  return (
    <div className="main__div">
        <h1 className="main__header">Такой страницы нет!</h1>
        <img className="main__imgg" src="https://images.stopgame.ru/uploads/images/444861/form/2019/03/30/1553944218.jpg" alt="img" />
    </div>

  );
}

export default Error;