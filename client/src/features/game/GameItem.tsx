import React, { useState } from 'react';
import { Question } from './types/types';
import Modal from '../modal/Modal';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import './style.scss';
import { fetchScore } from '../../App/api';

function GameItem({ question }: { question: Question }): JSX.Element {
  const [modalActive, setModalActive] = useState(false);
  const [answer, setAnswer] = useState('');
  const [notice, setNotice] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useAppDispatch();
  const userScore = useSelector((store: RootState) => store.user.userScore);

  const handleClickOpen = (): void => {
    setModalActive(true);
  };

  const handleClickCheck = (): void => {
    if (answer.trim()) {
      if (answer.toLowerCase() === question.answer.toLowerCase()) {

        dispatch({
          type: 'user/addScore',
          payload: userScore + question.price,
        });
        fetchScore(question.id, userScore);
        setNotice('Верно');
        setIsDisabled(true);
        setAnswer('');
        return;
      }
      setNotice(`Нет =( Правильный ответ: ${question.answer}`);
      dispatch({ type: 'user/addScore', payload: userScore - question.price });
      fetchScore(question.id, userScore);
      setIsDisabled(true);
      setAnswer('');
      return;
    }
    setNotice('Введите ответ');
    setAnswer('');
  };

  return (
    <>
      <button
        disabled={isDisabled}
        className={isDisabled ? "btn-open btn-inactive" : "btn-open"}
        key={question.id}
        type="button"
        onClick={() => handleClickOpen()}>
        {isDisabled ? 'открыто' : question.price}
        {/* style={({ isDisabled }) => (isDisabled ? 'active_link' : '')} */}
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        <>
          <p>{question.question}</p>
          <input value={answer} onChange={(e) => setAnswer(e.target.value)} />
          <button
            key={question.id}
            type="button"
            onClick={() => handleClickCheck()}>
            Проверить
          </button>
          <p className="check-answer">{notice}</p>
        </>
      </Modal>
    </>
  );
}

export default GameItem;
