/**
 * A class for generic test utility methods
 */
export declare class TestUtils {
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
    static flushPromises(): Promise<any>;
}
//# sourceMappingURL=test-utils.d.ts.map