import { MouseEvent, ReactNode, useRef, useState } from 'react';

export default function AddBotDraggable({
  children,
  childRef,
}: {
  children: ReactNode;
  childRef: React.RefObject<HTMLDivElement>;
}) {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const mouseCoords = useRef({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });
  const handleDragStart = (e: MouseEvent<HTMLDivElement>) => {
    if (!childRef.current) return;
    const slider = childRef.current;
    const startX = e.pageX - slider.offsetLeft;
    const startY = e.pageY - slider.offsetTop;
    const { scrollLeft, scrollTop } = slider;
    mouseCoords.current = { startX, startY, scrollLeft, scrollTop };
    setIsMouseDown(true);
  };
  const handleDragEnd = () => {
    setIsMouseDown(false);
  };
  const handleDrag = (e: MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown || !childRef.current) return;
    e.preventDefault();
    const slider = childRef.current;
    const x = e.pageX - slider.offsetLeft;
    const y = e.pageY - slider.offsetTop;
    const walkX = (x - mouseCoords.current.startX) * 1.5;
    const walkY = (y - mouseCoords.current.startY) * 1.5;
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
    slider.scrollTop = mouseCoords.current.scrollTop - walkY;
  };

  return (
    <div
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDrag}
    >
      {children}
    </div>
  );
}
