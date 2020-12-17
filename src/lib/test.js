import ky from 'ky-universal'

export function hoge() {
  return ky.get('https://cc-api-practice.herokuapp.com/api/v1/nwjbhdunck').json()
}

export function fuga() {
  return Promise.resolve('fuga')
}
