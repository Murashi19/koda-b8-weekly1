/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import handleRepeatOrder from './repeatOrder.js';
import { input } from "./inputData.js";
import { validateInputOrder, validateInputQty } from "./validate.js";

function findMenuById(menuList, menuId) {
    if (!menuList) {
        return null;
    }
    return menuList.find((menu) => menu.id === menuId) || null;
}

export async function handleFoodOrder(menuList, categoryName, cart) {
    while (true) {
        try {
            const { orderList, totalPrice } = cart;
            // Validasi jika data menu kosong
            if (!menuList) {
                throw new Error(`Kategori "${categoryName}" tidak ditemukan!`);
            }
            console.log(`\n===== KATEGORI: ${categoryName.toUpperCase()} =====`);

            menuList.forEach(({ id, nama, harga }) => {
                console.log(`${id}. ${nama} - Rp.${harga.toLocaleString("id-ID")}`);
            });

            // Input id menu
            const menuIdInput = await input("\nPilih makanan (Nomor): ");
            console.log(menuIdInput);
            const selectedMenuId = Number(menuIdInput);
            // Validasi input id menu
            validateInputOrder(menuIdInput);

            const selectedMenu = findMenuById(menuList, selectedMenuId);
            // Validasi jika menu tidak tersedia
            if (!selectedMenu) {
                console.log("Menu tidak tersedia!");
                continue;
            }

            // Input jumlah beli
            const quantityInput = await input("Jumlah beli: ");
            console.log(quantityInput);
            const quantity = Number(quantityInput);
            // Validasi jumlah
            validateInputQty(quantityInput);

            const { nama, harga } = selectedMenu;
            const subTotal = harga * quantity;
            cart.totalPrice += subTotal;

            const existingOrder = cart.orderList.find(
                (item) => item.nama === nama
            );
            // Tambahkan pesanan baru
            if (!existingOrder) {
                cart.orderList.push({
                    nama,
                    harga,
                    jumlah: quantity,
                    subtotal: subTotal
                });
            } else {
                existingOrder.jumlah += quantity;
                existingOrder.subtotal += subTotal;
            }

            console.log("\nPesanan berhasil ditambahkan!");
            console.log(`Menu     : ${nama}`);
            console.log(`Jumlah   : ${quantity}`);
            console.log(`Subtotal : Rp ${subTotal.toLocaleString("id-ID")}`);
            console.log(`Total    : Rp ${cart.totalPrice.toLocaleString("id-ID")}`);

            await handleRepeatOrder(cart);
            return;
        } catch (error) {
            console.error("Terjadi kesalahan saat memproses pesanan: ", error.message);
        }
    }
}