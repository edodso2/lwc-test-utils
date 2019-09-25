"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A class for generic test utility methods
 */
class TestUtils {
    /**
     * Return a promise to wait for any asynchronous DOM updates. Jest
     * will automatically wait for the Promise chain to complete before
     * ending the test and fail the test if the promise rejects.
     *
     * @example
     * ```
     *  await TestUtils.flushPromises();
     * ```
     */
    static flushPromises() {
        return new Promise(resolve => setImmediate(resolve));
    }
}
exports.TestUtils = TestUtils;
