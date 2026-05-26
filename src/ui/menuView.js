/* eslint-disable no-console */


// MENU UTAMA
export function showMainMenu(kategori) {
    console.log('\n=================================');

    console.log(
        '        MENU RESTO LAZATTO'
    );

    console.log('=================================');

    kategori.forEach(
        ({ id, nama }) => {
            console.log(
                `${id}. ${nama}`
            );
        }
    );

    console.log('=================================');
}


// MENU KATEGORI
export function showCategoryMenu(categoryName, menuList) {
    if (!menuList) {
        throw new Error(
            `Kategori "${categoryName}" tidak ditemukan!`
        );
    }

    console.log(
        `\n===== KATEGORI: ${categoryName} =====`
    );

    menuList.forEach(
        ({ id, nama, harga }) => {
            console.log(
                `${id}. ${nama} - Rp.${harga.toLocaleString('id-ID')}`
            );
        }
    );
}