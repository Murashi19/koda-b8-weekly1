/* eslint-disable no-console */

export function showOrderSuccess(
    nama,
    quantity,
    subtotal,
    totalPrice
) {
    console.log('\nPesanan berhasil ditambahkan!');
    console.log(`Menu     : ${nama}`);
    console.log(`Jumlah   : ${quantity}`);
    console.log(`Subtotal : Rp ${subtotal.toLocaleString('id-ID')}`);
    console.log(`Total    : Rp ${totalPrice.toLocaleString('id-ID')}`);
}