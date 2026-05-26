import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { handlePayment } from '../src/app/paymentApp.js';

describe('handlePayment', () => {
    const originalLog = console.log;
    beforeEach(() => { console.log = () => { } });
    afterEach(() => { console.log = originalLog });
    it('should complete payment', async () => {
        const cart = {
            orderList: [{
                nama: "Ayam Dada",
                harga: 18000,
                jumlah: 1,
                subtotal: 18000
            }],
            totalPrice: 18000
        };

        const input = async () => '20000';
        const result = await handlePayment(cart, input);
        assert.strictEqual(result, undefined);
    });
});