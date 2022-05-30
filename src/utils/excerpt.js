export const excerpt = (html) => {
  const tempDivElement = document.createElement('div')

  // Set the HTML content with the given value
  tempDivElement.innerHTML = html

  // Retrieve the text property of the element
  const text = tempDivElement.textContent || tempDivElement.innerText || ''
  return text.substring(0, 150)
}
