import styles from "./styles.css" assert { type: "css" }
document.adoptedStyleSheets = [...document.adoptedStyleSheets, styles]

import {
  attachToShadowDom,
  mapAttributes,
  setAttributes,
} from "../componentUtils.js"

/**
 * A custom input with optional label.
 * @param {string|undefined} input - My textual content.
 * @param {string|undefined} label - An optional label above me.
 * @param {@callback|undefined} onChange - Callback whenever my input changes.
 * @param {@callback|undefined} onBlur - Callback whenever I lose focus.
 * @param {string|number|"1"} rows - How many rows of lines should I have.
 * @param {boolean} disabled - Should i be disabled.
 *
 */
class Textfield extends HTMLElement {
  constructor() {
    super()

    let attributes = mapAttributes.call(this)
    setAttributes.call(this, attributes)

    var textarea = this.createTextarea(attributes)
    var label = this.createLabel(attributes)
    var wrapper = document.createElement("div")

    if (label) {
      wrapper.appendChild(label)
    }
    wrapper.appendChild(textarea)

    // Push to shadow DOM.
    attachToShadowDom.call(this, wrapper, styles)
  }

  createTextarea(attributes) {
    var textarea = document.createElement("input")

    // Set attributes
    Object.keys(attributes).forEach((attribute) => {
      console.log(attributes[attribute])
      textarea.setAttribute(attribute, attributes[attribute])
    })

    // Set inner text
    if (this.childNodes.length > 0) {
      if (this.childNodes.item(0)) {
        textarea.innerText = this.childNodes.item(0).textContent
      }
    }

    return textarea
  }

  createLabel(attributes) {
    if (!this.hasAttribute("label")) {
      console.log("no label")
      return undefined
    }
    var labelElement = document.createElement("label")
    labelElement.setAttribute("for", attributes.id)
    labelElement.innerHTML = attributes.label
    return labelElement
  }
}
export { Textfield }
