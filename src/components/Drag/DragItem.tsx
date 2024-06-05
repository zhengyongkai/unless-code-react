import { FieldsType } from '@/utils/schema/basic/types/basic';
import { useDrag } from 'react-dnd';

function DragItem(props: { data: FieldsType; isDragging: boolean }) {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: props.data.type,
      item: props.data.type,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1
      })
    }),
    []
  );
  return (
    <>
      <div
        ref={dragRef}
        style={{ opacity }}
        hover:bg-gray-100
        hover:text-gray-900
        hover:border-red
        border-1
        border
        w-full
        text-center
        h-45
        leading-45
        mb-10
        bg="#e9e9e9"
        cursor-move>
        {props.data.type}
      </div>
    </>
  );
}

export default DragItem;
