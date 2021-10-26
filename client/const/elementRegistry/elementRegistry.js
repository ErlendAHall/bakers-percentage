import { CUSTOM_ELEMENT_NAMES } from "./elementNames.js"
import { getAcceptedAttributes } from "./attributes.js"
/**
 * @typedef ElementRegistry
 * @property {ElementRegister|undefined} bakersOutput
 * @property {ElementRegister|undefined} bakersInput
 * @property {ElementRegister|undefined} bakersUnitDropdown
 */

/**
 * @typedef ElementRegister
 * @property {string} elementName
 * @property {string[]} acceptedAttributes
 */

/**@type ElementRegistry */
const ELEMENT_REGISTRY = {}

ELEMENT_REGISTRY.bakersOutput = {
  elementName: CUSTOM_ELEMENT_NAMES.bakersOutput,
  acceptedAttributes: getAcceptedAttributes(CUSTOM_ELEMENT_NAMES.bakersOutput),
}

ELEMENT_REGISTRY.bakersInput = {
  elementName: CUSTOM_ELEMENT_NAMES.bakersInput,
  acceptedAttributes: getAcceptedAttributes(CUSTOM_ELEMENT_NAMES.bakersInput),
}

ELEMENT_REGISTRY.bakersUnitDropdown = {
  elementName: CUSTOM_ELEMENT_NAMES.bakersUnitDropdown,
  acceptedAttributes: getAcceptedAttributes(
    CUSTOM_ELEMENT_NAMES.bakersUnitDropdown
  ),
}

ELEMENT_REGISTRY.Object.freeze(ELEMENT_REGISTRY)
export { ELEMENT_REGISTRY }
