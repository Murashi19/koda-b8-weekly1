/* eslint-disable no-console */
import { kategori } from "../config/dataMenu.js";
import { handleFoodOrder } from "./pesanMenu.js";
import { main } from "../../index.js";


export function validateInputMenu(inputMenu) {
    if (isNaN(inputMenu)) {
        console.log("Input harus berupa angka!");
        return setTimeout(main, 3000);
    }
    if (inputMenu === 0) {
        console.log("Input tidak boleh kosong!");
        return setTimeout(main, 3000);
    }
    if (inputMenu < 1 || inputMenu > kategori.length) {
        console.log("Menu tidak tersedia!");
        return setTimeout(main, 3000);
    }
}

export function validateInputOrder(inputOrder) {
    if (inputOrder === 0) {
        console.log("Input tidak boleh kosong!");
    }
    if (isNaN(inputOrder) || inputOrder.trim() === "") {
        console.log("Input harus berupa angka!");
        return handleFoodOrder();
    }
    if (inputOrder < 1) {
        console.log("Jumlah tidak valid!");
    }
}

export function validateInputQty(inputQty) {
    if (inputQty === null) {
        console.log("Input tidak boleh kosong!");
    }
    if (isNaN(inputQty) || inputQty.trim() === "") {
        console.log("Input harus berupa angka!");
        return handleFoodOrder();
    }
    if (inputQty < 1) {
        console.log("Jumlah tidak valid!");
        return handleFoodOrder();
    }
};