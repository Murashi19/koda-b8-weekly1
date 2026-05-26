/* eslint-disable no-console */
import { input } from '../utils/inputData.js';

export async function handleRepeatOrder() {
    while (true) {
        try {
            // Tanya user apakah ingin pesan lagi atau checkout
            const userInput = await input('\nApakah ingin pesan lagi? (y/t): ');

            const userAnswer = userInput.toLowerCase();

            // PESAN LAGI
            if (userAnswer === 'y' || userAnswer === 'ya') {
                return 'repeat';
            }

            // CHECKOUT
            if (userAnswer === 't' || userAnswer === 'tidak') {
                return 'checkout';
            }

            // VALIDASI
            throw new Error('Jawaban tidak valid!');
        }
        catch (error) {
            console.error('Terjadi kesalahan saat memilih opsi:', error.message);

        }

    }

}

export default handleRepeatOrder;