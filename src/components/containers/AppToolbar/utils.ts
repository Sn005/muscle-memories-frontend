export const generateFormattedTitle = (rawTitle: string): string => {
  const index = rawTitle.indexOf('|')
  const clippedTitle = index > 0 ? rawTitle.substring(0, index) : rawTitle
  return clippedTitle.trim()
}
