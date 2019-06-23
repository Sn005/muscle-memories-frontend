type MockResultType = {
  name: string
  email: string
  photUrl: string
  emailVerified: boolean
  uid: string
}
const mockResult: MockResultType = {
  name: 'mockName',
  email: 'mockMail@mock.com',
  photUrl: 'https://placehold.jp/150x150.png',
  emailVerified: true,
  uid: 'mock999'
}

/**
 * 認証関係のMockクラス
 *
 * @export
 * @class MockAuthService
 */
export default class MockAuthService {
  /**
   * ログインしているユーザ自身の情報を取得するメソッド
   * @returns Promise<MockResultType>
   * @memberof MockAuthService
   */
  public async fetchMyAccount() {
    return mockResult
  }
  /**
   *
   * 各SNSアカウントを使用したログインメソッド
   * @param {('google' | 'twitter' | 'facebook')} sns 使用するsns名
   * @returns Promise<MockResultType>
   * @memberof MockAuthService
   */
  public async signInBySns(sns: 'google' | 'twitter' | 'facebook') {
    return mockResult
  }
  /**
   *
   * e-mailアカウントによるログインメソッド
   * @param {{ email: string; password: string }} payload emailログインに必要な情報
   * @returns Promise<firebase.User> signInWithEmailAndPassword実行結果
   * @memberof MockAuthService
   */
  public async signInByEmail(payload: { email: string; password: string }) {
    return mockResult
  }
  /**
   *
   * サインアウトメソッド
   * @returns {Promise<void>}
   * @memberof MockAuthService
   */
  public async signOut() {
    return true
  }
}
