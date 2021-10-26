import styles from "./styles.css" assert { type: "css" }
document.adoptedStyleSheets = [styles]

import {
  attachToShadowDom,
  mapAttributes,
  setAttributes,
} from "../componentUtils.js"
import { CUSTOM_ELEMENT_NAMES } from "../../const/elementRegistry/elementNames.js"
/**
 * A select element for weight units.
 * @param {string[]} unitlist
 * @param {@callback|undefined} onchange
 */
class UnitDropdown extends HTMLElement {
  constructor() {
    super()
    /**
     * @type {string[] | undefined}
     * A list of validated attributes.
     */
    let attributes = mapAttributes.call(this)
    if (attributes) {
      setAttributes.call(this, attributes)
    }

    let template = document.querySelector(
      "#" + CUSTOM_ELEMENT_NAMES.bakersUnitDropdown
    )

    if (template instanceof Element) {
      attachToShadowDom.call(this, template, styles)
    } else {
      console.warn(
        "The template " +
          CUSTOM_ELEMENT_NAMES.bakersUnitDropdown +
          " was not found"
      )
    }
  }
}

export { UnitDropdown }
