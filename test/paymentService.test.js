import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { isPaymentEnough, calculateChange } from '../src/services/paymentService.js';

describe('isPaymentEnough', () => {
    it('should return true if payment amount is enough', () => {
        const totalPrice = 10000;
        const paymentAmount = 20000;
        const result = isPaymentEnough(totalPrice, paymentAmount);
        assert.strictEqual(result, true);
    });
    it('should return false if payment amount is not enough', () => {
        const totalPrice = 10000;
        const paymentAmount = 5000;
        const result = isPaymentEnough(totalPrice, paymentAmount);
        assert.strictEqual(result, false);
    });
});

describe('calculateChange', () => {
    it('should return change amount', () => {
        const totalPrice = 10000;
        const paymentAmount = 20000;
        const result = calculateChange(totalPrice, paymentAmount);
        assert.strictEqual(result, 10000);
    });
    it('should return 0 if payment amount is enough', () => {
        const totalPrice = 10000;
        const paymentAmount = 10000;
        const result = calculateChange(totalPrice, paymentAmount);
        assert.strictEqual(result, 0);
    });
    it('should return negative change amount if payment amount is not enough', () => {
        const totalPrice = 10000;
        const paymentAmount = 5000;
        const result = calculateChange(totalPrice, paymentAmount);
        assert.strictEqual(result, -5000);
    });
});