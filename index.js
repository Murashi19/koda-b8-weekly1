import daftarMenu, { kategori } from './src/config/dataMenu.js';
import pesanMenu from './src/utils/pesanMenu.js';
import { input, closeInput } from './src/utils/readline.js';

// Function Menampilkan Menu
async function main() {

    console.log("\n=================================");
    console.log("        MENU RESTO LAZATTO");
    console.log("=================================");

    kategori.forEach(({ id, nama }) => {
        console.log(`${id}. ${nama}`);
    });

    console.log("=================================");

    const userInput = await input("Silahkan pilih menu: ");
    const selectedMenu = Number(userInput);

    // Validasi input angka
    if (isNaN(selectedMenu)) {
        console.log("\nInput harus berupa angka!");
        return main();
    }

    // Validasi menu tersedia
    if (selectedMenu < 1 || selectedMenu > kategori.length) {
        console.log("\nMenu tidak tersedia!");
        return main();
    }

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
            pesanMenu(friedChicken, kategori[0].nama);
            break;

        case 2:
            pesanMenu(geprek, kategori[1].nama);
            break;

        case 3:
            pesanMenu(sadazz, kategori[2].nama);
            break;

        case 4:
            pesanMenu(ayamCLBK, kategori[3].nama);
            break;

        case 5:
            pesanMenu(paketChicken, kategori[4].nama);
            break;

        case 6:
            pesanMenu(paketGeprek, kategori[5].nama);
            break;

        case 7:
            pesanMenu(sideDish, kategori[6].nama);
            break;

        case 8:
            pesanMenu(minuman, kategori[7].nama);
            break;

        default:
            console.log("\nMenu tidak tersedia!");
            return main();
    }

    closeInput();
}

// Jalankan Program
main();