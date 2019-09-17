class TestUtils {

  /**
   * Return a promise to wait for any asynchronous DOM updates. Jest
   * will automatically wait for the Promise chain to complete before
   * ending the test and fail the test if the promise rejects.
   */
  static flushPromises() {
    return new Promise(resolve => setImmediate(resolve));
  }

}