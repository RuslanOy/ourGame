import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import Modal from '../modal/Modal';
import { Question, Theme } from './types/types';
import { log } from 'console';
import GameItem from './GameItem';
import './style.scss'

function GamePage(): JSX.Element {
  const questions = useSelector((store: RootState) => store.game.questions);

  return (
    <div className="super-div">
      {questions.map((el: Theme) => (
        <div className="container">
          <div className="container__theme">
          <div><h1>{el[0].Theme.title}</h1></div>
          </div>
          <div className="container__questions" style={{ display: 'flex' }}>
            {el.map((question) => (
              <GameItem
                key={question.id}
                question={question}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GamePage;
