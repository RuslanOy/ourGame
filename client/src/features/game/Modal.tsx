import React, { useState } from 'react';
import { Question } from './types/types';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';

function Modal({ card }: { card: Question }): JSX.Element {
  const [answer, setAnswer] = useState('');

  const dispatch = useAppDispatch();
  const userScore = useSelector((store: RootState) => store.user.userScore);

  const handleSubmit: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();

    if (event.target.value.trim()) {
      setAnswer(event.target.value.trim());
      if (answer === card.answer) {
        // увеличение счета + уведомление о правильном ответе
      }
    }
  };

  return (
    <div style={{ display: 'none', position: 'absolute' }}>
      <p>{card.question}</p>
      <form>
        <input value={answer} onChange={handleSubmit} />
        <button type="submit">Check</button>
      </form>
      {/* <p className="check-answer"></p> */}
    </div>
  );
}

export default Modal;
