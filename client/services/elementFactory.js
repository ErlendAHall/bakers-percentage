/**
 * Accepts an element name and an object which will be
 * registered as a custom element.
 * @param {string} elementName
 * @param {object} prototype
 */
function register(elementName, prototype) {
  if (applyPrototypes.call(HTMLElement, prototype)) {
    try {
      globalThis.customElements.define(elementName, prototype)
    } catch (error) {
      throw new Error(error)
    }
  } else {
    console.warn(elementName + " could not be created")
  }

  /**
   * Very uglily mimic class instantiation.
   * @param {object} target
   * @returns {boolean} whether the "prototypal instanciation" is complete
   */
  function applyPrototypes(target) {
    return (
      Reflect.setPrototypeOf(target.prototype, this.prototype) &&
      Reflect.setPrototypeOf(target, this)
    )
  }
}

export { register }
