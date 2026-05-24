/* eslint-disable no-console */
import { input, closeInput } from './inputData.js';
import { validateReceipt } from './validate.js';
import { validatePayment } from './validate.js';

export async function showReceipt(cart) {

    console.log('\n=================================');
    console.log('         STRUK PEMBELIAN');
    console.log('=================================');

    // Validasi jika keranjang kosong
    validateReceipt(cart.orderList);

    cart.orderList.forEach(({ nama, harga, jumlah, subtotal }, index) => {
        console.log(`${index + 1}. ${nama}`);
        console.log(`   Harga    : Rp ${harga.toLocaleString('id-ID')}`);
        console.log(`   Jumlah   : ${jumlah}`);
        console.log(`   Subtotal : Rp ${subtotal.toLocaleString('id-ID')}`);
    });

    console.log('=================================');
    console.log(`TOTAL BAYAR : Rp ${cart.totalPrice.toLocaleString('id-ID')}`);
    console.log('=================================');
    console.log('\nSilahkan lakukan pembayaran!');
    await payment(cart.totalPrice);

}

export async function payment(totalPrice) {
    while (true) {
        try {
            console.log(`\nTotal yang harus dibayar: Rp ${totalPrice.toLocaleString('id-ID')}`);
            const paymentInput = await input(
                'Masukkan jumlah bayar: Rp '
            );
            const paymentAmount = Number(paymentInput);
            // Validasi input
            validatePayment(paymentInput);

            // Uang kurang
            if (paymentAmount < totalPrice) {
                console.log('\nUang Anda kurang!, silakan masukkan jumlah yang cukup.');
                continue;
            }
            // Uang lebih
            if (paymentAmount > totalPrice) {
                const changeAmount = paymentAmount - totalPrice;
                console.log(`\nKembalian: Rp ${changeAmount.toLocaleString('id-ID')}`);
            }

            closeInput('\nTerima kasih sudah belanja di Lazatto!');
            return;
        } catch (error) {
            console.error('Terjadi kesalahan saat memasukkan pembayaran: ', error.message);
        }
    }
}
