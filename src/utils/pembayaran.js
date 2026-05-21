import { input, closeInput } from "./inputData.js";

export function showReceipt(orderList, totalPrice) {

    console.log("\n=================================");
    console.log("         STRUK PEMBELIAN");
    console.log("=================================");

    // Validasi jika keranjang kosong
    if (!orderList || orderList.length === 0) {
        throw new Error("Belum ada pesanan.");
    }

    orderList.forEach(({ nama, harga, jumlah, subtotal }, index) => {
        console.log(`${index + 1}. ${nama}`);
        console.log(`   Harga    : Rp ${harga.toLocaleString("id-ID")}`);
        console.log(`   Jumlah   : ${jumlah}`);
        console.log(`   Subtotal : Rp ${subtotal.toLocaleString("id-ID")}`);
    });

    console.log("=================================");
    console.log(`TOTAL BAYAR : Rp ${totalPrice.toLocaleString("id-ID")}`);
    console.log("=================================");
    console.log("\nSilahkan lakukan pembayaran!");
    return payment(totalPrice);

}

export async function payment(totalPrice) {
    console.log(`\nTotal yang harus dibayar: Rp ${totalPrice.toLocaleString("id-ID")}`);
    const paymentInput = await input(
        "Masukkan jumlah bayar: Rp "
    );
    const paymentAmount = Number(paymentInput);
    // Validasi input
    if (isNaN(paymentAmount) || paymentInput.trim() === "") {
        console.log("\nInput harus berupa angka yang valid!");
        return payment(totalPrice);
    }
    // Uang pas
    if (paymentAmount === totalPrice) {
        closeInput("\nUang pas. Terima kasih sudah belanja di Lazatto!");
        return;
    }
    // Uang lebih
    if (paymentAmount > totalPrice) {
        const changeAmount = paymentAmount - totalPrice;
        console.log(`\nKembalian: Rp ${changeAmount.toLocaleString("id-ID")}`);
        closeInput("Terima kasih sudah belanja di Lazatto!");
        return;
    }
    // Uang kurang
    const remainingPayment = totalPrice - paymentAmount;
    console.log(`\nUang Anda kurang Rp ${remainingPayment.toLocaleString("id-ID")}!`);
    return payment(remainingPayment);
}