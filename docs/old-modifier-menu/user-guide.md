# Old Modifier Menu — User Documentation

Old Modifier Menu puts every Blender modifier back in one clear, organized menu. The interface adapts to the active object, so it presents relevant tools for meshes, curves, text, lattices, volumes, hair curves, and Grease Pencil objects.

This guide describes the add-on's stable features and workflows. Edition differences are summarized below.

## Contents

1. [Edition comparison](#edition-comparison)
2. [Installation](#installation)
3. [Updating or changing editions](#updating-or-changing-editions)
4. [Quick start](#quick-start)
5. [Interface overview](#interface-overview)
6. [Adding modifiers](#adding-modifiers)
7. [Search](#search)
8. [Pie menu](#pie-menu)
9. [Favorites](#favorites)
10. [Modifier Stacks](#modifier-stacks)
11. [Custom Node Modifiers](#custom-node-modifiers)
12. [Blender Essentials assets](#blender-essentials-assets)
13. [Hair curve assets](#hair-curve-assets)
14. [Effectors](#effectors)
15. [Modifier-management tools](#modifier-management-tools)
16. [Object and modifier reference](#object-and-modifier-reference)
17. [Preferences reference](#preferences-reference)
18. [Troubleshooting](#troubleshooting)
19. [Uninstallation](#uninstallation)
20. [Support and bug reports](#support-and-bug-reports)

## Edition comparison

| Feature | Lite | Paid |
|---|:---:|:---:|
| Object-aware modifier menu | Yes | Yes |
| Mesh, Curve, Text, Lattice, Volume, Hair, and Grease Pencil support | Yes | Yes |
| Menu-location and size controls | Yes | Yes |
| Blender Essentials Geometry Nodes integration | Yes | Yes |
| Modifier Search button | — | Yes |
| Configurable pie menu | — | Yes |
| Favorites | — | Yes |
| Four reusable modifier Stacks | — | Yes |
| Four custom Geometry Nodes slots | — | Yes |
| Built-in and custom effectors | — | Yes |
| Apply, remove, enable/disable, and expand/collapse all | — | Yes |
| Detailed category and individual-modifier visibility controls | Basic | Yes |

Install only one edition at a time; one edition replaces the other.

## Installation

1. Download the ZIP for your edition.
2. Leave the downloaded file as a ZIP. Do not extract or rearrange its contents.
3. Open Blender.
4. Choose **Edit → Preferences → Get Extensions**.
5. Open the menu in the upper-right corner of the Extensions view.
6. Choose **Install from Disk**.
7. Select the Old Modifier Menu ZIP.
8. Enable **Old Modifier Menu** if Blender does not enable it automatically.
9. Select a supported object and verify that the menu appears in the configured location.

If Blender reports that an extension with the same ID is already installed, remove the existing Old Modifier Menu installation before installing the new edition.

## Updating or changing editions

Old Modifier Menu settings—including Favorites, Stacks, shortcut choices, and custom paths—are stored in Blender preferences. They are not stored in the current `.blend` scene.

For a clean update:

1. Record any important Favorites, Stacks, custom asset paths, and shortcut changes.
2. Disable Old Modifier Menu.
3. Remove the installed version.
4. Close and restart Blender.
5. Install the new ZIP using **Install from Disk**.
6. Re-enable the extension and restore any settings that were not retained.

Use the same procedure when moving between editions. Do not install both editions simultaneously.

## Quick start

1. Select a mesh object.
2. Find Old Modifier Menu in its configured location.
3. Click the main modifier icon to open the categorized menu.
4. Choose a modifier such as **Bevel**, **Mirror**, or **Subdivision Surface**.
5. Adjust the newly added modifier in Blender’s Modifier Properties.

Additional features described in this guide include:

- Click the magnifying-glass button to search Blender’s Add Modifier menu.
- Press **Ctrl + Right Mouse Button** in the 3D Viewport to open the pie menu.
- Configure Favorites, Stacks, effectors, and custom Geometry Nodes in the add-on preferences.

## Interface overview

### Main modifier button

The main button opens Old Modifier Menu for the active object. The displayed menu depends on the object type and is divided into categories such as:

- Edit
- Generate
- Deform
- Normals
- Physics
- Hair
- Grease Pencil Edit, Generate, Deform, and Color

Categories and individual modifier entries can be enabled or disabled in the add-on preferences. The menu also adapts to the active object type, so it does not show choices that Blender does not support for that object.

### Search button

The magnifying-glass button opens Blender’s standard Add Modifier search menu. Use the **Show Search** toggle in the add-on preferences to display or hide this button.

### Effector button

The Effector button opens a dialog for adding helper objects such as a Wire Cube, Wire Sphere, or Empty Axes. A cube or sphere can, for example, be positioned and used as a Boolean object, while Empty Axes can provide a non-rendering reference or control object. Custom helper objects can also be loaded from a `.blend` file. Use the **Show Add Effector Button** toggle in the add-on preferences to display or hide this button.

### Extras row

When the add-on is placed **Under Default Menu**, the Extras row provides bulk modifier actions. Use the **Show Extras** toggle in the add-on preferences to display or hide it.

### Menu locations

The **Addon Location** preference lists the positions available in the installed edition. These can include:

- **Under Default Menu:** Places the interface in Blender’s Modifier Properties area.
- **T Menu:** Places it in the configured 3D View tool region.
- **3D View Header:** Places a compact control in the 3D Viewport header.
- **Status Bar:** Places the interface in Blender’s status bar.

Use the **Menu Size** setting in the add-on preferences to adjust the scale of the interface in its selected location.

## Adding modifiers

### From the categorized menu

1. Select a supported object.
2. Open Old Modifier Menu.
3. Locate the required category.
4. Click the modifier name.

The modifier is added to the active object. Old Modifier Menu does not replace Blender’s modifier settings; configuration continues in Blender’s normal Modifier Properties.

### Object-aware choices

Blender does not support every modifier on every object type. Old Modifier Menu therefore shows a tailored subset rather than the full mesh list everywhere.

Examples:

- Meshes expose the widest set of Edit, Generate, Deform, Normal, and Physics modifiers.
- Curves and text show only modifiers Blender supports for those objects.
- Volumes include volume-specific conversion and deformation choices.
- Hair curves expose Blender Essentials hair-node assets.
- Grease Pencil objects use their own modifier categories.

### Selection requirements

The operation acts on the active object. If several objects are selected, only the active object receives the chosen modifier.

If no compatible active object exists, relevant operators are disabled and the add-on reports **Select an object that supports modifiers**.

## Search

The Search button calls Blender’s standard `OBJECT_MT_modifier_add` menu. Search contents come from Blender and are filtered by the active object and current Blender version.

To use Search:

1. Select a supported object.
2. Click the magnifying-glass button.
3. Type part of a modifier’s name.
4. Select the required result.

The regular interface Search and pie-menu Search both target Blender's standard modifier collection.

## Pie menu

### Opening the pie menu

The default shortcut is **Ctrl + Right Mouse Button** while the cursor is over the 3D Viewport.

The pie menu contains object-appropriate modifier categories and may also include Search, Favorites, Stacks, and Custom Node Modifiers when those features are enabled.

### Changing the shortcut

1. Open the Old Modifier Menu preferences.
2. Locate **Pie Menu**.
3. Enable **Enable Pie Menu**.
4. Edit the displayed Shortcut field.

Disabling **Enable Pie Menu** removes the add-on’s shortcut. Re-enabling it restores the configured pie-menu keymap.

### Opening a separate Properties window

**Open New Window After Adding Modifiers** controls whether a modifier chosen from the pie menu opens a separate Properties window focused on modifiers.

Disable this setting in the add-on preferences if you prefer the modifier to be added silently to the existing interface.

## Favorites

Favorites provide quick access to individual modifiers you use frequently.

### Enabling Favorites

1. Open the add-on preferences.
2. Enable **Favorites**.
3. Click **Add Favorite**.
4. Search for and select a modifier.

The selection is added only after you choose a real modifier; dismissing the search or leaving the placeholder selected does not create an entry.

### Managing Favorites

Use the controls beside each entry to:

- Move the Favorite up.
- Move the Favorite down.
- Remove the Favorite.

Use **Clear Favorites** in the add-on preferences to remove the complete list.

### Applying a Favorite

1. Select a compatible object.
2. Open Old Modifier Menu or the pie menu.
3. Open the Favorites section.
4. Click a Favorite.

The selected modifier is added to the active object.

## Modifier Stacks

A Stack is an ordered preset that adds several modifiers in one action. Four independent Stack slots are available.

### Creating a Stack

1. Open the add-on preferences.
2. Enable **Stacks**.
3. Enable the required Stack slot.
4. Enter a descriptive Stack name.
5. Click the plus button for that Stack.
6. Search for and select a modifier.
7. Repeat until the modifiers appear in the required order.

The visible order is the order in which modifiers are created on the object.

### Running a Stack

1. Select a mesh object.
2. Open the Stacks section in the regular menu or pie menu.
3. Click the saved Stack name.

Each modifier is added to the active object in the saved order.

### Clearing a Stack

Click the trash button for the required Stack in the add-on preferences. This clears its modifier list without deleting or renaming the Stack slot.

### Empty or invalid Stacks

An empty Stack displays **Stack List Is Empty** in the menu and will not run. If an entry is invalid in the active Blender version, the Stack cancels with an error identifying the modifier it could not add.

## Custom Node Modifiers

Four configurable shortcuts are available for Geometry Nodes groups stored in your own `.blend` asset files.

### Configuring a slot

1. Open Old Modifier Menu preferences.
2. Enable **Custom Node Mods**.
3. Choose one of the four slots.
4. Select the source `.blend` file.
5. Enter the exact node-group datablock name.
6. Enable that Custom Node Mod slot.

### Using a custom node modifier

1. Select an object that supports modifiers.
2. Open Old Modifier Menu or its pie menu.
3. Open **Custom Node Mods**.
4. Click the configured node-group name.

The add-on appends the node group and creates a Geometry Nodes modifier that uses it. If a node group with the same name already exists in the current file, that existing group is reused.

### Path behavior

The file path can be absolute or use a Blender-resolved path. Select an existing readable `.blend` file and provide a node-group name before enabling the slot.

### Name matching

Node-group names must match the source datablock name exactly, including spaces and capitalization. The label visible in a node editor is normally the name to use.

## Blender Essentials assets

Old Modifier Menu provides access to Blender Essentials Geometry Nodes assets, including:

- Smooth by Angle
- Procedural hair node groups

These built-in choices do not require a custom asset path.

## Hair curve assets

Hair curve features use Blender Essentials Geometry Nodes groups. They are disabled by default and can be enabled by category and individual asset in the add-on preferences.

### Deformation

- Blend Hair Curves
- Displace Hair Curves
- Frizz Hair Curves
- Hair Curves Noise
- Roll Hair Curves
- Rotate Hair Curves
- Shrinkwrap Hair Curves
- Smooth Hair Curves
- Straighten Hair Curves
- Trim Hair Curves

### Generation

- Duplicate Hair Curves
- Generate Hair Curves
- Interpolate Hair Curves

### Guides

- Braid Hair Curves
- Clump Hair Curves
- Create Guide Index Map
- Curl Hair Curves

### Utility

- Attach Hair Curves to Surface
- Redistribute Curve Points
- Restore Curve Segment Length

### Write

- Set Hair Curve Profile

The menu also exposes applicable built-in hair/curve modifiers and information groups according to Blender support and the enabled preferences.

## Effectors

Effectors are helper objects added to the current scene. They can be used as Boolean objects, modifier controls, placement references, or other non-rendering helpers.

### Included effectors

- Wire Cube
- Wire Sphere
- Empty Axes

To add one, click the Effector button and select the desired helper.

### Effector location

Choose one of the following in the add-on preferences:

- **3D Cursor:** Places the appended object at the 3D Cursor.
- **Active Object:** Places it at the active object’s location. If no active object exists, it falls back to the world origin.
- **World Origin:** Places it at `(0, 0, 0)`.

### Custom effectors

To add your own helper object:

1. Set **Effector — Blend File** to an existing `.blend` file.
2. Set **Effector — Object Name** to the exact object datablock name.
3. Open the Effector dialog.
4. Click the custom entry.

The source object is appended rather than linked, so the new scene object is local to the current file.

## Modifier-management tools

The Extras row contains four bulk operations.

### Apply All

Processes all modifiers on the active object. Enabled modifiers are applied where Blender allows it. Disabled modifiers, or enabled modifiers that Blender cannot apply, are removed.

This operation changes object data and should be treated as destructive.

### Remove All

Removes every modifier from the active object.

### Enable/Disable All

Sets viewport visibility for every modifier on the active object. Repeated use toggles between enabled and disabled.

### Expand/Collapse All

Changes the expanded state of every modifier panel in the active object’s stack.

Save the file before Apply All or Remove All, or be prepared to use Blender’s Undo command.

## Object and modifier reference

The exact menu is object-dependent. This reference summarizes the full set represented by the add-on; Blender decides which choices are valid for each object type.

### Mesh categories

**Edit**

- Data Transfer
- Mesh Cache
- Mesh Sequence Cache
- UV Project
- UV Warp
- Vertex Weight Edit
- Vertex Weight Mix
- Vertex Weight Proximity

**Generate**

- Array
- Bevel
- Boolean
- Build
- Decimate
- Edge Split
- Geometry Nodes
- Mask
- Mirror
- Multiresolution
- Remesh
- Screw
- Skin
- Solidify
- Subdivision Surface
- Triangulate
- Volume to Mesh
- Weld
- Wireframe

**Deform**

- Armature
- Cast
- Curve
- Displace
- Hook
- Laplacian Deform
- Lattice
- Mesh Deform
- Shrinkwrap
- Simple Deform
- Smooth
- Smooth Corrective
- Smooth Laplacian
- Surface Deform
- Warp
- Wave

**Normals**

- Normal Edit
- Weighted Normal
- Smooth by Angle

**Physics**

- Cloth
- Collision
- Dynamic Paint
- Explode
- Fluid
- Ocean
- Particle Instance
- Particle System entry
- Soft Body

### Curve and Text objects

Curve and Text menus expose relevant subsets of Edit, Generate, Deform, Normals, and Soft Body tools. Unsupported mesh-only choices are omitted.

### Lattice objects

Lattices receive compatible cache, deformation, and Soft Body choices.

### Volume objects

Volumes expose relevant conversion and volume operations, including Mesh to Volume, Volume to Mesh, and Volume Displace where supported.

### Hair Curves

Hair Curves combine compatible built-in modifiers with the enabled Blender Essentials hair assets described above.

### Grease Pencil categories

Old Modifier Menu represents Blender’s Grease Pencil modifiers in these groups:

- **Edit:** Texture Mapping, Time Offset, Vertex Weight Proximity, and Vertex Weight Angle.
- **Generate:** Array, Build, Dot Dash, Envelope, Length, Line Art, Mirror, Multiple Strokes, Outline, Geometry Nodes, Simplify, and Subdivide.
- **Deform:** Armature, Hook, Lattice, Noise, Offset, Shrinkwrap, Smooth, and Thickness.
- **Color:** Hue, Opacity, and Tint.

Only choices supported by the active Blender version and enabled in the add-on preferences are displayed.

## Preferences reference

### Add Effectors

- **Show Add Effector Button:** Displays or hides the main-interface Effector button.
- **Effector Location:** Selects 3D Cursor, Active Object, or World Origin placement.
- **Custom Effector Blend File:** Selects the source `.blend` file.
- **Custom Effector Object Name:** Identifies the exact object datablock to append.

### Menu Location

- **Addon Location:** Chooses where the interface appears.
- **Menu Size:** Scales the interface.
- **Show Search:** Displays the modifier Search button.
- **Show Extras:** Displays the bulk-operation row where applicable.

### Pie Menu

- **Enable Pie Menu:** Registers or removes the pie-menu shortcut.
- **Shortcut:** Edits the key combination used in the 3D Viewport.
- **Open New Window After Adding Modifiers:** Opens a separate Modifier Properties window after a pie-menu choice.

### Category visibility

High-level toggles control the main groups:

- Edit
- Generate
- Deform
- Physics
- Normals
- Hair
- Grease Pencil categories

Disabling a category removes it from the menu without changing existing modifiers.

### Individual modifier visibility

Each built-in modifier can be enabled or disabled separately. Use these controls to create a smaller menu containing only tools relevant to your workflow.

These visibility settings do not prevent Blender’s standard Search menu from showing its own supported results.

### Favorites

- Enables the Favorites menu section.
- Adds, removes, clears, and reorders Favorite modifiers.

### Stacks

- Enables the Stacks menu section.
- Enables or disables each of four slots.
- Sets each Stack’s display name.
- Adds or clears modifier entries.

### Custom Node Mods

- Enables the Custom Node Mods section.
- Enables each of four slots.
- Stores a `.blend` file path and node-group name for each slot.

### Hair controls

- Enables the overall Hair category.
- Enables Deformation, Generation, Guides, Utility, and Write subcategories.
- Enables individual Blender Essentials hair-node groups.

### Grease Pencil controls

- Enables Edit, Generate, Deform, and Color categories.
- Enables individual Grease Pencil modifier entries.

## Troubleshooting

### The menu is missing

1. Confirm that Old Modifier Menu is enabled.
2. Select a supported object.
3. Check **Addon Location** in the add-on preferences.
4. Look in the location selected in the **Addon Location** preference.
5. Restart Blender after changing editions or replacing an old installation.

### The menu is present but a modifier is missing

- Confirm that Blender supports the modifier for the active object type.
- Check whether its category is enabled.
- Check whether the individual modifier is enabled in the add-on preferences.
- Use the Search button to inspect Blender’s standard choices for the active object.

### The Search button opens the wrong list

The regular and pie-menu Search buttons should both open Blender's standard Add Modifier menu. If they do not, update or reinstall Old Modifier Menu.

### The pie-menu shortcut does not work

1. Confirm that **Enable Pie Menu** is enabled.
2. Move the mouse over a 3D Viewport before pressing the shortcut.
3. Check whether another add-on or Blender keymap action uses the same combination.
4. Assign a different shortcut in Old Modifier Menu preferences.

### A Favorite does nothing or reports that it no longer exists

The saved Favorite index may have become stale after preferences were edited or migrated. Remove the affected Favorite and add it again.

### A Stack says it is empty

Add one or more modifiers to the Stack in the add-on preferences, or disable the unused Stack slot.

### A Stack stops on a modifier

The active object or Blender version may not support an entry. Review the error message, remove the incompatible entry, and try again on the intended object type.

### A custom node slot is unassigned

Both an existing `.blend` file and a non-placeholder node-group name are required. Re-select the file, enter the exact group name, and enable the slot.

### A node group was not found

Open the source file and check the Geometry Nodes group’s datablock name. Correct the saved name in the add-on preferences. Matching is exact.

### An Essentials asset cannot be loaded

Old Modifier Menu normally uses the current Blender installation and then its bundled fallback. If both fail:

1. Reinstall the complete Old Modifier Menu ZIP.
2. Check that Blender’s installation data has not been manually removed.
3. Test with an official Blender build.
4. Include the complete error in a support request.

### An effector object was not found

For a custom effector, confirm that the source `.blend` file exists and that the Object Name matches the object datablock exactly. Collection names and visible labels are not substitutes for the object name.

### Icons are missing, blank, or incorrect

Remove the old installation, restart Blender, and install the complete release ZIP without modifying its contents.

### Apply All removed a modifier

This is expected when the modifier was disabled or Blender could not apply it. Apply All is destructive; use Undo or reopen a saved file if the result is not wanted.

### Updating Blender removed the add-on

Blender stores configuration separately for different versions. Import the previous version’s preferences during first-run setup, or install Old Modifier Menu into the new Blender version using the original ZIP.

## Uninstallation

1. Open **Edit → Preferences → Get Extensions**.
2. Find Old Modifier Menu.
3. Disable it.
4. Choose **Uninstall** or **Remove**.
5. Restart Blender before installing a different edition or replacement build.

Uninstalling the add-on does not remove modifiers, node groups, or effector objects already saved inside your `.blend` files. It removes the interface and add-on preferences.

## Support and bug reports

For a useful bug report, include:

- Exact Blender version and build type.
- Old Modifier Menu version and edition.
- Operating system.
- Active object type.
- Menu location and relevant enabled features.
- Exact reproduction steps.
- Complete error message or screenshot.
- For custom assets: the configured path and datablock name.
