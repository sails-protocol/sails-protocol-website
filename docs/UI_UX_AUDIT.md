# Sails Protocol UI/UX audit

This audit applies interaction principles from Apple Human Interface Guidelines without reproducing Apple's visual design.

## Applied in this revision

- Touch targets: navigation controls and language selectors provide practical finger-sized hit areas, with primary controls targeting at least 44 by 44 pixels.
- Adaptability: the desktop navigation becomes a dedicated compact-screen panel instead of disappearing.
- Clear hierarchy: Product and Developers group related destinations through named submenus.
- Readability: P2P Trading SDK and module descriptions use larger type and line height on desktop and mobile.
- Focus: links and buttons expose a visible keyboard focus ring.
- Motion: existing animations respect `prefers-reduced-motion`.
- Status clarity: AI entry points show an icon, an active status label and a status indicator that does not rely only on color.
- Progressive disclosure: Roadmap details stay compact while the dedicated page presents a distinct timeline overview.
- Localization resilience: navigation groups have English, Portuguese and Spanish labels and allow the menu to scroll on compact screens.

## Sources

- [Apple Human Interface Guidelines: Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility)
- [Apple Human Interface Guidelines: Layout](https://developer.apple.com/design/human-interface-guidelines/layout)
- [Apple UI Design Dos and Don'ts](https://developer.apple.com/design/tips/)

## Follow-up checks

- Test keyboard order and screen-reader names in the final production deployment.
- Verify the final X and LinkedIn account URLs when official profiles are confirmed.
- Validate contrast and zoom at 200 percent after final copy and brand colors are locked.
- Add functional WebMCP declarations only when the public actions and their authority model are defined.
