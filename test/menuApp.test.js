import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { handleFoodOrder } from '../src/app/menuApp.js';



describe('handleFoodOrder', () => {
    const originalLog = console.log;
    beforeEach(() => { console.log = () => { } });
    afterEach(() => { console.log = originalLog });
    it('should add item into cart', async () => {
        const menuList = [
            { id: 1, nama: 'Ayam Dada', harga: 18000 },
            { id: 2, nama: 'Ayam Paha Atas', harga: 18000 },
            { id: 3, nama: 'Ayam Paha Bawah', harga: 14000 },
            { id: 4, nama: 'Ayam Sayap', harga: 23000 }
        ];
        const categoryName = "Fried Chicken";
        const cart = { orderList: [], totalPrice: 0 };
        let callCount = 0;
        const fakeInput = async () => {
            callCount++;
            // menu
            if (callCount === 1) {
                return '1';
            }
            // jumlah beli
            return '2';
        };
        const result = await handleFoodOrder(menuList, categoryName, cart, fakeInput);
        assert.strictEqual(cart.totalPrice, 36000);
        assert.strictEqual(cart.orderList.length, 1);

        assert.deepStrictEqual(
            cart.orderList[0],
            {
                nama: 'Ayam Dada',
                harga: 18000,
                jumlah: 2,
                subtotal: 36000
            }
        );
    });
});