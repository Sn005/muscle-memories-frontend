import firebase from '@/config/firebase'
const auth = firebase.auth()

/**
 * Firebaseの認証関係処理を行うクラス
 *
 * @export
 * @class FirebaseAuthService
 */
export default class FirebaseAuthService {
  /**
   * ログインしているユーザ自身の情報を取得するメソッド
   * @returns Promise<{}>
   * @memberof FirebaseAuthService
   */
  public fetchMyAccount() {
    return new Promise((resolve, reject) => {
      auth.onAuthStateChanged(user => {
        if (user) resolve(user)
        reject(new Error(`ユーザー認証に失敗しました`))
      })
    })
  }
  /**
   *
   * 各SNSアカウントを使用したログインメソッド
   * @param {('google' | 'twitter' | 'facebook')} sns 使用するsns名
   * @returns Promise<firebase.User> signInWithPopup実行結果
   * @memberof FirebaseAuthService
   */
  public async signInBySns(sns: 'google' | 'twitter' | 'facebook') {
    const providers = {
      google: new firebase.auth.GoogleAuthProvider(),
      twitter: new firebase.auth.TwitterAuthProvider(),
      facebook: new firebase.auth.FacebookAuthProvider()
    }
    const result = await auth.signInWithPopup(providers[sns])
    return result.user
  }
  /**
   *
   * e-mailアカウントによるログインメソッド
   * @param {{ email: string; password: string }} payload emailログインに必要な情報
   * @returns Promise<firebase.User> signInWithEmailAndPassword実行結果
   * @memberof FirebaseAuthService
   */
  public async signInByEmail(payload: { email: string; password: string }) {
    const { email, password } = payload
    const result = await auth.signInWithEmailAndPassword(email, password)
    return result.user
  }
  /**
   *
   * サインアウトメソッド
   * @returns {Promise<void>}
   * @memberof FirebaseAuthService
   */
  public async signOut() {
    const result = await auth.signOut()
    return result
  }
}
