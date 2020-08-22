# Beautiful switch with react js
[![npm](https://img.shields.io/npm/v/react-tabs-with-components.svg?style=flat-square)](https://www.npmjs.com/package/react-tabs-with-components)

<img src="https://media.giphy.com/media/fr47a97LEaSLHpuDvV/giphy.gif" />

Simple, useful and beautiful switch
#
## Installation

```bash
npm install react-beautiful-switch
```


## Usage

```javascript
import React from 'react';
import Tabs from 'react-component-tabs';

function Tab1() {
  return (<div>
    Tab1 Content
  </div>)
}

function Tab2() {
  return (<div>
    Tab2 Content
  </div>)
}

const tabs = [
  {
    title: 'Tab 1',
    component: <Tab1 />,
    visible: true
  },
  {
    title: 'Tab 2',
    component: <Tab2 />,
    visible: true
  }
];

function App() {
  return (
    <div className="App">
      <Tabs tabs={tabs} defaultActiveTab={0} />
    </div>
  );
}

export default App;

```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| deafultValue | int | 0 | Which step will be active at the beginning |
| tabs | array | **Required**  | Component list of steps |

