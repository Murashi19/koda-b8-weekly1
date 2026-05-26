/* eslint-disable quotes */
/* eslint-disable no-console */

import { closeInput } from "../utils/inputData.js";

export function showReceipt(cart) {
    console.log('\n=================================');
    console.log('         STRUK PEMBELIAN');
    console.log('=================================');

    cart.orderList.forEach(
        ({ nama, harga, jumlah, subtotal }, index) => {
            console.log(`${index + 1}. ${nama}`);
            console.log(`   Harga    : Rp ${harga.toLocaleString('id-ID')}`);
            console.log(`   Jumlah   : ${jumlah}`);
            console.log(`   Subtotal : Rp ${subtotal.toLocaleString('id-ID')}`);
        }
    );

    console.log('=================================');
    console.log(`TOTAL BAYAR : Rp ${cart.totalPrice.toLocaleString('id-ID')}`);
    console.log('=================================');
}

export function showPaymentSuccess(changeAmount) {
    if (changeAmount > 0) {
        console.log(`\nKembalian: Rp ${changeAmount.toLocaleString('id-ID')}`);
    }
    closeInput('\nTerima kasih sudah belanja di Lazatto!');

}

export function showPaymentFailed() {
    console.log('\nUang Anda kurang!, silakan masukkan jumlah yang cukup.');
}