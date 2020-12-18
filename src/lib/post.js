import ky from 'ky-universal'


export default class Post {
  /**
   * @return
   */
  async post_test() {
    let res
    try {
      const success = await ky.post('https://cc-api-practice.herokuapp.com/api/v1/nwjbhdunck')
      res = { res: success, error: false }
    } catch(err) {
      res = { res: {}, error: err }
    }
    return res
  }
}