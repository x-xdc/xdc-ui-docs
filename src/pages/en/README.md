# XDC UI documentation

-------------

# Installation

```shell
npm install xdc-ui --save
```

# Usage

Import all components

```javascript
import Vue from 'vue';
import MintUI from 'xdc-ui';
import 'xdc-ui/lib/style.css';

Vue.use(MintUI);
```

Or import on demand

```javascript
import Cell from 'xdc-ui/lib/cell';
import 'xdc-ui/lib/cell/style.css';

import Button from 'xdc-ui/lib/button';
import 'xdc-ui/lib/button/style.css';

Vue.component(Cell.name, Cell);
Vue.component(Button.name, Button);
```

## Use [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)

Style sheet will be automatically imported

```javascript
import Vue from 'vue';
import MintUI from 'xdc-ui';

Vue.use(MintUI);
```

import on demand
```javascript
import Vue from 'vue';
import { Cell, Button } from 'xdc-ui';

Vue.component(Cell.name, Cell);
Vue.component(Button.name, Button);
```

Equals to
```javascript
var Vue = require('vue');
var Cell = require('xdc-ui/lib/cell');
require('xdc-ui/lib/cell/style.css');

var Button = require('xdc-ui/lib/button');
require('xdc-ui/lib/button/style.css');

Vue.component(Cell.name, Cell);
Vue.component(Button.name, Button);
```

## Install `babel-plugin-component`
```shell
npm i babel-plugin-component -D
```

Configure .babelrc like this
```json
{
  "plugins": ["other-plugin", ["component", [
    { "libraryName": "xdc-ui", "style": true }
  ]]]
}
```
