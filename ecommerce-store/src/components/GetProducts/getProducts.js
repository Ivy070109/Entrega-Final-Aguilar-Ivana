import productosData from '../async-mocks/async-mocks.json'

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(productosData)
        }, 500)
    })
}

export default getProducts

 