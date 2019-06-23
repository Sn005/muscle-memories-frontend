import firebase from '@/config/firebase'
const storage = firebase.storage()

type DataType = {
  path: string
  file: object
}
export default class FirebaseFileService {
  /**
   * Fileデータを送信するメソッド
   *
   * @param {DataType[]} datas 送信対象のデータ
   * @returns {Promise<boolean>} 送信結果
   * @memberof FirebaseFileService
   */
  public async send(datas: DataType[]) {
    for (let data of datas) {
      const ref = storage.ref(data.path)
      const file = data.file
      const result = await ref.put(file).catch(error => {
        console.log(error)
        return false
      })
      if (!result) return false
    }
    return true
  }
  /**
   *
   * Fileデータを取得するメソッド
   * @param {DataType[]} datas 取得対象のFileデータ
   * @returns {Promise<false | resultsType[]>} 取得結果
   * @memberof FirebaseFileService
   */
  public async fetchs(datas: DataType[]) {
    type resultsType = {
      path: string
      url: string
    }
    let results: resultsType[] = []
    for (let data of datas) {
      const ref = storage.ref(data.path)
      const url = await ref.getDownloadURL().catch(error => {
        console.log(error)
        return false
      })
      if (!url) return false
      const item = {
        path: data.path,
        url: url
      }
      results = [...results, item]
    }
    return results
  }
  /**
   * 引数で受け取ったパスのfileを削除するメソッド
   *
   * @param {string} path Fileのパス
   * @returns {Promise<boolean>} 削除結果
   * @memberof FirebaseFileService
   */
  public async delete(path: string) {
    await storage
      .ref(path)
      .delete()
      .catch(error => {
        console.log(error)
        return false
      })
    return true
  }
}
