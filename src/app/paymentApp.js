/* eslint-disable no-console */
import { input } from '../utils/inputData.js';
import { validateReceipt, validatePayment } from '../utils/validate.js';
import { calculateChange, isPaymentEnough } from '../services/paymentService.js';
import { showReceipt, showPaymentSuccess, showPaymentFailed } from '../ui/paymentView.js';

export async function handlePayment(cart) {

    // Validasi keranjang sebelum pembayaran
    validateReceipt(cart.orderList);

    // Tampilkan struk pembelian
    showReceipt(cart);
    while (true) {
        try {
            console.log('\nSilahkan lakukan pembayaran!');
            console.log(`\nTotal yang harus dibayar: Rp ${cart.totalPrice.toLocaleString('id-ID')}`);

            // input jumlah pembayaran
            const paymentInput = await input('Masukkan jumlah bayar: Rp ');
            // Validasi input pembayaran
            validatePayment(paymentInput);
            const paymentAmount = Number(paymentInput);


            // Cek apakah pembayaran cukup
            const enoughPayment = isPaymentEnough(cart.totalPrice, paymentAmount);

            if (!enoughPayment) {
                showPaymentFailed();
                continue;
            }

            // hitung kembalian
            const changeAmount = calculateChange(cart.totalPrice, paymentAmount);

            // Tampilkan hasil pembayaran
            showPaymentSuccess(changeAmount);
            return;
        }
        catch (error) {
            console.error(
                'Terjadi kesalahan saat pembayaran:',
                error.message
            );
        }
    }
}