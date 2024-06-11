// https://tech-docs.corndel.com/js/string-formatting.html

/**
 * Outputs a string saying "Hello, my name is NAME!" with
 * the name in uppercase.
 *
 * e.g. ("Abdi") => "Hello, my name is ABDI!"
 *
 * @param {string} name - The name
 * @returns {string} The greeting string with uppercase name interpolated
 */
export function nameTag(name) {
  const nameUpper = name.toUpperCase()
  return `Hello, my name is ${nameUpper}!`
}

// const myname = 'Wayne'
// const greeting = nameTag(myname)
// console.log(greeting)
