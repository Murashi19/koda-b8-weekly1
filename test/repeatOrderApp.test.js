import { describe, it, mock, afterEach } from 'node:test';
import assert from 'node:assert/strict';

const mockInput = mock.fn();
// mock.module('../src/utils/inputData.js',
//     { namedExports: { input: mockInput } }
// );
// const handleRepeatOrder = await import('../src/app/repeatOrderApp.js');

describe('handleRepeatOrder', () => {
    it('should return repeat when user input "y" or "ya"', async (t) => {
        t.mock.module('../src/utils/inputData.js', {
            nameExports: {
                input: mockInput('ya')
            }
        });
        const handleRepeatOrder = await import('../src/app/repeatOrderApp.js');
        const result = await handleRepeatOrder();
        assert.strictEqual(result, 'repeat');
    });
})
