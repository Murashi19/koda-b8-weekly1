/* eslint-disable eqeqeq */
import { kategori } from '../config/dataMenu.js';

// HELPER
function validateNumberInput(value, fieldName) {
    // Validasi undefined atau null
    if (value == 0) {
        throw new Error(`${fieldName} tidak boleh kosong!`);
    }
    // ubah ke string dan trim untuk validasi kosong
    const trimmedValue = String(value).trim();
    // Validasi angka
    if (Number.isNaN(Number(trimmedValue))) {
        throw new Error(
            `${fieldName} harus berupa angka!`
        );
    }
    const numberValue = Number(trimmedValue);

    // Validasi negatif
    if (numberValue < 0) {
        throw new Error(
            `${fieldName} tidak boleh negatif!`
        );
    }

    return numberValue;
}


// VALIDASI MENU
export function validateInputMenu(inputMenu) {
    const value = validateNumberInput((inputMenu), 'Input menu');

    if (value < 0 || value > kategori.length) {
        throw new Error('Menu tidak tersedia!');
    }
}

// VALIDASI ORDER
export function validateInputOrder(inputOrder) {
    validateNumberInput(inputOrder, 'Input id makanan');
}

// VALIDASI JUMLAH
export function validateInputQty(inputQty) {
    const value = validateNumberInput(inputQty, 'Input jumlah');

    if (value > 100) {
        throw new Error('Jumlah terlalu banyak!');
    }
}


// VALIDASI PEMBAYARAN
export function validatePayment(inputPayment) {
    validateNumberInput(inputPayment, 'Input pembayaran');
}

// VALIDASI STRUK
export function validateReceipt(orderList) {
    if (!orderList || orderList.length === 0) {
        throw new Error('Belum ada pesanan.');
    }
}