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
   * firebaseでの認証結果が返ってくるメソッド
   * @returns Promise<{}>
   * @memberof FirebaseAuthService
   */
  public isAuth() {
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
   * @returns Promise<firebase.auth.UserCredential> signInWithPopup実行結果
   * @memberof FirebaseAuthService
   */
  public async signInBySns(sns: 'google' | 'twitter' | 'facebook') {
    const providers = {
      google: new firebase.auth.GoogleAuthProvider(),
      twitter: new firebase.auth.TwitterAuthProvider(),
      facebook: new firebase.auth.FacebookAuthProvider()
    }
    const result = await auth.signInWithPopup(providers[sns])
    return result
  }
  /**
   *
   * e-mailアカウントによるログインメソッド
   * @param {string} email メールアドレス
   * @param {string} password パスワード
   * @returns Promise<firebase.auth.UserCredential> signInWithEmailAndPassword実行結果
   * @memberof FirebaseAuthService
   */
  public async signInByEmail(email: string, password: string) {
    const result = await auth.signInWithEmailAndPassword(email, password)
    return result
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
