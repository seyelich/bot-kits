import React, { useRef } from 'react';
import DeepLinkIcon from '../../icons/others/DeepLink';
import styles from './link-with-copy-btn.module.css';

interface LinkWithCopyButtonProps {
  link: string;
  className: string;
}

const LinkWithCopyButton: React.FC<LinkWithCopyButtonProps> = ({
  link,
  className,
}) => {
  const linkInputRef = useRef<HTMLInputElement | null>(null);

  const copyLinkToClipboard = async () => {
    if (linkInputRef.current) {
      await navigator.clipboard.writeText(linkInputRef.current.value);
    }
  };

  return (
    <div className={className}>
      <label
        className={styles.container}
        htmlFor="linkInput"
        aria-label="Скопировать ссылку"
      >
        <input
          className={styles.input}
          type="text"
          id="linkInput"
          value={link}
          readOnly
          ref={linkInputRef}
        />
        <button
          type="button"
          onClick={copyLinkToClipboard}
          className={styles.btn}
        >
          <DeepLinkIcon />
        </button>
      </label>
    </div>
  );
};

export default LinkWithCopyButton;
