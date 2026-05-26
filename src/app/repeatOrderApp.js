/* eslint-disable no-console */
export async function handleRepeatOrder(input) {
    while (true) {
        try {
            const userInput = await input('\nApakah ingin pesan lagi? (y/t): ');
            const userAnswer = userInput.toLowerCase();
            if (userAnswer === 'y' || userAnswer === 'ya') {
                return 'repeat';
            }

            if (userAnswer === 't' || userAnswer === 'tidak') {
                return 'checkout';
            }
            throw new Error('Jawaban tidak valid!');
        }
        catch (error) {
            console.error('Terjadi kesalahan saat memilih opsi:', error.message);
        }
    }
}