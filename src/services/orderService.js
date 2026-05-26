export function findMenuById(menuList, menuId) {
    if (!menuList) {
        return null;
    }

    return menuList.find(
        (menu) => menu.id === menuId
    ) || null;
}

export function addItemToCart(cart, selectedMenu, quantity) {
    const { nama, harga } = selectedMenu;
    const subtotal = harga * quantity;
    const existingOrder = cart.orderList.find((item) => item.nama === nama);

    if (!existingOrder) {
        cart.orderList.push({
            nama,
            harga,
            jumlah: quantity,
            subtotal
        });
    }
    else {
        existingOrder.jumlah += quantity;
        existingOrder.subtotal += subtotal;
    }

    cart.totalPrice += subtotal;

    return subtotal;
}