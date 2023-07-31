import { useState } from 'react';
import Styles from './selected-pages.module.css';
import PageOption from '../PageOption/PageOption';
import fakeData from './selected-pages.fakedata';

interface SelectedPagesProps {
  isDisabled?: boolean;
}

function SelectedPages({ isDisabled = false }: SelectedPagesProps) {
  const [pages, setPages] = useState<typeof fakeData>([]);

  let count = 0;
  const isEmpty = Boolean(!pages.length);
  const { cnt, cntNotEmpty, defaultButton, plusImg } = Styles;
  const classNames = [cnt];

  if (!isEmpty) {
    classNames.push(cntNotEmpty);
  }

  const addPage = () => {
    setPages([...pages, fakeData[count]]);
    count += 1;
  };

  return (
    <div className={classNames.join(' ')}>
      {isEmpty && (
        <button
          className={defaultButton}
          type="button"
          onClick={addPage}
          disabled={isDisabled}
        >
          <div className={plusImg} />
          <p>Загрузить страницу</p>
        </button>
      )}

      {!isEmpty && <PageOption id="default" onClick={addPage} />}

      {pages.map((item) => (
        <PageOption
          id={item.id}
          isUploader={false}
          label={item.label}
          onClick={() => {}}
          avatar={item.avatar}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default SelectedPages;
