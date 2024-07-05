
/**
 * usePrice
 * @param price costo de la pelicula
 * @param amount cantidad de peliculas
 * @returns {{getPrice: (function(): number)}}
 */
export const usePrice = (price, amount, daysDifference ) => {
    /**
     * getPrice
     * obtiene el precio a pagar
     * @returns precio de la dactura.
     */
    const getPrice = () => {
        let total = price * amount;
        if (daysDifference > 0) {
            total = total * daysDifference;
        }
        return total.toFixed(2);;
    };
    
    return {getPrice}
}