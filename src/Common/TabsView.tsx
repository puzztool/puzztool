import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import { useLocalStorage } from '../Hooks/LocalStorage';

interface Props {
  children?: JSX.Element | JSX.Element[];
  defaultActiveKey?: unknown;
  id: string;
}

interface SavedState {
  activeKey: string;
}

function TabsView(props: Props) {
  const [activeKey, setActiveKey] = useState();

  useLocalStorage<SavedState>(
    props.id,
    (savedState) => {
      if (savedState) {
        setActiveKey(savedState.activeKey);
      }
    },
    () => {
      return {
        activeKey,
      };
    });

  function onTabSelect(eventKey: string) {
    setActiveKey(eventKey);
  }

  return (
    <Tabs
      activeKey={activeKey}
      defaultActiveKey={props.defaultActiveKey}
      id={props.id}
      onSelect={onTabSelect}
    >
      {props.children}
    </Tabs>
  );
}

export default TabsView;
