import React, { useState } from 'react';
import { Question } from './types/types';

function Modal({ card }: { card: Question }): JSX.Element {
  const [answer, setAnswer] = useState('');

  const handleSubmit: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    setAnswer(event.target.value.trim());
    if (answer === card.a) {
      // увеличение счета + уведомление о правильном ответе
    }
  };

  return (
    <div style={{ display: 'none', position: 'absolute' }}>
      <p>{card.q}</p>
      <form>
        <input value={answer} onChange={handleSubmit} />
        <button type="submit">Check</button>
      </form>
      {/* <p className="check-answer"></p> */}
    </div>
  );
}

export default Modal;
