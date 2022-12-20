import data from './../data.json'
export const apiHandler = () => {
    return new Promise((resolve, reject) => {
       resolve(data)
    })    
}