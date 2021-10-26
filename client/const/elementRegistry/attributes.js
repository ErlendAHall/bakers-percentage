const ACCEPTED_TEXTFIELD_ATTRIBUTES = [
  "class",
  "cols",
  "disabled",
  "id",
  "input",
  "label",
  "onChange",
  "onBlur",
  "rows",
  "type",
]
Reflect.preventExtensions(ACCEPTED_TEXTFIELD_ATTRIBUTES)

const ACCEPTED_SELECT_ATTRIBUTES = [
  "autocomplete",
  "autofocus",
  "disabled",
  "form",
  "multiple",
  "name",
  "required",
  "size",
  "unitlist",
  "onchange",
]
Reflect.preventExtensions(ACCEPTED_SELECT_ATTRIBUTES)

const ACCEPTED_BAKERS_OUTPUT_ATTRIBUTES = ["for", "form", "name"]

/**
 * Accepts a target string and returns a readonly list of accepted attributes for a WebComponent.
 * @param {"textfield"|"select"} target
 * @returns {string[]|undefined} A list of accepted attributes
 */
function getAcceptedAttributes(target) {
  switch (target) {
    case "textfield":
      return ACCEPTED_TEXTFIELD_ATTRIBUTES
    case "select":
      return ACCEPTED_SELECT_ATTRIBUTES
    case "bakers-output":
      return ACCEPTED_BAKERS_OUTPUT_ATTRIBUTES
    default:
      return undefined
  }
}

export { getAcceptedAttributes }
