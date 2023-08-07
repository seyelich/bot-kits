import { memo, useState } from 'react';
import Styles from './dialogs-sidebar-toggle.module.css';
import ToggleInformation from './toggle-information/toggle-information';
import ToggleFiles from './toggle-files/toggle-files';

interface DialogsSidebarToggleProps {
  lastAction: string;
  firstAction: string;
}

const DialogsSidebarToggle = memo(
  ({ lastAction, firstAction }: DialogsSidebarToggleProps) => {
    const [isInfoOpen, setInfoOpen] = useState(true);

    const toggleOnInfo = () => {
      setInfoOpen(true);
    };

    const toggleOnFiles = () => {
      setInfoOpen(false);
    };

    return (
      <>
        <div className={Styles.toggle}>
          <div
            className={`${Styles.toggleOption} ${
              isInfoOpen && Styles.toggleOptionActive
            }`}
            onClick={toggleOnInfo}
          >
            <p className={Styles.optionName}>Информация</p>
          </div>
          <div
            className={`${Styles.toggleOption} ${
              !isInfoOpen && Styles.toggleOptionActive
            }`}
            onClick={toggleOnFiles}
          >
            <p className={Styles.optionName}>Файлы</p>
          </div>
        </div>
        {isInfoOpen ? (
          <ToggleInformation
            lastAction={lastAction}
            firstAction={firstAction}
          />
        ) : (
          <ToggleFiles />
        )}
      </>
    );
  }
);

export default DialogsSidebarToggle;
