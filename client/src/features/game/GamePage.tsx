import React from 'react';
import Modal from './Modal';
import { Theme } from './types/types';

function GamePage(): JSX.Element {
  const themes: Theme[] = [
    [
      { id: 1, q: 'T1Q1', a: '', price: 100, theme_id: ['Theme1'] },
      { id: 2, q: 'T1Q2', a: '', price: 200, theme_id: ['Theme1'] },
    ],
    [
      { id: 3, q: 'T2Q1', a: '', price: 100, theme_id: ['Theme2'] },
      { id: 4, q: 'T2Q2', a: '', price: 200, theme_id: ['Theme2'] },
    ],
  ];


  return (
    <>
      <div>GamePage</div>
      <div>
        {themes.map((el) => (
          <div style={{ display: 'flex' }}>
            <h1>{el[0].theme_id[0]}</h1>
            <div>
              {el.map((card) => (
                <>
                <button key={card.id} type="button">{card.price}</button>
                <div style={{ display: 'none' }}>размытие при отркытой модалке</div>
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
