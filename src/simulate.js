/**
 * --------------------------------------------------------------------------
 * Simulate
 * --------------------------------------------------------------------------
 * 
 * Contains helper functions for actions that a user would normally perform
 * such as typing into an input field or clicking keyboard keys.
 * 
 */

export class Simulate {

  /**
   * Simulate a user changing the value
   * of a checkbox
   * @param {HTMLInputElement} checkboxEl the checkbox element
   * @param {boolean} value the updated value
   */
  static checkboxChange(checkboxEl, value) {
    // update the inputs value
    checkboxEl.checked = value;

    // fire change event
    const changeEvent = new CustomEvent('change');
    checkboxEl.dispatchEvent(changeEvent);
  }


  /**
   * Dispatches an event from an element.
   * @param {HTMLElement} element the element to dispatch the event from
   * @param {string} eventName the name of the event
   * @param {CustomEventInit<any>} [payload] the payload of the event
   */
  static event(element, eventName, payload) {
    const customEvent = new CustomEvent(eventName, payload);
    element.dispatchEvent(customEvent);
  }


  /**
   * Simulate a user changing the value
   * of an input element
   * @param {HTMLInputElement} inputEl the input element
   * @param {string} value the updated value
   */
  static inputChange(inputEl, value) {
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
  static keyUp(element, key) {
    const keyboardEvent = new KeyboardEvent('keyup', {
      key
    });
    element.dispatchEvent(keyboardEvent);
  }
}