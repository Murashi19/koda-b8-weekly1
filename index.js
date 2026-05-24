/* eslint-disable no-console */
import { daftarMenu, kategori } from './src/config/dataMenu.js';
import { handleFoodOrder } from './src/utils/pesanMenu.js';
import { input } from './src/utils/inputData.js';
import { validateInputMenu } from './src/utils/validate.js';

const dataMenu = [
    daftarMenu.friedChicken,
    daftarMenu.geprek,
    daftarMenu.sadazz,
    daftarMenu.ayamCLBK,
    daftarMenu.paketChicken,
    daftarMenu.paketGeprek,
    daftarMenu.sideDish,
    daftarMenu.minuman,
];
const cart = {
    orderList: [],
    totalPrice: 0
};

// Function Menampilkan Menu
export async function main() {
    while (true) {
        try {
            console.log('\n=================================');
            console.log('        MENU RESTO LAZATTO');
            console.log('=================================');

            kategori.forEach(({ id, nama }) => {
                console.log(`${id}. ${nama}`);
            });

            console.log('=================================');
            // User Input Menu
            const userInput = await input('Silahkan pilih menu (Nomor): ');
            const selectedMenu = Number(userInput);

            // Validasi input
            validateInputMenu(selectedMenu);

            // Menghitung index menu yang dipilih (id - 1)
            const menuIndex = selectedMenu - 1;
            // Mengambil daftar menu berdasarkan kategori yang dipilih
            const menuList = dataMenu[menuIndex];
            // Mengambil nama kategori untuk ditampilkan di pesanMenu
            const categoryName = kategori[menuIndex].nama;

            // Proses pemesanan makanan
            await handleFoodOrder(menuList, categoryName, cart);
            return;
        }
        catch (error) {
            console.error('Terjadi kesalahan saat memilih menu: ', error.message);

        }
    }

}

// Jalankan Program
main();

export default main;