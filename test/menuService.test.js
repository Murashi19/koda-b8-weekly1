import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { getSelectedCategory } from '../src/services/menuService.js';

describe('getSelectedCategory', () => {
    it('should return selected category', () => {
        const dataMenu = [
            [
                { id: 1, nama: 'Ayam Dada', harga: 18000 },
                { id: 2, nama: 'Ayam Paha Atas', harga: 18000 },
                { id: 3, nama: 'Ayam Paha Bawah', harga: 14000 },
                { id: 4, nama: 'Ayam Sayap', harga: 23000 }
            ],
            [
                { id: 1, nama: 'Air Mineral', harga: 8000 },
                { id: 2, nama: 'S-Tee', harga: 7000 },
                { id: 3, nama: 'Teh Botol Kotak Sosro', harga: 7500 }
            ]
        ];
        const kategori = [
            { id: 1, nama: 'Fried Chicken' },
            { id: 2, nama: 'Minuman' }
        ];
        const result = getSelectedCategory(dataMenu, kategori, 2);
        assert.deepStrictEqual(result, {
            menuList: [
                { id: 1, nama: 'Air Mineral', harga: 8000 },
                { id: 2, nama: 'S-Tee', harga: 7000 },
                { id: 3, nama: 'Teh Botol Kotak Sosro', harga: 7500 }
            ],
            categoryName: 'Minuman'
        });
    });
}
);