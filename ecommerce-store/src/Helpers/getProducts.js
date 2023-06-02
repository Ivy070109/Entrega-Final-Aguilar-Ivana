import datosProductos from "../async-mocks/async-mocks.json";

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(datosProductos);
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve, reject) => {

        const item = datosProductos.find((el) => el.id === id)

        if (item) {
            resolve(item)
        } else {
            reject({
                error: "No se encontró el producto"
            })
        }
    })
}