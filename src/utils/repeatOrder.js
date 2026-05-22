/* eslint-disable no-console */
import { input } from "./inputData.js";
import { main } from "../../index.js";
import { showReceipt } from "./pembayaran.js";

export async function handleRepeatOrder(orderList, totalPrice) {

    const userInput = await input("\nApakah ingin pesan lagi? (y/t): ");
    const userAnswer = userInput.toLowerCase();

    // Pesan lagi
    if (userAnswer === "y" || userAnswer === "ya") {
        return main();
    }
    // Checkout
    if (userAnswer === "t" || userAnswer === "tidak") {
        return showReceipt(orderList, totalPrice);
    }
    console.log("\nJawaban tidak valid!");
    return handleRepeatOrder(orderList, totalPrice);

}
export default handleRepeatOrder;