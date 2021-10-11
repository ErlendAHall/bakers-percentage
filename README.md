# Bakers Percentage

Bakers Percentage (BP) is a web application for creating and storing bread recipes using bakers percentage and hydrations. The app is a modern PWA that uses IndexedDB to store your bread recipes. The inspiration is to create a complete bakers assistant, much like you will find in beer brewing.

## Features

- Calculate hydration based on dries and fluids. (MVP)
- Initial design. (MVP)
- Baking instructions.
- Recipe images.
- Recipe scaler.
- Recipe unit conversions.
- Print recipes.
- Recipe library, categorized.
- Recipe export.
- Leavening/old dough/sourdough mode

## Architecture

BP is created entirely outside the NPM ecosystem with WebComponents for evergreen browsers. The footprint is therefore absolutely minimized. The clientside will handle calculations and rendering.
