/* eslint-disable no-console */
import { daftarMenu, kategori } from './src/config/dataMenu.js';
import { handleFoodOrder } from './src/utils/pesanMenu.js';
import { input } from './src/utils/inputData.js';
import { validateInputMenu } from './src/utils/validate.js';

// Function Menampilkan Menu
export async function main() {
    try {
        console.clear();
        console.log("\n=================================");
        console.log("        MENU RESTO LAZATTO");
        console.log("=================================");

        kategori.forEach(({ id, nama }) => {
            console.log(`${id}. ${nama}`);
        });

        console.log("=================================");
        const userInput = await input("Silahkan pilih menu: ");
        const selectedMenu = Number(userInput);
        const {
            friedChicken,
            geprek,
            sadazz,
            ayamCLBK,
            paketChicken,
            paketGeprek,
            sideDish,
            minuman
        } = daftarMenu;
        switch (selectedMenu) {
            case 1:
                handleFoodOrder(friedChicken, kategori[0].nama);
                break;
            case 2:
                handleFoodOrder(geprek, kategori[1].nama);
                break;
            case 3:
                handleFoodOrder(sadazz, kategori[2].nama);
                break;
            case 4:
                handleFoodOrder(ayamCLBK, kategori[3].nama);
                break;
            case 5:
                handleFoodOrder(paketChicken, kategori[4].nama);
                break;
            case 6:
                handleFoodOrder(paketGeprek, kategori[5].nama);
                break;
            case 7:
                handleFoodOrder(sideDish, kategori[6].nama);
                break;
            case 8:
                handleFoodOrder(minuman, kategori[7].nama);
                break;
            default:
                validateInputMenu(selectedMenu);
        }
    }
    catch (error) {
        console.log("Terjadi kesalahan saat memilih menu: ", error);
    }
}

// Jalankan Program
main();

export default main;