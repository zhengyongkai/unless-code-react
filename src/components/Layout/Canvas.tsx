import { useDrop } from 'react-dnd';

function Canvas() {
  const [collectedProps, drop] = useDrop(() => ({
    accept: 'CARD',
    drop: (item, monitor) => {
      const didDrop = monitor.didDrop(); // returns false for direct drop target
      if (didDrop) {
        return;
      }
    }
  }));

  return <div ref={drop}>Drop Target</div>;
}

export default Canvas;
