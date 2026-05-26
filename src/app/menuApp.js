/* eslint-disable no-console */
import { validateInputOrder, validateInputQty } from '../utils/validate.js';
import { findMenuById, addItemToCart } from '../services/orderService.js';
import { showCategoryMenu } from '../ui/menuView.js';
import { showOrderSuccess } from '../ui/orderView.js';

export async function handleFoodOrder(menuList, categoryName, cart, input) {
    while (true) {
        try {
            // Validasi menu
            if (!menuList || !categoryName) {
                throw new Error('Kategori tidak ditemukan!');
            }

            // Tampil Menu Kategori
            showCategoryMenu(categoryName, menuList);
            // INPUT MENU
            const menuIdInput = await input('\nPilih makanan (Nomor): ');

            validateInputOrder(menuIdInput);
            const selectedMenuId = Number(menuIdInput);

            // Cari menu berdasarkan ID yang dipilih
            const selectedMenu = findMenuById(menuList, selectedMenuId);

            if (!selectedMenu) {
                console.log('Menu tidak tersedia!');
                continue;
            }
            // Input jumlah beli
            const quantityInput = await input('Jumlah beli: ');
            validateInputQty(quantityInput);
            const quantity = Number(quantityInput);

            // Tambah item kedalam cart
            const subtotal = addItemToCart(cart, selectedMenu, quantity);

            // Tampilkan detail pesanan yang baru ditambahkan
            showOrderSuccess(selectedMenu.nama, quantity, subtotal, cart.totalPrice);
            return;
        }
        catch (error) {
            console.error('Terjadi kesalahan saat memproses pesanan:', error.message);
        }
    }
}