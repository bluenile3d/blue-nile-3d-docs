# Old Modifier Menu — FAQ

## General

### What does Old Modifier Menu do?

Old Modifier Menu brings back Blender's traditional modifier menu with visible, organized categories. It adapts to the active object and supports meshes, curves, surfaces, text, lattices, volumes, hair curves, and Grease Pencil objects.

## Using the menu

### Where can I place the menu?

Choose **Interface → Menu Placement → Location**:

- **Modifier Properties**
- **3D View Toolbar**
- **3D View Header**

**Menu Size** changes button height in Modifier Properties and the toolbar. **Button Width** changes header button width while keeping the header height fixed. Header and toolbar buttons keep a minimum size so their icons remain readable.

Use **Show Search**, **Show Effectors**, and **Show Modifier Actions** to choose which optional controls are shown.

### Why are modifiers split between pages?

**Modifiers** contains the standard or Grease Pencil categories and enabled saved lists. **Essentials** groups Hair, Instances, and Simulation, matching the preferences and pie menu. Columns fit the available window space; previous and next arrows appear when more pages are needed.

Enabled Hair modifiers are listed directly on the Essentials page. To show them, enable **Show Hair in the Menu** under **Modifiers → Essentials → Hair** in preferences, then choose the desired categories and assets.

### Why can’t I see the menu or some modifier choices?

If the complete menu is missing:

1. Confirm that Old Modifier Menu is enabled.
2. Select an object that supports modifiers.
3. Check **Interface → Menu Placement → Location** in the add-on preferences.
4. Look in the location selected by that preference.
5. Restart Blender after changing editions or replacing an older installation.

If the menu is present but a modifier is missing:

- Confirm that Blender supports the modifier for the active object type.
- Check whether its category is enabled.
- Check whether the individual modifier is enabled in the add-on preferences.
- Check the **Essentials** page and any additional pages indicated by navigation arrows.
- Use Search to inspect the add-on's compatible modifiers and available node assets for the active object.

Cameras, lights, empties, armatures, and other unsupported object types cannot receive modifiers through the menu. Relevant controls are disabled for those objects; Effectors can still be added.

### What does the Search button search?

Search lists native modifiers and the node assets supported by Old Modifier Menu, using readable names in alphabetical order. Results are filtered by the active object and the available Blender libraries. The regular interface and pie use the same search.

Menu category and individual visibility toggles do not hide compatible Search results. Search does not index arbitrary external Asset Browser libraries; use the four Custom Node Modifier slots for your own Geometry Nodes groups. Favorites and Stack searches select native modifier types.

### How do I close a menu without adding anything?

Press **Right Mouse Button** or **Esc** in the main menu, Search, or Effector popup. Cancelling a Favorite or Stack search also leaves its saved list unchanged.

### How do I open the pie menu?

The default shortcut is **Ctrl + Right Mouse Button** in the 3D Viewport.

Open **Interface → Pie Menu** in preferences. **Enable Shortcut** controls the binding; **Input**, **Shortcut**, **Trigger**, and the modifier-key buttons let you change it. If the shortcut does nothing, check for a conflict with another add-on or your Blender keymap.

### Where are the modifier actions and window button?

Apply All, Remove All, and visibility are available in Modifier Properties, the toolbar, and the header when **Interface → Menu Controls → Show Modifier Actions** is enabled. The pie has a separate **Show Modifier Actions** setting under **Interface → Pie Menu**. Expand / Collapse is available only in Modifier Properties.

The toolbar and header use an icon-only window button. The pie places **Modifier Window** below its actions and Effector button. The window button remains available when modifier actions are hidden. Favorites, Stacks, and Custom Nodes share the other lower pie column.

### Why does a separate Properties window open after I add a modifier from the pie menu?

**Open Modifier Properties after Adding** is enabled by default under **Interface → Pie Menu**. It applies to additions from the pie's category lists, Favorites, Stacks, and Custom Nodes. Turn it off to keep working in the existing interface. Search does not automatically open the window.

### Can I open Modifier Properties without adding a modifier?

Yes. Click **Modifier Window** in the pie, or the window icon in the toolbar or header. This works independently of automatic opening.

The editor is pinned to the selected object. Opening it again reuses the same window and updates the pinned object.

## Favorites and Stacks

### How do I create a Favorite?

1. Open the **Favorites** tab and enable **Show Favorites in the Menu**.
2. Click **Add Favorite**.
3. Search for and select a modifier.
4. Use the arrow buttons to reorder Favorites or **X** to remove one.

Use **Sort** for alphabetical order, or **Clear** to remove the saved list after confirmation. Selecting a Favorite in the menu adds that modifier to the active object. Cancelling the search does not add an entry.

### Why does a Favorite do nothing or report that it no longer exists?

First check that the active object supports the modifier; incompatible Favorites are disabled. Older names migrate automatically, but an unrecognized entry remains visible for correction. If an entry cannot be used, remove it with **X** and add the intended modifier again.

### What is a modifier Stack?

A Stack is a reusable ordered list of modifier types. Clicking a Stack adds those modifiers to the active object from top to bottom. It does not save settings from an existing object's modifiers. Running a Stack is one scene undo step.

### How do I create a Stack?

1. Open the **Stacks** tab and enable **Show Stacks in the Menu**.
2. Select one of the four Stack tabs and turn on **Enabled**.
3. Give the Stack a useful name.
4. Use **Add Modifier** to search for and add each modifier.
5. Use the up/down arrows to set the order or **X** to remove an entry.

Use **Clear** to empty the selected list after confirmation. An empty Stack has **(Empty)** after its name and is disabled.

### Why does a Stack stop while adding modifiers?

The active object or Blender version may not support one of its entries. Incompatible Stacks are disabled. If a Stack cannot be added, Blender reports the incompatible entry and leaves the object's existing modifiers unchanged.

Review the error message, remove or replace the incompatible entry, and try again on the intended object type.

## Geometry Nodes and effectors

### How do Custom Node Modifiers work?

Each Custom Node Modifier slot needs:

- A path to an existing `.blend` file.
- The exact name of a Geometry Nodes node group inside that file.

In **Assets**, enable **Show Custom Node Modifiers**, configure a slot's **Blend File** and **Node Group**, and enable that slot. Choosing it from **Custom Node Modifiers** in the main menu or **Custom Nodes** in the pie appends the group and adds it as a Geometry Nodes modifier to a compatible object.

If a Geometry Nodes group with the same name is already loaded, the existing group is reused. The node group must have a Geometry output.

### Why is a Custom Node Modifier slot unassigned?

The slot needs an existing `.blend` file and a node-group name. Re-select the file, enter the exact group name, and enable the slot.

### Why was the node group not found?

Open the source file and check the Geometry Nodes group's datablock name. Correct the saved name in the add-on preferences. Matching is exact, including spaces and capitalization.

### Why can’t an Essentials asset be loaded?

First check its version requirements. Smooth by Angle and Hair work in supported Blender 4.3 and later installations. The newer Generate and Instances assets require Blender 5.0 or later. Hair Dynamics, Collider, and Cloth Dynamics (Experimental) require Blender's 5.2 Essentials simulation library.

If the asset should be available, install the complete matching ZIP over the existing extension, confirm that Blender's installation data has not been removed, and test with an official Blender build. Include the complete error message in a support request if the problem remains.

### What are Effectors?

The Effector menu adds helper objects such as **Wire Cube**, **Wire Sphere**, or **Empty Axes**. A cube or sphere can be positioned and used as a Boolean object, while Empty Axes can provide a non-rendering reference or control object. Effectors can be placed at the 3D Cursor, the active object, or the world origin.

In **Assets → Effectors**, choose **Placement**, or configure a custom effector with **Custom Blend File** and **Object Name**. Active Object placement uses the selected object's location. With no selected object, it uses the world origin.

Use **Interface → Menu Controls → Show Effectors** to show or hide the regular-interface and pie buttons. Right-click or press Esc in the popup to cancel without adding an object.

### Why was a custom effector object not found?

Confirm that the source `.blend` file exists and that **Object Name** matches the object datablock exactly. Collection names and visible labels are not substitutes for the object name.

## Troubleshooting

### I receive “Select an editable object that supports modifiers.”

There is no compatible active object. Select a supported, editable object in the 3D Viewport or Outliner and try again.

### I receive “This modifier stack is empty.”

Open the add-on preferences and add at least one modifier to that Stack, or disable the unused Stack slot.

### What information should I include in a bug report?

Please include:

- Your exact Blender version.
- Your Old Modifier Menu version and edition.
- Your operating system.
- The active object type.
- The steps needed to reproduce the problem.
- The complete error message or a screenshot.

For asset-related issues, also include the configured path and datablock name.
