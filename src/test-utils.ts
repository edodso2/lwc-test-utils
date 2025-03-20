/**
 * A class for generic test utility methods
 */
export class TestUtils {
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
  static flushPromises(): Promise<any> {
    return new Promise((resolve) => setTimeout(resolve, 0));
  }
}
