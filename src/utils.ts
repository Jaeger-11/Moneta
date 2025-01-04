export const currencyFormat = (price: number | undefined) => {
    return new Intl.NumberFormat('en-US').format(typeof(price) === 'number' ? price : 0)
}