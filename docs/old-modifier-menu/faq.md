# Old Modifier Menu — User FAQ

## General

### What does Old Modifier Menu do?

Old Modifier Menu puts every Blender modifier back in one clear, organized menu. The available categories and modifiers adapt to the selected object type, including meshes, curves, text, lattices, volumes, hair curves, and Grease Pencil objects.

### Which edition should I download?

- **Lite:** The streamlined modifier-menu experience.
- **Paid:** The complete edition, with Search, a pie menu, Favorites, custom modifier Stacks, Geometry Nodes assets, effectors, and modifier-management tools.

Install only one edition at a time; one edition replaces the other.

### Does the add-on need an internet connection?

No. The add-on uses local files and assets supplied by Blender or included with the add-on.

## Installation and updates

### How do I install the add-on?

1. Download the correct `.zip` file.
2. Do **not** extract the ZIP.
3. In Blender, open **Edit → Preferences → Get Extensions**.
4. Open the menu in the top-right corner and choose **Install from Disk**.
5. Select the downloaded ZIP and enable **Old Modifier Menu** if required.

### How should I update from an older version?

Disable and remove the old version, restart Blender, and then install the new ZIP. This is especially important when changing editions.

Favorites, Stacks, paths, and other add-on settings are Blender preferences rather than scene data. If you have an important setup, record it before removing an older installation.

## Using the menu

### Where can I place the menu?

The **Addon Location** preference lists the choices available in the installed edition. These can include:

- **Under Default Menu**
- **T Menu**
- **3D View Header**
- **Status Bar**

You can also adjust the menu size and choose whether Search, Extras, and the Effector button are shown.

### Why can’t I see the menu or some modifier choices?

Select an object that supports modifiers. The menu changes according to the active object type, so not every category is available for every object.

Cameras, lights, empties, armatures, and other unsupported object types do not display a modifier menu. If the interface is still missing, check the add-on’s **Menu Location** setting.

### What does the Search button search?

The Search button opens Blender’s standard **Add Modifier** menu. Its results are supplied by Blender and are appropriate for the active object.

The regular interface and pie-menu Search buttons open the same standard Blender modifier collection.

### How do I open the pie menu?

The default shortcut is **Ctrl + Right Mouse Button** in the 3D Viewport.

You can enable or disable the pie menu and edit its shortcut in the add-on preferences. If the shortcut does nothing, check for a conflict with another add-on or your Blender keymap.

### Why does a separate Properties window open after I add a modifier from the pie menu?

The **Open New Window After Adding Modifiers** option is enabled by default. Turn it off under the add-on’s **Pie Menu** preferences if you want modifiers to be added without opening that window.

## Favorites and Stacks

### How do I create a Favorite?

1. Enable **Favorites** in the add-on preferences.
2. Click **Add Favorite**.
3. Search for and select a modifier.
4. Use the arrow buttons to reorder Favorites or the trash button to remove one.

Selecting a Favorite in the menu adds that modifier to the active object.

### What is a modifier Stack?

A Stack is a reusable ordered list of modifiers. Clicking a Stack adds every modifier in that list to the active object in the saved order.

### How do I create a Stack?

1. Enable **Stacks** in the add-on preferences.
2. Enable one of the four available Stack slots.
3. Give the Stack a useful name.
4. Use the plus button to search for and add each modifier in the required order.

An empty Stack shows a warning and will not run.

## Geometry Nodes and effectors

### How do Custom Node Modifiers work?

Each Custom Node Modifier slot needs:

- A path to an existing `.blend` file.
- The exact name of a Geometry Nodes node group inside that file.

Enable **Custom Node Mods**, configure a slot, and enable that slot. Choosing it from the menu appends the node group and adds it to the active object as a Geometry Nodes modifier.

If a node group with the same name is already loaded, the existing group is reused.

### What are Effectors?

The Effector menu adds helper objects such as **Wire Cube**, **Wire Sphere**, or **Empty Axes**. A cube or sphere can be positioned and used as a Boolean object, while Empty Axes can provide a non-rendering reference or control object. Effectors can be placed at the 3D Cursor, the active object, or the world origin.

You can also configure a custom effector by selecting a `.blend` file and entering the exact object name stored inside it.

## Modifier-management tools

### What do the Extras buttons do?

- **Apply All:** Applies enabled modifiers. Disabled modifiers, and modifiers that cannot be applied, are removed.
- **Remove All:** Removes every modifier from the active object.
- **Enable/Disable All:** Toggles viewport visibility for all modifiers.
- **Expand/Collapse All:** Toggles the expanded state of every modifier panel.

**Apply All** and **Remove All** are destructive operations. Save your file first or be prepared to use Undo.

## Troubleshooting

### I receive “Select an object that supports modifiers.”

There is no compatible active object. Select a supported object in the 3D Viewport or Outliner and try again.

### I receive “This modifier stack is empty.”

Open the add-on preferences and add at least one modifier to that Stack, or disable the unused Stack slot.

### I receive an asset, node group, or object-not-found error.

Confirm that:

- The `.blend` path exists and is readable.
- The node-group or object name matches Blender’s datablock name exactly.
- The asset has not been renamed or removed from the source file.

### What information should I include in a bug report?

Please include:

- Your exact Blender version.
- Your Old Modifier Menu version and edition.
- Your operating system.
- The active object type.
- The steps needed to reproduce the problem.
- The complete error message or a screenshot.

For asset-related issues, also include the configured path and datablock name.
