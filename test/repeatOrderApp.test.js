import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { handleRepeatOrder } from '../src/app/repeatOrderApp.js';

describe('handleRepeatOrder', () => {
    it('should return repeat', async () => {
        const fakeInput = async () => 'y';
        const result = await handleRepeatOrder(fakeInput);
        assert.strictEqual(result, 'repeat');
    });
    it('should return checkout', async () => {
        const fakeInput = async () => 't';
        const result = await handleRepeatOrder(fakeInput);
        assert.strictEqual(result, 'checkout');
    });
    it('should retry when invalid input', async () => {
        let callCount = 1;
        const fakeInput = async () => {
            callCount++;
            if (callCount === 1) {
                return 'abc';
            }
            return 'y';
        };

        const result = await handleRepeatOrder(fakeInput);
        assert.strictEqual(result, 'repeat');
        assert.strictEqual(callCount, 2);
    });
}
);