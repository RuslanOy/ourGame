import React, { useState } from 'react';
import { Question } from './types/types';
import Modal from '../modal/Modal';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';

function GameItem({ question }: { question: Question }): JSX.Element {
  const [modalActive, setModalActive] = useState(false);
  const [answer, setAnswer] = useState('');
  const [notice, setNotice] = useState('');

  const dispatch = useAppDispatch();
  const userScore = useSelector((store: RootState) => store.user.userScore);

  const handleClickOpen = (): void => {
    console.log(question);
    setModalActive(true);
  };

  const handleClickCheck = (): void => {
    console.log(question);
    console.log(answer);

    if (answer.trim()) {
      if (answer.toLowerCase() === question.answer.toLowerCase()) {
        // Add Fetch for score !!!!!!!!!!!!!!!!!
        dispatch({ type: 'user/addScore', payload: question.price });
        setNotice('Верно');
        console.log(notice);
        setAnswer('');
        return;
      }
      setNotice(`Нет =( Правильный ответ: ${question.answer}`);
      setAnswer('');
      return;
    }
    setNotice('Введите ответ');
    setAnswer('');
  };

  return (
    <>
      <button
        key={question.id}
        type="button"
        onClick={() => handleClickOpen()}>
        {question.price}
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        <>
          <p>{question.question}</p>
          <input value={answer} onChange={(e) => setAnswer(e.target.value)} />
          <button
            key={question.id}
            type="button"
            onClick={() => handleClickCheck()}>
            Check
          </button>
          <p className="check-answer">{notice}</p>
        </>
      </Modal>
    </>
  );
}

export default GameItem;
