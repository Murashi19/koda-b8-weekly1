import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { validateInputMenu, validateInputOrder, validateInputQty } from '../src/utils/validate.js';

describe('validateInputMenu', () => {
    it('should throw error if input is empty', () => {
        assert.throws(() => validateInputMenu(''), 'Input tidak boleh kosong!');
    });
    it('should throw error if input is string', () => {
        assert.throws(() => validateInputMenu('satu'), 'Input harus berupa angka!')
    });
    it('should throw error if input is negative', () => {
        assert.throws(() => validateInputMenu(-1), 'Input tidak boleh negatif!');
    });
    it('should throw error if input is out of range', () => {
        const kategori = ['Makanan', 'Minuman'];
        const outOfRange = kategori.length + 5;
        assert.throws(() => validateInputMenu(12, 'Input menu'), { message: "Menu tidak tersedia!" });
    });
});
describe('validateInputOrder', () => {
    it('should throw error if input is empty', () => {
        assert.throws(() => validateInputOrder(''), 'Input tidak boleh kosong!');
    });
    it('should throw error if input is string', () => {
        assert.throws(() => validateInputOrder('dua', 'Input harus berupa angka!'));
    });
});