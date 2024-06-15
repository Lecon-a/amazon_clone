export const totalCostOfItemSelected = (basket) => {
    return basket?.reduce((amount, item) => (item.price * item.quantity) + amount, 0);
}

export const totalItemSelected = (basket) => {
    return basket?.reduce((amount, item) => item.quantity + amount, 0);
}


