export function getSelectedCategory(dataMenu, kategori, selectedMenu) {
    const menuIndex = selectedMenu - 1;
    return {
        menuList: dataMenu[menuIndex],
        categoryName: kategori[menuIndex]?.nama,
    };
}