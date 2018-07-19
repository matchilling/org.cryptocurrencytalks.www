module.exports = {
  slugify: text => {
    if (!text) return ''

    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text
  },
  truncate: (text, words) => {
    if (!text) return ''

    return text
      .split(' ')
      .splice(0, words)
      .join(' ')
  },
}
