---
name: Bold Scrapbook Academic
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#404850'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#707881'
  outline-variant: '#bfc7d2'
  surface-tint: '#006398'
  primary: '#006194'
  on-primary: '#ffffff'
  primary-container: '#007bba'
  on-primary-container: '#fdfcff'
  inverse-primary: '#93ccff'
  secondary: '#8a486f'
  on-secondary: '#ffffff'
  secondary-container: '#ffaeda'
  on-secondary-container: '#7c3d63'
  tertiary: '#5a5c5c'
  on-tertiary: '#ffffff'
  tertiary-container: '#737575'
  on-tertiary-container: '#fcfcfc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cde5ff'
  primary-fixed-dim: '#93ccff'
  on-primary-fixed: '#001d31'
  on-primary-fixed-variant: '#004b74'
  secondary-fixed: '#ffd8ea'
  secondary-fixed-dim: '#ffaeda'
  on-secondary-fixed: '#3a0329'
  on-secondary-fixed-variant: '#6f3157'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  display-xl:
    fontFamily: Bricolage Grotesque
    fontSize: 120px
    fontWeight: '800'
    lineHeight: 110px
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 80px
    fontWeight: '800'
    lineHeight: 76px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
  headline-sm:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.1em
  display-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 44px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  margin-page: 40px
  gutter: 24px
  overlap-sm: -16px
  overlap-md: -32px
  overlap-lg: -64px
---

## Brand & Style

This design system is built on a "Scrapbook Academic" narrative—a fusion of rigorous intellectual pursuit and high-energy creative chaos. It moves away from the sterile perfection of modern SaaS interfaces in favor of a human-centric, tactile, and expressive aesthetic. 

The visual style is **Editorial Collage**. It leverages intentional "imperfections" such as hand-drawn doodles and tape textures to create a sense of approachability and playfulness. The user experience should feel like flipping through a premium, curated journal where every element was placed by hand. Key characteristics include heavy layering, overlapping components, and a high-contrast palette that signals both professional confidence and youthful energy.

## Colors

The palette is vibrant and purposeful. **Bright Blue** serves as the primary driver for major headings and structural energy, while **Soft Pink** is used for accents, doodles, and "sticky-note" elements. 

- **Primary (Bright Blue):** Used for large-scale display text and primary background blocks.
- **Secondary (Soft Pink):** Used for hand-drawn star doodles, stickers, and interactive highlights.
- **Tertiary (Clean White):** Acts as the "paper" substrate for polaroid frames and high-contrast card backgrounds.
- **Neutral (Charcoal):** Reserved strictly for body text and legible labels to ensure accessibility against the bright background colors.
- **Background:** A very light, tinted off-white/pink is used to mimic a textured paper base, preventing the starkness of pure hex #FFFFFF.

## Typography

The typography system is built on extreme contrast. **Bricolage Grotesque** provides a chunky, expressive, and slightly quirky personality for headlines. It should be used at massive scales, often overlapping other elements.

**Be Vietnam Pro** is the workhorse for body text, providing a contemporary and legible sans-serif balance to the aggressive headlines. For technical details, dates, or "sticker" labels, **Space Mono** adds an academic, typewriter-adjacent feel that reinforces the scrapbook narrative.

Always ensure that large display text uses tight leading (line-height) to maintain a "blocky" visual impact.

## Layout & Spacing

This design system rejects the rigid, symmetrical grid in favor of a **Layered Editorial** model. While a 12-column grid exists for foundational alignment, elements are encouraged to break the grid through offsets and negative margins.

- **Intentional Overlap:** Use negative spacing (e.g., `-32px`) to stack cards over headlines or photos over text blocks. This creates depth and a "taped-on" look.
- **Dynamic Rotation:** Subtle rotations (between -2 and +2 degrees) should be applied to "Polaroid" cards and "sticker" labels to enhance the handmade feel.
- **Margins:** Large outer margins (40px+) keep the central "collage" focused, preventing the design from feeling cluttered at the edges.

## Elevation & Depth

Depth is conveyed through physical metaphors rather than digital abstraction:

1.  **Stacked Paper Layers:** Depth is created by z-index stacking. Background blocks are the lowest, followed by text, then large images, and finally "stickers" or doodles on the top-most layer.
2.  **Polaroid Shadows:** For photo frames, use a singular, soft, directional shadow (e.g., `offset-y: 4px, blur: 12px, opacity: 0.1`) to make them appear slightly lifted from the paper surface.
3.  **Texture Overlays:** A subtle grain or paper texture should be applied globally as a non-moving overlay to unify the "scrapbook" substrate.

## Shapes

The shape language is dominated by **exaggerated roundedness**. Containers and large image blocks should use a minimum of 24px corner radius to soften the bold typography and bright colors.

- **Polaroids:** Maintain sharp inner corners for the photo itself, but the outer white frame should have slight rounding (4-8px) to look like high-quality cardstock.
- **Stickers:** Use pill-shapes (fully rounded) for tags and chips to mimic die-cut adhesive labels.
- **Hand-drawn Doodles:** Doodles (stars, underlines, arrows) must maintain their "rough" vector edges—avoid smoothing them out.

## Components

- **Buttons:** Styled as high-contrast "stickers." Primary buttons are Bright Blue with Tertiary White text; secondary buttons are Pink with Charcoal text. Both use `rounded-full` corners and a 2px Charcoal border to pop against bright backgrounds.
- **Polaroid Frames:** Large white containers with generous bottom padding for "handwritten" captions in the label font.
- **Tape Accents:** Rectangular overlays with 50-70% opacity in Soft Pink, placed at the corners of images to simulate washi tape.
- **Doodle Stars:** Hand-drawn star assets in Soft Pink or Bright Blue, used as "space fillers" or to highlight key headlines.
- **Cards:** Large surfaces with `rounded-xl` corners. Use overlapping layouts where a card might be "tucked" under a headline but "overlap" a background image.
- **Input Fields:** Clean white boxes with a heavy Charcoal 2px stroke, utilizing the Label typography for placeholder text to maintain the academic feel.