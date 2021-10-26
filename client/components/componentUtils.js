import {ELEMENT_REGISTRY} from "../const/elementRegistry/elementRegistry.js"
/**
 * Validates the "user" defined attributes and returns those that satisfy the developer defined attributes.
 * @this HTMLElement
 * @param {boolean}  
 * @returns {string[]} A list of validated attributes.
 */
function mapAttributes(elementName) {
  let attributes = {}
  this.getAttributeNames().forEach((attr) => {
    if (validate(attr)) {
      attributes[attr] = this.getAttribute(attr)
    } else {
      console.warn(attr + " is not a valid attribute for" + elementName)
    }
  })
  return attributes

  /**
   * Validates a single attribute.
   * @param {string} attribute
   * @returns {boolean} - Returns true if the element is amongst the accepted attributes.
   */
  function validate(attribute, elementName) {
    if (ELEMENT_REGISTRY[elementName]) {
      /**@type string[] */
      return ELEMENT_REGISTRY[elementName].some((accepted) => accepted == attribute)
    } else {
      console.warn(elementName + "is not a valid web component")
      return false
    }

  }
}

/**
 * Attaches a template and stylsheets to a HTMLElement.
 * @this Element
 * @param {Element} template
 * @param {string} styles
 * @returns
 */
function attachToShadowDom(template, styles) {
  var shadowRoot = this.attachShadow({ mode: "open" })
  this.shadowRoot.adoptedStyleSheets = [styles]
  shadowRoot.innerHTML = template.innerHTML
  return Boolean(this.shadowRoot)
}

/**
 * Accepts a list of validated attributes and appends them to the Element
 * @this {HTMLElement}
 * @param {object} attributes
 */
function setAttributes(attributes) {
  Object.keys(attributes).forEach((attribute) => {
    this.setAttribute(attribute, attributes[attribute])
  })
}

export { mapAttributes, attachToShadowDom, setAttributes }
