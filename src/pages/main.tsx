import Canvas from '../components/Layout/Canvas';
import ComponentsLayout from '../components/Layout/ComponentsLayout';
import ToolsContainer from '../components/Layout/ToolsContainer';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

function mainPage() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div flex>
          <div w-200 border-solid border-red border-1>
            <ComponentsLayout />
          </div>
          <div flex-1 border-solid border-red border-1>
            <Canvas />
          </div>
          <div w-200 border-solid border-red border-1>
            <ToolsContainer />
          </div>
        </div>
      </DndProvider>
    </>
  );
}

export default mainPage;
