# Minimal Page Structure TODO

## Sidebar
- [ ] Ensure sidebar is a distinct component (left side, fixed width)
- [ ] Add placeholder for document list (even if empty for now)
- [ ] Add icon or button for creating a new document (can be non-functional for now)
- [ ] Style sidebar to match theme (background, border, etc.)
- [ ] Integrate sidebar into main layout (App.vue)
- [ ] Make sidebar collapsible
- [ ] Ensure sidebar is responsive on small screens

## Header/Toolbar
- [x] Create a header/toolbar at the top of the main area
- [x] Add app title or logo
- [x] Add placeholder for user status or settings (right side of header)
- [ ] (Optional) Add basic toolbar buttons (e.g., Save, New, etc. — can be non-functional)

## Canvas (Main Writing Area)
- [x] Add a large, central area for writing (the canvas)
- [x] Use a simple textarea or contenteditable div as a placeholder
- [x] Ensure the canvas expands to fill available space

## Layout & Responsiveness
- [ ] Use CSS flexbox or grid to arrange sidebar, header, and canvas
- [ ] Make sure layout is responsive (sidebar collapses or overlays on small screens)
- [x] Set a minimal, distraction-free color scheme

## Basic Navigation/State
- [ ] Set up basic state management for toggling sidebar (show/hide)
- [ ] (Optional) Add keyboard shortcut to toggle sidebar

## PrimeVue Custom Theme
- [x] Create a new theme file (typewriter-theme.css) in src/assets
- [x] Define CSS variables for the color palette
- [x] Override PrimeVue component styles using the variables
- [x] Import the theme file in main.ts
- [x] Remove old button overrides from main.css
- [x] Test and refine theme across the app 