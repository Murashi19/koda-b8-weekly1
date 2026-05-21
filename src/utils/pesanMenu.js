import handleRepeatOrder from './repeatOrder.js';
import { input } from "./inputData.js";

let orderList = [];
let totalPrice = 0;

function findMenuById(menuList, menuId) {
    if (!menuList) {
        return null;
    }
    return menuList.find((menu) => menu.id === menuId) || null;
}

export async function handleFoodOrder(menuList, categoryName) {
    // Validasi jika data menu kosong
    if (!menuList) {
        console.log(`Kategori "${categoryName}" tidak ditemukan!`);
        return;
    }
    console.log(`\n===== KATEGORI: ${categoryName.toUpperCase()} =====`);

    menuList.forEach(({ id, nama, harga }) => {
        console.log(`${id}. ${nama} - Rp.${harga.toLocaleString("id-ID")}`);
    });

    // Input id menu
    const menuIdInput = await input("\nPilih makanan (id): ");
    const selectedMenuId = Number(menuIdInput);
    // Validasi input id
    if (isNaN(selectedMenuId) || menuIdInput.trim() === "") {
        console.log("Input harus berupa angka!");
        return handleFoodOrder(menuList, categoryName);
    }

    const selectedMenu = findMenuById(menuList, selectedMenuId);
    // Validasi menu tersedia
    if (!selectedMenu) {
        console.log("Menu tidak tersedia!");
        return handleFoodOrder(menuList, categoryName);
    }

    // Input jumlah beli
    const quantityInput = await input("Jumlah beli: ");
    const quantity = Number(quantityInput);
    // Validasi jumlah
    if (isNaN(quantity) || quantityInput.trim() === "") {
        console.log("Input harus berupa angka!");
        return handleFoodOrder(menuList, categoryName);
    }
    if (quantity < 1) {
        console.log("Jumlah tidak valid!");
        return handleFoodOrder(menuList, categoryName);
    }

    const { nama, harga } = selectedMenu;
    const subTotal = harga * quantity;
    totalPrice += subTotal;

    const existingOrder = orderList.find(
        (item) => item.nama === nama
    );
    // Tambahkan pesanan baru
    if (!existingOrder) {
        orderList.push({
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
    console.log(`Total    : Rp ${totalPrice.toLocaleString("id-ID")}`);

    handleRepeatOrder(orderList, totalPrice);

}