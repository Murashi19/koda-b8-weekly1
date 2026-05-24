/* eslint-disable no-console */
import { input } from "./inputData.js";
import { main } from "../../index.js";
import { showReceipt } from "./pembayaran.js";

export async function handleRepeatOrder(cart) {

    while (true) {
        try {
            const userInput = await input("\nApakah ingin pesan lagi? (y/t): ");
            const userAnswer = userInput.toLowerCase();

            // Pesan lagi
            if (userAnswer === "y" || userAnswer === "ya") {
                return main();
            }
            // Checkout
            if (userAnswer === "t" || userAnswer === "tidak") {
                return showReceipt(cart);
            }
            throw new Error("\nJawaban tidak valid!");
        } catch (error) {
            console.error("Terjadi kesalahan saat memilih opsi: ", error.message);
        }
    }


}
export default handleRepeatOrder;