export function calculateChange(totalPrice, paymentAmount) {
    return paymentAmount - totalPrice;
}

export function isPaymentEnough(totalPrice, paymentAmount) {
    return paymentAmount >= totalPrice;
}