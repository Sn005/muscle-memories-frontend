export interface State {
  user: {
    uid: string
    name: string
    profilePicUrl?: string
  } | null
}
export default (): State => ({
  user: null
})
