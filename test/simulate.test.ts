import { Simulate } from '../src/index';

function createCheckboxEl() {
  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  document.body.appendChild(checkboxEl);

  return checkboxEl;
}

function createInputEl() {
  const inputEl = document.createElement('input');
  inputEl.type = 'text';
  document.body.appendChild(inputEl);

  return inputEl;
}

describe('Simulate', () => {
  const listener = jest.fn();

  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }

    jest.clearAllMocks();
  });

  it('should simulate checkbox value change', () => {
    const checkboxEl = createCheckboxEl();
    checkboxEl.addEventListener('change', listener);

    Simulate.checkboxChange(checkboxEl, true);

    expect(listener).toHaveBeenCalled();
    expect(listener.mock.calls[0][0].target.checked).toBeTruthy();
    expect(checkboxEl.checked).toBeTruthy();
  });

  it('should simulate event', () => {
    document.addEventListener('select', listener);

    Simulate.event(document, 'select', { detail: 'test' });

    expect(listener).toHaveBeenCalled();
  });

  it('should simulate input value change', () => {
    const VALUE = 'test value';
    const inputEl = createInputEl();
    inputEl.addEventListener('change', listener);

    Simulate.inputChange(inputEl, VALUE);

    expect(listener).toHaveBeenCalled();
    expect(listener.mock.calls[0][0].target.value).toBe(VALUE);
    expect(inputEl.value).toBe(VALUE);
  });

  it('should simulate keyUp', () => {
    const inputEl = createInputEl();
    inputEl.addEventListener('keyup', listener);

    Simulate.keyUp(inputEl, 'Enter');

    expect(listener).toHaveBeenCalled();
    expect(listener.mock.calls[0][0].key).toBe('Enter');
  });

  it('should simulate keyboard event', () => {
    const inputEl = createInputEl();
    inputEl.addEventListener('keyup', listener);

    Simulate.keyboardEvent(inputEl, 'keyup', { key: 'Enter' });

    expect(listener).toHaveBeenCalled();
    expect(listener.mock.calls[0][0].key).toBe('Enter');
  });

  it('should simulate mouse move event', () => {
    document.addEventListener('mousemove', listener);

    Simulate.mouseEvent(document, 'mousemove', { clientX: 150 });

    expect(listener).toHaveBeenCalled();
    expect(listener.mock.calls[0][0].clientX).toBe(150);
  });

});