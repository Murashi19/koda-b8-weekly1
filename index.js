
import fs from 'node:fs/promises';
import daftarMenu from './src/config/dataMenu.js';
import pesanMenu from './src/utils/pesanMenu.js';
import rl from "./src/utils/readline.js";

export const kategori = [
    { id: 1, nama: "Fried Chicken" },
    { id: 2, nama: "Geprek" },
    { id: 3, nama: "Sadazz" },
    { id: 4, nama: "Ayam CLBK" },
    { id: 5, nama: "Paket Chicken" },
    { id: 6, nama: "Paket Geprek" },
    { id: 7, nama: "Side Dish" },
    { id: 8, nama: "Minuman" }
];

// // Function Tampilkan Menu
export function tampilkanMenu() {

    console.log("\n=================================");
    console.log("        MENU RESTO LAZATTO");
    console.log("=================================");

    kategori.forEach(({ id, nama }) => {
        console.log(`${id}. ${nama}`);
    });

    console.log("=================================");

    rl.question("\nPilih kategori menu (id): ", function (pilih) {
        const pilihMenu = Number(pilih)
        if (typeof pilihMenu !== "number") {
            console.log("Input harus berupa angka!");
            return tampilkanMenu();
        }
        if (pilihMenu < 1 || pilihMenu > 8) {
            console.log("Menu tidak tersedia!");
            return tampilkanMenu();
        };
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

        switch (pilihMenu) {

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
                tampilkanMenu();
                break;
        }
    });
}

// // Jalankan Program
tampilkanMenu();
