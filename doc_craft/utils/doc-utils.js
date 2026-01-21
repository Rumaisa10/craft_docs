export function getallAuthors(docs, author) {
  const decodedAuthor = decodeURIComponent(author);
  return docs.filter((doc) => doc.author === decodedAuthor);
}

export function getallTags(docs, tag) {
  return docs.filter((doc) => doc.tags.some((inputTag) => inputTag === tag));
}
export function getallCategories(docs, category) {
  return docs.filter((doc) => doc.category === category);
}
