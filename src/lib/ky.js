import ky from 'ky-universal'

export default class Feacher {
  feach() {
    return ky.get('https://cc-api-practice.herokuapp.com/api/v1/nwjbhdunck').json()
  }

  sample (param) {
    return new Promise((resolve, reject) => {
      if (param) {
        resolve('success')
      } else {
        reject(new Error('failed'))
      }
    })
  }
}