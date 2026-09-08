# Magic Eye Maker — FAQ

## Depth and viewing

### The depth preview is flat black, white, or nearly featureless. What should I do?

Click **Fit Mist Range**, then try **Mist Falloff: Linear** and **Depth Gamma: 1**. Use **Preview** and inspect both the raw and processed depth files before changing Stereogram Depth Strength.

### Why does the hidden form appear inside-out?

Open **Advanced → Rendered Depth Only** and change **Depth Inversion**.

### Why do Preview Mist and the exported depth look different?

The viewport is an approximate Mist preview and does not show Normalize Depth or Depth Inversion. Use the processed-depth image created by **Preview** to inspect the mapping used for the final stereogram.

### Why does changing Stereogram Depth Strength do nothing in Preview Mist?

Stereogram Depth Strength changes the final pattern displacement, not the viewport Mist display or exported depth. Use **Generate** to judge this setting.

### Why is the hidden form difficult to see?

Check the processed depth first. Then try a smaller Pattern Width, more pattern detail, stronger tonal variation, and a moderate Stereogram Depth Strength. View the output without non-uniform scaling.

### How should I view the finished stereogram?

Open the image at a comfortable size. Relax your focus and look through it as though focusing behind the screen until repeated parts of the pattern merge. Take a break if viewing becomes uncomfortable.

## Patterns and images

### Why do recognizable pattern details stretch or split?

Depth changes alter the spacing of the pattern. Reduce Stereogram Depth Strength and check for sudden depth changes. Smaller, less recognizable pattern details are usually more tolerant of displacement.

### Why is the Single Image source ignored?

When any image layer has an assigned image, the layer list takes priority. Remove or clear the assigned layers to use Single Image again.

### Why is an image layer not visible?

Confirm that an image is assigned to the layer. In Overlay mode, check layer order, Overlay Opacity, and source transparency.

### Why is an image sequence or movie frozen?

Choose **Image Frames: Scene Frame** and check Frame Offset, Loop Movie/Sequence, the source path, and available frames. Use a contiguous numbered image sequence when precise frame selection is important.

## Animation

### Why does pattern animation appear stationary?

Check the selected mode, speed or movement amount, output range, and Loop Count. Very small pixel movement, a one-frame range, zero movement, or repeated sampling of the same phase can create identical frames.

### Why does a loop have a visible seam?

Use a whole-number Loop Count and confirm the output Start, End, and Step values. Loop Output Range controls pattern movement only; scene animation and animated image sources must be looped separately.

## Output and performance

### Why did Generate not create new preview images?

Use **Preview** to create the pattern, raw-depth, and processed-depth inspection files. **Generate** creates the final stereogram.

### Why can Latest Outputs show files from different runs?

It records the most recent file of each type. Preview and Generate update different entries, so use the output folder when checking all files from a particular run or animation.

### Why is the first generated image slower?

With Acceleration set to Auto, the first run can include preparation time. Compare later runs before changing the acceleration setting.

## Support

### What should I include in a bug report?

Include:

- Blender version and Magic Eye Maker version.
- Operating system.
- Pattern source and output frame range.
- Exact steps that reproduce the problem.
- Complete error message.
- Pattern Preview, raw depth, and processed-depth files when the problem concerns depth or image quality.
