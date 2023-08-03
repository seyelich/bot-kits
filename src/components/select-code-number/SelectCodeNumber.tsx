import { useEffect, useState } from 'react';
import belarus from '../../images/belarus.png';
import styles from './SelectCodeNumber.module.css';

interface Item {
  id: number;
  image: string;
  country: string;
  code: string;
}

const SelectCodeNumber: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const items: Item[] = [
    {
      id: 1,
      image: belarus,
      country: 'Беларусь',
      code: '+375',
    },
    {
      id: 2,
      image: belarus,
      country: 'Беларусь',
      code: '+376',
    },
    {
      id: 3,
      image: belarus,
      country: 'Беларусь',
      code: '+375',
    },
    {
      id: 4,
      image: belarus,
      country: 'Беларусь',
      code: '+375',
    },
    {
      id: 5,
      image: belarus,
      country: 'Беларусь',
      code: '+375',
    },
    {
      id: 6,
      image: belarus,
      country: 'Беларусь',
      code: '+375',
    },
    {
      id: 7,
      image: belarus,
      country: 'Беларусь',
      code: '+375',
    },
  ];

  useEffect(() => {
    if (items.length > 0 && !selectedItem) {
      setSelectedItem(items[0]);
    }
  }, [items, selectedItem]);

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className={styles.selectCodeNumber}>
      <div
        className={styles.selectCodeNumberSelector}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.selectCodeNumberSelectedItem}>
          {selectedItem && (
            <>
              <span className={styles.selectCodeNumberCode}>
                {selectedItem.code}
              </span>
              <img
                className={styles.selectCodeNumberFlag}
                src={selectedItem.image}
                alt="Flag"
              />

            </>
          )}
        </div>
        {isOpen && (
          <div className={styles.selectCodeNumberOptions}>
            {items.map((item) => (
              <div
                className={styles.selectCodeNumberOption}
                key={item.id}
                onClick={() => handleItemClick(item)}
              >
                <img
                  src={item.image}
                  alt="Flag"
                  className={styles.optionCodeNumberFlag}
                />
                <span className={styles.optionCodeNumberCountry}>
                  {item.country}
                </span>
                <span className={styles.optionCodeNumberCode}>{item.code}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectCodeNumber;
