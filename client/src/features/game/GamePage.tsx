import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import Modal from '../modal/Modal';
import { Question, Theme } from './types/types';
import { log } from 'console';
import GameItem from './GameItem';

function GamePage(): JSX.Element {
  const questions = useSelector((store: RootState) => store.game.questions);
  // const [modalActive, setModaActive] = useState(false);
  // const [answer, setAnswer] = useState('');
  // const [notice, setNotice] = useState('');

  // const dispatch = useAppDispatch();
  // const userScore = useSelector((store: RootState) => store.user.userScore);

  // const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
  //   event
  // ) => {
  //   event.preventDefault();

  //   if (answer.trim()) {
  //     if (answer === question.answer) {
  //     }
  //   }
  //   setNotice('Введите ответ');
  // };

  return (
    <>
      <div>GamePage</div>
      <div>
        {questions.map((el: Theme) => (
          <div style={{ display: 'flex' }}>
            <h1>{el[0].Theme.title}</h1>
            <div style={{ display: 'flex' }}>
              {el.map((question) => (
                <GameItem
                  key={question.id}
                  question={question}
                  // setModalActive={setModaActive}
                  // modalActive={modalActive}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default GamePage;
