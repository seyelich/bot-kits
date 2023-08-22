/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import ArrowRegister from '../../ui/icons/others/arrow-register';
import styles from './select-code-number.module.css';

interface Item {
  id: number;
  image: string;
  country: string;
  code: string;
}

const SelectCodeNumber: React.FC<{ items: Item[] }> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

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
        className={styles.selectCodeNumber__Selector}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.selectCodeNumber__SelectedItem}>
          <ArrowRegister />
          {selectedItem && (
            <>
              <span className={styles.selectCodeNumber__SelectedItem__Code}>
                {selectedItem.code}
              </span>
              <img
                className={styles.selectCodeNumber__SelectedItem__Flag}
                src={selectedItem.image}
                alt="Flag"
              />
            </>
          )}
        </div>
        {isOpen && (
          <div className={styles.selectCodeNumber__Options}>
            {items.map((item) => (
              <div
                className={styles.selectCodeNumber__Option}
                key={item.id}
                onClick={() => handleItemClick(item)}
              >
                <div className={styles.selectCodeNumber__OptionContainer}>
                  <img
                    src={item.image}
                    alt="Flag"
                    className={styles.selectCodeNumber__Option__Flag}
                  />
                  <span className={styles.selectCodeNumber__Option__Country}>
                    {item.country}
                  </span>
                </div>
                <span className={styles.selectCodeNumber__Option__Code}>
                  {item.code}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectCodeNumber;
