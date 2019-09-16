/**
 * --------------------------------------------------------------------------
 * Simulate
 * --------------------------------------------------------------------------
 * 
 * Contains helper functions for actions that a user would normally perform
 * such as typing into an input field or clicking keyboard keys.
 * 
 */

export default class Simulate {
  /**
   * Simulate a user changing the value
   * of an input element
   * @param {HTMLInputElement} inputEl the input element
   * @param {string} value the updated value
   */
  inputChange(inputEl, value) {
    // update the inputs value
    inputEl.value = value;

    // fire change event
    const changeEvent = new CustomEvent('change');
    inputEl.dispatchEvent(changeEvent);
  }


  /**
   * Simulate a user pressing a key on the
   * supplied element
   * @param {HTMLElement} element the element to click
   * @param {string} key the key to simulate a click. full
   * list of key values can be found here:
   * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
   */
  keyUp(element, key) {
    const keyboardEvent = new KeyboardEvent('keyup', {
      key
    });
    element.dispatchEvent(keyboardEvent);
  }
}