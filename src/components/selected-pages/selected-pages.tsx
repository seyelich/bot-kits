import { SetStateAction, Dispatch } from 'react';
import Styles from './selected-pages.module.css';
import PageOption from '../page-option/page-option';
import fakeData from './selected-pages.fakedata';

interface SelectedPagesProps {
  isDisabled?: boolean;
  pages: typeof fakeData;
  setPages: Dispatch<SetStateAction<typeof fakeData>>;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

function SelectedPages({
  isDisabled = false,
  pages,
  setPages,
  count,
  setCount,
}: SelectedPagesProps) {
  const isEmpty = Boolean(!pages.length);
  const { cnt, cntNotEmpty, defaultButton, plusImg } = Styles;
  const classNames = [cnt];

  if (!isEmpty) {
    classNames.push(cntNotEmpty);
  }

  const addPage = () => {
    setPages([...pages, fakeData[count]]);
    setCount(count + 1);
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
