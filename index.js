/* eslint-disable no-console */
import { daftarMenu, kategori } from './src/config/dataMenu.js';
import { input } from './src/utils/inputData.js';
import { validateInputMenu } from './src/utils/validate.js';
import { getSelectedCategory } from './src/services/menuService.js';
import { showMainMenu } from './src/ui/menuView.js';
import { handleFoodOrder } from './src/app/menuApp.js';
import { handleRepeatOrder } from './src/app/repeatOrderApp.js';
import { handlePayment } from './src/app/paymentApp.js';

// Ambil semua daftar menu otomatis
const dataMenu = Object.values(daftarMenu);

// State cart aplikasi
const cart = {
    orderList: [],
    totalPrice: 0
};

export async function main() {
    while (true) {
        try {
            // Tampil Menu Utama
            showMainMenu(kategori);
            // Input pilihan menu
            const userInput = await input('Silahkan pilih menu (Nomor): ');
            const selectedMenu = Number(userInput);
            // Validasi input menu
            validateInputMenu(selectedMenu);

            // Dapatkan daftar menu dan nama kategori berdasarkan pilihan user
            const { menuList, categoryName } = getSelectedCategory(dataMenu, kategori, selectedMenu);

            // Proses pemesanan makanan
            await handleFoodOrder(menuList, categoryName, cart, input);

            // Tanya user apakah ingin pesan lagi atau checkout
            const action = await handleRepeatOrder(input);

            // Checkout
            if (action === 'checkout') {
                await handlePayment(cart, input);
                break;
            }

            // Pesan lagi
            if (action === 'repeat') {
                continue;
            }
        }
        catch (error) {
            console.error('Terjadi kesalahan:', error.message);
        }
    }
}

main();