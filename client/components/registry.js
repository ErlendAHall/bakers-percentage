import { CUSTOM_ELEMENT_NAMES } from "../const/elementRegistry/elementNames.js"

import { register } from "../services/elementFactory.js"
import { Textfield } from "./input/textfield.js"
import { Calculation } from "./calculation/output.js"
import { UnitDropdown } from "./input/unit-dropdown/UnitDropdown.js"

register(CUSTOM_ELEMENT_NAMES.bakersInput, Textfield)
register(CUSTOM_ELEMENT_NAMES.bakersOutput, Calculation)
register(CUSTOM_ELEMENT_NAMES.bakersUnitDropdown, UnitDropdown)
