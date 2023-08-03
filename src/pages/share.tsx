import { useState } from 'react';
import SearchInput from '../components/search-input/search-input';

export default function Share() {
  const [filter, setFilter] = useState<string>();

  return (
    <>
      <h1>Пользователи</h1>
      <div>
        <SearchInput
          placeholder=""
          hasFilter
          onChange={(evt) => {
            setFilter(evt.target.value);
          }}
        />
      </div>
    </>
  );
}
