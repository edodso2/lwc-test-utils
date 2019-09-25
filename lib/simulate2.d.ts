/**
 * A class containing helper functions for actions that a user would normally perform
 * such as typing into an input field or clicking keyboard keys.
 */
export declare class Simulate {
    /**
     * Simulate a user changing the value
     * of a checkbox
     * @param {HTMLInputElement} checkboxEl the checkbox element
     * @param {boolean} value the updated value
     */
    static checkboxChange(checkboxEl: any, value: any): void;
    /**
     * Dispatches an event from an element.
     * @param {Window | Document | HTMLElement} element the element to dispatch the event from
     * @param {string} eventName the name of the event
     * @param {CustomEventInit<any>} [payload] the payload of the event
     */
    static event(element: any, eventName: any, payload: any): void;
    /**
     * Simulate a user changing the value
     * of an input element
     * @param {HTMLInputElement} inputEl the input element
     * @param {string} value the updated value
     */
    static inputChange(inputEl: any, value: any): void;
    /**
     * Simulate a user pressing a key on the
     * supplied element
     * @param {Window | Document | HTMLElement} element the element to click
     * @param {string} key the key to simulate a click. Full
     * list of key values can be found here:
     * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
     *
     * @example
     * ```JavaScript
     *  // simulate enter key press
     *  Simulate.keyup(inputEl, 'Enter');
     * ```
     */
    static keyUp(element: any, key: any): void;
    /**
     * Simulate a mouse event
     * @param {Window | Document | HTMLElement} element the element to click
     * @param {string} event the name of the mouse event (Ex: mousemove)
     * @param {MouseEventInit} payload the payload of the event
     */
    static mouseEvent(element: any, event: any, payload: any): void;
}
//# sourceMappingURL=simulate2.d.ts.map