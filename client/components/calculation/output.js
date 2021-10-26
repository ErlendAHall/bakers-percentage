import styles from "./styles.css" assert { type: "css" }
document.adoptedStyleSheets = [...document.adoptedStyleSheets, styles]

import {
  mapAttributes,
  attachToShadowDom,
  setAttributes,
} from "../componentUtils.js"
import { CUSTOM_ELEMENT_NAMES } from "../../const/elementRegistry/elementNames.js"

class Calculation extends HTMLOutputElement {
  constructor() {
    super()
    let template = this.createTemplate()

    let attributes = mapAttributes.call(this)
    console.log("%c⧭", "color: #00bf00", attributes)
    setAttributes.call(this, attributes)
    attachToShadowDom.call(this, template, styles)
  }

  /**
   * @returns {Element}
   */
  createTemplate() {
    let template = document.querySelector(
      "#" + CUSTOM_ELEMENT_NAMES.bakersOutput
    )
    let hydrationArea = template.content.querySelector("strong")
    hydrationArea.innerText = "50%"

    return template
  }
}

export { Calculation }
