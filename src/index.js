const toString = Object.prototype.toString
const hasOwnProperty = Object.hasOwnProperty

/**
 * A simple JavaScript utility function for React to easily manage CSS classes via the className attribute.
 *
 * @function fromClass
 *
 * @param {string|Array|Object} [classes] - A CSS class name, or an array, or object of class names.
 *
 * @returns {string|null} - A string containing the processed class or classes.
 *                          Otherwise null, if all and every class/classes are falsy.
 */
export default function fromClass (...classes) {
  // skip, when called empty
  if (classes.length > 0) {
    const classList = []

    classes.forEach(entry => {
      // handle strings
      if (typeof entry === 'string') {
        classList.push(entry)

      // handle arrays
      } else if (toString.call(entry) === '[object Array]' && entry.length > 0) {
        entry.forEach(v => {
          if (typeof v === 'string') {
            classList.push(v)
          }
        })

      // handle plain objects
      } else if (entry && typeof entry === 'object') {
        for (const key in entry) {
          if (hasOwnProperty.call(entry, key) && entry[key]) {
            classList.push(key)
          }
        }
      }
    })

    if (classList.length === 0) {
      return null
    }

    const trimmedList = classList.join(' ').trim()

    return trimmedList.length > 0
      ? trimmedList
      : null
  }

  return null
}
