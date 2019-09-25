"use strict";
/**
 * A class containing helper functions for actions that a user would normally perform
 * such as typing into an input field or clicking keyboard keys.
 */
exports.__esModule = true;
var Simulate = /** @class */ (function () {
    function Simulate() {
    }
    /**
     * Simulate a user changing the value
     * of a checkbox
     * @param {HTMLInputElement} checkboxEl the checkbox element
     * @param {boolean} value the updated value
     */
    Simulate.checkboxChange = function (checkboxEl, value) {
        // update the inputs value
        checkboxEl.checked = value;
        // fire change event
        var changeEvent = new CustomEvent('change');
        checkboxEl.dispatchEvent(changeEvent);
    };
    /**
     * Dispatches an event from an element.
     * @param {Window | Document | HTMLElement} element the element to dispatch the event from
     * @param {string} eventName the name of the event
     * @param {CustomEventInit<any>} [payload] the payload of the event
     */
    Simulate.event = function (element, eventName, payload) {
        var customEvent = new CustomEvent(eventName, payload);
        element.dispatchEvent(customEvent);
    };
    /**
     * Simulate a user changing the value
     * of an input element
     * @param {HTMLInputElement} inputEl the input element
     * @param {string} value the updated value
     */
    Simulate.inputChange = function (inputEl, value) {
        // update the inputs value
        inputEl.value = value;
        // fire change event
        var changeEvent = new CustomEvent('change');
        inputEl.dispatchEvent(changeEvent);
    };
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
    Simulate.keyUp = function (element, key) {
        var keyboardEvent = new KeyboardEvent('keyup', {
            key: key
        });
        element.dispatchEvent(keyboardEvent);
    };
    /**
     * Simulate a mouse event
     * @param {Window | Document | HTMLElement} element the element to click
     * @param {string} event the name of the mouse event (Ex: mousemove)
     * @param {MouseEventInit} payload the payload of the event
     */
    Simulate.mouseEvent = function (element, event, payload) {
        var mouseEvent = new MouseEvent(event, payload);
        element.dispatchEvent(mouseEvent);
    };
    return Simulate;
}());
exports.Simulate = Simulate;
