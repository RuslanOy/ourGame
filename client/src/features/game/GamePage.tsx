import React, { useEffect } from 'react';
import Modal from './Modal';
import { Question, Theme } from './types/types';
import { fetchQuestions } from '../../App/api';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';

function GamePage(): JSX.Element {
  const questions = useSelector((store: RootState) => store.game.questions);

  return (
    <>
      <div>GamePage</div>
      <div>
        {questions.map((el: Theme) => (
          <div style={{ display: 'flex' }}>
            <h1>{el[0].Theme.title}</h1>
            <div>
              {el.map((card) => (
                <>
                  <button key={card.id} type="button">
                    {card.price}
                  </button>
                  <div style={{ display: 'none' }}>
                    размытие при открытой модалке
                  </div>
                  <Modal card={card} />
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default GamePage;
