import fields from '@/utils/schema/basic/fields/basic';
import DragItem from '../Drag/DragItem';

function ComponentsLayout() {
  return (
    <>
      {fields.map((item) => {
        return <DragItem data={item}></DragItem>;
      })}
    </>
  );
}

export default ComponentsLayout;
