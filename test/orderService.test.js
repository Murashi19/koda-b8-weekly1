import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { findMenuById, addItemToCart } from '../src/services/orderService.js';

describe('findMenuById', () => {
    it('should return menu by id', () => {
        const menuList = [
            { id: 1, nama: 'Ayam Dada', harga: 18000 },
            { id: 2, nama: 'Ayam Paha Atas', harga: 18000 },
            { id: 3, nama: 'Ayam Paha Bawah', harga: 14000 },
            { id: 4, nama: 'Ayam Sayap', harga: 23000 }
        ];
        const result = findMenuById(menuList, 2);
        assert.deepStrictEqual(result, { id: 2, nama: 'Ayam Paha Atas', harga: 18000 });
    });

    it('should return null if menu not found', () => {
        const menuList = [
            { id: 1, nama: 'Ayam Geprek Dada', harga: 22000 },
            { id: 2, nama: 'Ayam Geprek Paha Atas', harga: 22000 },
            { id: 3, nama: 'Ayam Geprek Paha Bawah', harga: 19500 },
            { id: 4, nama: 'Ayam Geprek Sayap', harga: 18000 }
        ];
        const result = findMenuById(menuList, 5);
        assert.strictEqual(result, null);
    });
});
describe('addItemToCart', () => {
    it('should add new item into cart', () => {
        const cart = { orderList: [], totalPrice: 0 };
        const selectedMenu = { nama: 'Ayam', harga: 10000 };
        const subtotal = addItemToCart(cart, selectedMenu, 2);
        assert.strictEqual(subtotal, 20000);
        assert.strictEqual(cart.totalPrice, 20000);
        assert.deepStrictEqual(cart.orderList[0], { nama: 'Ayam', harga: 10000, jumlah: 2, subtotal: 20000 });
    });

    it('should update existing item', () => {
        const cart = { orderList: [{ nama: 'Ayam', harga: 10000, jumlah: 1, subtotal: 10000 }], totalPrice: 10000 };
        const selectedMenu = { nama: 'Ayam', harga: 10000 };
        addItemToCart(cart, selectedMenu, 2);
        assert.strictEqual(cart.orderList[0].jumlah, 3);
        assert.strictEqual(cart.orderList[0].subtotal, 30000);
        assert.strictEqual(cart.totalPrice, 30000);
    });
});