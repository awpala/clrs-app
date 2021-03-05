import React from 'react';
import InsertionSort from '../../pseudocode/p018InsertionSort';
import DiagramInsertionSort from '../../diagrams/d018InsertionSort';
import MemoryInsertionSort from '../../memory/m018InsertionSort';
import Controls from '../../components/Controls';
import './Main.scss';

const Main = () => (
  <main className="main">
    <DiagramInsertionSort />
    <InsertionSort />
    <MemoryInsertionSort />
    <div /> {/* TO-DO: CONSOLE MODULE */}
    <Controls />
  </main>
);

export default Main;