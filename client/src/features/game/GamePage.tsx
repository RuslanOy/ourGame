import React, { useEffect } from 'react';
import Modal from './Modal';
import { Question, Theme } from './types/types';
import { fetchQuestions } from '../../App/api';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';

function GamePage(): JSX.Element {
  // const [arrayToMap, setArrayToMap] = useState([]);
  // const themes: Theme[] = [
  //   [
  //     { id: 1, q: 'T1Q1', a: '', price: 100, theme_id: ['Theme1'] },
  //     { id: 2, q: 'T1Q2', a: '', price: 200, theme_id: ['Theme1'] },
  //   ],
  //   [
  //     { id: 3, q: 'T2Q1', a: '', price: 100, theme_id: ['Theme2'] },
  //     { id: 4, q: 'T2Q2', a: '', price: 200, theme_id: ['Theme2'] },
  //   ],
  // ];

  // const themes = [
  //   { id: 1, q: 'T1Q1', a: '', price: 100, Theme: { title: 'Theme1' } },
  //   { id: 2, q: 'T1Q2', a: '', price: 200, Theme: { title: 'Theme1' } },

  //   { id: 3, q: 'T2Q1', a: '', price: 100, Theme: { title: 'Theme2' } },
  //   { id: 4, q: 'T2Q2', a: '', price: 200, Theme: { title: 'Theme2' } },
  // ];

  // const themArray = themes.map((el) => el.Theme.title);

  // const dispatch = useAppDispatch();

  // const loadQuestions = async (): Promise<void> => {
  //   // const res = await fetch('/api/questions');
  //   const data = await fetchQuestions();
  //   const array = data.map((el: Question) => el.Theme.title);
  //   const uniqueArray = [...new Set(array)];
  //   const myArray: Theme[] = uniqueArray.map((el: string) => [
  //     ...data.filter((elem: Question) => elem.Theme.title === el),
  //   ]);

  //   dispatch({ type: 'game/load', payload: myArray });

  //   // setArrayToMap(myArray);
  // };

  // useEffect(() => {
  //   loadQuestions();
  // }, []);

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
