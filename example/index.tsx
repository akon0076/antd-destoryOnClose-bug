import 'react-app-polyfill/ie11';
import * as React from 'react';
import { useState } from 'react';
import {Button, Modal } from 'antd';
import { render } from 'react-dom';
import "antd/dist/antd.css";


const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
    <Button onClick={() => setVisible(true)}>show</Button>
      <Modal
        visible={visible}
        destroyOnClose
        onCancel={() => setVisible(false)}
      >
        {new Array(2000).fill(1).map(() => {
          return (
            <div>
              111<div>23</div>
            </div>
          );
        })}
      </Modal></>
  );
};

render(<App />, document.getElementById('root'));
