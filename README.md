# LWC Test Utils

A collection of test utilities for unit testing LWC components with Jest.

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
TestUtils.simulate.inputChange(lightningInputEl, NEW_VALUE);
```

### Getting Started

```
npm install -D @tigerface/lwc-test-utils
```

___

Contributions are welcome.
