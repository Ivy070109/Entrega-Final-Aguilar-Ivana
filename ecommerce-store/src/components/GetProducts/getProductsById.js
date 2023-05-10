import productosData from '../async-mocks/async-mocks.json'

const getProductsById = (id) => {
    return new Promise((resolve, reject) => {
        const item = productosData.find((el) => el.id === id)

        if (item) {
            resolve(item)
        } else {
            reject({
                error: "No se encontró el producto"
            })
        }
    })
}

export default getProductsById