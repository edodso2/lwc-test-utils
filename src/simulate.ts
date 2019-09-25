/**
 * A class containing helper functions for actions that a user would normally perform
 * such as typing into an input field or clicking keyboard keys.
 */

export class Simulate {

  /**
   * Simulate a user changing the value
   * of a checkbox
   * @param checkboxEl the checkbox element
   * @param value the updated value
   * 
   * @example
   * ```
   *  // simulate checkbox getting checked
   *  Simulate.checkboxChange(checkboxEl, true);
   * ```
   */
  static checkboxChange(checkboxEl: HTMLInputElement, value: boolean): void {
    // update the inputs value
    checkboxEl.checked = value;

    // fire change event
    const changeEvent = new CustomEvent('change');
    checkboxEl.dispatchEvent(changeEvent);
  }


  /**
   * Dispatches an event from an element.
   * @param element the element to dispatch the event from
   * @param eventName the name of the event
   * @param payload the payload of the event
   * 
   * @example
   * ```
   *  // simulate a custom event
   *  Simulate.event(menuEl, 'select', { detail: { value: 'clip' } });
   * ```
   */
  static event(element: Window | Document | HTMLElement, eventName: string, payload?: CustomEventInit<any>): void {
    const customEvent = new CustomEvent(eventName, payload);
    element.dispatchEvent(customEvent);
  }


  /**
   * Simulate a user changing the value
   * of an input element
   * @param inputEl the input element
   * @param value the updated value
   * 
   * @example
   * ```
   *  // simulate input changing to hello world
   *  Simulate.inputChange(inputEl, 'hello world');
   * ```
   */
  static inputChange(inputEl: HTMLInputElement, value: string): void {
    // update the inputs value
    inputEl.value = value;

    // fire change event
    const changeEvent = new CustomEvent('change');
    inputEl.dispatchEvent(changeEvent);
  }


  /**
   * Simulate a user pressing a key on the
   * supplied element
   * @deprecated since version 0.0.4 Use keyEvent instead. Will be removed in version 1.0.
   * @param element the element to click
   * @param key the key to simulate a click. Full
   * list of key values can be found here:
   * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
   */
  static keyUp(element: Window | Document | HTMLElement, key: string): void {
    const keyboardEvent = new KeyboardEvent('keyup', {
      key
    });
    element.dispatchEvent(keyboardEvent);
  }

  /**
   * Simulate a keyboard event
   * @param element the element to trigger the event
   * @param event the name of the mouse event (Ex: keyup)
   * @param payload the payload of the event
   * 
   * @example
   * ```
   *  // simulate enter key press
   *  Simulate.keyboardEvent(inputEl, 'keyup', { key: 'Enter' });
   * ```
   */
  static keyboardEvent(element: Window | Document | HTMLElement, event: string, payload: KeyboardEventInit): void {
    const mouseEvent = new KeyboardEvent(event, payload);
    element.dispatchEvent(mouseEvent);
  }

  /**
   * Simulate a mouse event
   * @param element the element to click
   * @param event the name of the mouse event (Ex: mousemove)
   * @param payload the payload of the event
   * 
   * @example
   * ```
   *  // simulate mouse move event
   *  Simulate.mouseEvent(document, 'mousemove', { clientX: 150 });
   * ```
   */
  static mouseEvent(element: Window | Document | HTMLElement, event: string, payload: MouseEventInit): void {
    const mouseEvent = new MouseEvent(event, payload);
    element.dispatchEvent(mouseEvent);
  }

}