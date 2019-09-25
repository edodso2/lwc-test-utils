# LWC Test Utils

A collection of test utilities for unit testing LWC components with Jest. 

Docs: https://edodso2.github.io/lwc-test-utils/

Turn repetitive code like this:
```JavaScript
// update the inputs value
inputEl.value = value;

// fire change event
const changeEvent = new CustomEvent('change');
inputEl.dispatchEvent(changeEvent);
```

Into clean declarative code like this:
```JavaScript
Simulate.inputChange(lightningInputEl, NEW_VALUE);
```

### Getting Started

Install the package:
```
npm install -D @tigerface/lwc-test-utils
```

Import the Simulate class:
```JavaScript
import { Simulate } from '@tigerface/lwc-test-utils';
```

Simulate!
```JavaScript
Simulate.inputChange(lightningInputEl, NEW_VALUE);
```

___

Contributions are welcome.
