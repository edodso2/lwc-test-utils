import { TestUtils } from '../src/index';

function simulateAsyncDomUpdate() {
  const doc = document;

  process.nextTick(() => {
    doc.body.style.display = 'flex';
  });
}

describe('TestUtils', () => {

  it('waits for async dom updates', async () => {
    simulateAsyncDomUpdate()

    await TestUtils.flushPromises();

    expect(document.body.style.display).toBe('flex');
  });

});