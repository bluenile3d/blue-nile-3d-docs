# RUNIC — FAQ

## Fonts, symbols, and phrases

### Why is the Text option unavailable for a font?

The selected library may be symbols-only. Choose a font with usable text characters, or use **Symbols** to choose individual glyphs.

### Why is Phrase mode unavailable?

Phrase mode requires a font with a prepared phrase set and enough placement points for more than one symbol. It is unavailable for a Single Rune object and for a face-rune object with only one selected face.

### Why do symbols disappear after I change text mode?

Choose **Clear All**, then select the symbols again. RUNIC limits symbol content to the available placement points, particularly for single points and selected-face workflows.

### Can I use my own fonts?

Yes. Use **Import Font File** to add an OTF or TTF file. Review its characters, choose whether it should provide text as well as symbols, and save it to **My Runes**.

### Can I use hand-drawn symbols?

Yes. Use **Import Drawings** to convert supported image files into a personal RUNIC library. You can separate marks automatically, divide a regular symbol sheet into a grid, clean the artwork, and review each imported rune before saving.

## Placement and surfaces

### Why are my surface runes distorted?

Open the **Surface** panel and choose **Clean** instead of **Wrap**. Clean keeps each rune rigid and is usually more suitable for hard-surface meshes. If runes intersect the target, increase **Surface Offset** slightly.

### How do I draw runes onto a surface?

Select a mesh in Object Mode and choose **Draw RUNES on Surface** to enter curve drawing mode.

### Why are runes crowded at a sharp curve corner?

Increase **Corner Avoidance**, reduce **Rune Size**, increase **Character Spacing**, or simplify the source curve. For open paths, **Clear Ends** can also create useful breathing room.

### Why does a selected-face result look uneven?

Try **Fit Faces** and adjust **Face Margin**. Face sizes and orientations differ, so a fixed-size rune may be too large for small faces or too small for large ones.

## Geometry and export

### I can see artifacts around curves, corners, or overlapping details. What should I do?

Open **Appearance → Advanced → Font Repair**. Use it when generated geometry shows artifacts around sharp turns, corners, thin strokes, or overlapping details. Start with the lightest repair mode that removes the problem; reduce bevel or outline width if fine details still collapse.

### Thin strokes or sharp corners look broken after beveling. What should I do?

Reduce **Bevel Width** or **Outline Width**, increase segments gradually, and use a stronger font-repair mode only when necessary. Very thin strokes and tight corners have limited room for raised or outlined geometry.

### Are the path guide points part of the final model?

No. **Show Path Guide** adds temporary viewport-only guides. They are not rendered, exported, or retained when the modifier is applied.

### How do I prepare a RUNIC result for texturing or export?

Use **Generate UV Map** in the Finish panel, set **UV Margin** as needed, then use **Create Finished Mesh** if the receiving workflow requires an ordinary mesh copy.

## Support

### What should I include in a bug report?

Include:

- Blender version and RUNIC version.
- Operating system.
- Path or object workflow, and selected object type.
- Font or library used.
- Exact steps that reproduce the issue.
- Full error message and, where useful, a screenshot or `.blend` file that reproduces it.
