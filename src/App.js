import React, {useEffect, useState} from "react";
import ThemeProvider from "./providers/theme-provider";
import Layout from "./layout/layout";
import Display from '../src/display/display'
import Operations from "./operationsBlock/operations";
import Equal from "./equal/equal";
import Numbers from "./nubersBlock/numbers";
import EmptyBoard from "./emptyBoard/empty-board";
import ThemeButton from "./themeButton/theme-button";
import runtime from "./img/runtime.svg";
import constructor from "./img/constructor.svg";

import './app.css'


function App() {

  const [ value, setValue ] = useState('');
  const [ disabled, setDisabled] = useState(true);
  const [ draggable, setDraggable] = useState(true);

  const [ board, setBoard] = useState( [
    {id: 1, order: 1, item: <Display value={value}/>},
    {id: 2, order: 2, item: <Operations pickValue={pickValue} disabled={disabled}/>},
    {id: 3, order: 3, item: <Numbers pickValue={pickValue} disabled={disabled}/>},
    {id: 4, order: 4, item: <Equal pickValue={pickValue} disabled={disabled}/>},
  ]);

  const [ currentBlock, setCurrentBlock ] = useState(null);
  const [ active, setActive ] = useState(false);


  function dragOverHandler(e) {
    e.preventDefault();
  }

  function dragStartHandler(e, block) {
    setCurrentBlock(block)
  }

  function dragDropHandler(e, block) {
    e.preventDefault();
    setBoard(board.map(b => {
      if (b.id === block.id) {
        return {...b, order: currentBlock.order}
      }
      if (b.id === currentBlock.id) {
        return {...b, order: block.order}
      }
      return b
    }))
  }

  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1
    } else {
      return -1
    }
  }

  const pickMode = (e) => {
    e.preventDefault();
    setActive(!active)
    setDisabled(!disabled)
    setDraggable(!draggable)
  }

  function pickValue(e) {
    return setValue(e);
  }

  useEffect(() => {
    setBoard(prev => {
      return prev.map(b => {
        if (b.id === 1) {
          return {
            ...b,
            item: <Display value={value} />,
          }
        } else if (b.id === 2) {
          return {
            ...b,
            item: <Operations pickValue={pickValue} disabled={disabled} />,
          }
        } else if (b.id === 3) {
          return {
            ...b,
            item: <Numbers pickValue={pickValue} disabled={disabled} />,
          }
        } else if (b.id === 4) {
          return {
            ...b,
            item: <Equal pickValue={pickValue} disabled={disabled} />,
          }
        } else {
          return b;
        }
      })
    })
  }, [disabled, value])

  return (
    <ThemeProvider>
      <Layout>
        <div className="App">
          <div className="buttons">
            <ThemeButton/>
            <div className="button__modes">
              <button
                className={`button__mode ${active ? 'runtime': 'constructor'}`}
                onClick={pickMode}
              >
              <span className='runtime'>
                <img src={runtime} alt="runtime"/>
                <p>runtime</p>
              </span>
                <span className='constructor'>
                <img src={constructor} alt="constructor"/>
              <p>constructor</p>
              </span>
              </button>
            </div>
          </div>
          <h2>Калькулятор выполнен в светлом и темном варианте.<br/>
            Так же позволяет переключаться между режимами runtime и constructor. <br/>
            Runtime - позволяет менять местами блоки калькулятора.<br/>
            Constructor - позволяет производить математические операции.<br/>
          </h2>
          <div className={`board ${active ? 'runtime': 'constructor'}`}>
            {board.sort(sortCards).map((block) =>
              <div
                key={block.id}
                className='block'
                draggable={draggable}
                onDragStart={(e) => dragStartHandler(e, block)}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dragDropHandler(e, block)}
              >
                {block.item}
              </div>
            )}
          </div>
        </div>

      </Layout>
    </ThemeProvider>
  );
}

export default App;
