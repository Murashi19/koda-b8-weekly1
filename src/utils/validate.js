/* eslint-disable eqeqeq */
import { kategori } from '../config/dataMenu.js';

// Validasi Input Menu
export function validateInputMenu(inputMenu) {
    // Validasi jika input bukan angka
    if (isNaN(inputMenu)) {
        throw new Error('Input harus berupa angka!');
    }
    // Validasi jika input kosong
    if (inputMenu === 0) {
        throw new Error('Input tidak boleh kosong!');
    }
    // Validasi jika input tidak valid / lebih dari jumlah kategori
    if (inputMenu < 0 || inputMenu > kategori.length) {
        throw new Error('Menu tidak tersedia!');
    }
}

export function validateReceipt(value) {
    if (!value || value.length === 0) {
        throw new Error('Belum ada pesanan.');
    }
}

export function validatePayment(inputPayment) {
    if (inputPayment == 0) {
        throw new Error('\nInput pembayaran tidak boleh kosong!');
    }
    if (isNaN(inputPayment) || inputPayment.trim() === '') {
        throw new Error('\nInput harus berupa angka yang valid!');
    }
    if (inputPayment < 0) {
        throw new Error('\nJumlah pembayaran tidak boleh minus/negatif!');
    }
}

export function validateInputOrder(inputOrder) {
    if (inputOrder == 0) {
        throw new Error('Input id makanan tidak boleh kosong!');
    }
    if (isNaN(inputOrder) || inputOrder.trim() === '') {
        throw new Error('Input harus berupa angka!');
    }
    if (inputOrder < 0) {
        throw new Error('ID makanan tidak valid!');
    }
}

export function validateInputQty(inputQty) {
    if (inputQty == 0) {
        throw new Error('Input jumlah tidak boleh kosong!');
    }
    if (isNaN(inputQty) || inputQty.trim() === '') {
        throw new Error('Input harus berupa angka!');
    }
    if (inputQty < 0) {
        throw new Error('Jumlah tidak boleh minus!');
    }
    if (inputQty > 100) {
        throw new Error('Jumlah terlalu banyak!');
    }
};