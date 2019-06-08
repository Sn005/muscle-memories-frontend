export default async function({ redirect, route, store }) {
  const isAuthed = true
  if (!isAuthed) {
    return redirect('/')
  }
}
