import { EditorView } from '@codemirror/view'
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language'
import { tags } from '@lezer/highlight'

// Colors from https://www.nordtheme.com/docs/colors-and-palettes
// Polar Night
const base00 = '#2e3440', // black
  base01 = '#3b4252', // dark grey
  base02 = '#434c5e',
  base03 = '#4c566a' // grey

// Snow Storm
const base04 = '#d8dee9', // grey
  base05 = '#e5e9f0', // off white
  base06 = '#eceff4' // white

// Frost
const base07 = '#8fbcbb', // moss green
  base08 = '#88c0d0', // ice blue
  base09 = '#81a1c1', // water blue
  base0A = '#5e81ac' // deep blue

// Aurora
const base0b = '#bf616a', // red
  base0C = '#d08770', // orange
  base0D = '#ebcb8b', // yellow
  base0E = '#a3be8c', // green
  base0F = '#b48ead' // purple

const invalid = '#d30102',
  darkBackground = '#252a33',
  highlightBackground = base02,
  background = base00,
  tooltipBackground = base01,
  selection = base03,
  cursor = base04

/// The editor theme styles for Nord.
export const nordTheme = EditorView.theme(
  {
    '&': {
      color: base04,
      backgroundColor: background
    },

    '.cm-content': {
      caretColor: cursor
    },

    '.cm-cursor, .cm-dropCursor': { borderLeftColor: cursor },
    '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
      { backgroundColor: selection },

    '.cm-panels': { backgroundColor: darkBackground, color: base03 },
    '.cm-panels.cm-panels-top': { borderBottom: '2px solid black' },
    '.cm-panels.cm-panels-bottom': { borderTop: '2px solid black' },

    '.cm-searchMatch': {
      backgroundColor: 'transparent',
      outline: `1px solid ${base07}`
    },
    '.cm-searchMatch.cm-searchMatch-selected': {
      backgroundColor: base04,
      color: base00
    },

    '.cm-activeLine': { backgroundColor: highlightBackground },
    '.cm-selectionMatch': {
      backgroundColor: base05,
      color: base01
    },

    '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
      outline: `1px solid ${base07}`
    },

    '&.cm-focused .cm-matchingBracket': {
      backgroundColor: base06,
      color: base02
    },

    '.cm-gutters': {
      backgroundColor: base00,
      color: base03,
      border: 'none'
    },

    '.cm-activeLineGutter': {
      backgroundColor: highlightBackground,
      color: base04
    },

    '.cm-foldPlaceholder': {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#ddd'
    },

    '.cm-tooltip': {
      border: 'none',
      backgroundColor: tooltipBackground
    },
    '.cm-tooltip .cm-tooltip-arrow:before': {
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent'
    },
    '.cm-tooltip .cm-tooltip-arrow:after': {
      borderTopColor: tooltipBackground,
      borderBottomColor: tooltipBackground
    },
    '.cm-tooltip-autocomplete': {
      '& > ul > li[aria-selected]': {
        backgroundColor: highlightBackground,
        color: base03
      }
    }
  },
  { dark: true }
)

/// The highlighting style for code in the Nord theme.
export const nordHighlightStyle = HighlightStyle.define([
  { tag: tags.keyword, color: base0A },
  {
    tag: [tags.name, tags.deleted, tags.character, tags.propertyName, tags.macroName],
    color: base08
  },
  { tag: [tags.variableName], color: base07 },
  { tag: [tags.function(tags.variableName)], color: base07 },
  { tag: [tags.labelName], color: base09 },
  {
    tag: [tags.color, tags.constant(tags.name), tags.standard(tags.name)],
    color: base0A
  },
  { tag: [tags.definition(tags.name), tags.separator], color: base0E },
  { tag: [tags.brace], color: base07 },
  {
    tag: [tags.annotation],
    color: invalid
  },
  {
    tag: [tags.number, tags.changed, tags.annotation, tags.modifier, tags.self, tags.namespace],
    color: base0F
  },
  {
    tag: [tags.typeName, tags.className],
    color: base0D
  },
  {
    tag: [tags.operator, tags.operatorKeyword],
    color: base0E
  },
  {
    tag: [tags.tagName],
    color: base0F
  },
  {
    tag: [tags.squareBracket],
    color: base0b
  },
  {
    tag: [tags.angleBracket],
    color: base0C
  },
  {
    tag: [tags.attributeName],
    color: base0D
  },
  {
    tag: [tags.regexp],
    color: base0A
  },
  {
    tag: [tags.quote],
    color: base0F
  },
  { tag: [tags.string], color: base0E },
  {
    tag: tags.link,
    color: base0E,
    textDecoration: 'underline',
    textUnderlinePosition: 'under'
  },
  {
    tag: [tags.url, tags.escape, tags.special(tags.string)],
    color: base07
  },
  { tag: [tags.meta], color: base08 },
  { tag: [tags.monospace], color: base04, fontStyle: 'italic' },
  { tag: [tags.comment], color: base03, fontStyle: 'italic' },
  { tag: tags.strong, fontWeight: 'bold', color: base0A },
  { tag: tags.emphasis, fontStyle: 'italic', color: base0A },
  { tag: tags.strikethrough, textDecoration: 'line-through' },
  { tag: tags.heading, fontWeight: 'bold', color: base0A },
  { tag: tags.special(tags.heading1), fontWeight: 'bold', color: base0A },
  { tag: tags.heading1, fontWeight: 'bold', color: base0A },
  {
    tag: [tags.heading2, tags.heading3, tags.heading4],
    fontWeight: 'bold',
    color: base0A
  },
  {
    tag: [tags.heading5, tags.heading6],
    color: base0A
  },
  { tag: [tags.atom, tags.bool, tags.special(tags.variableName)], color: base0C },
  {
    tag: [tags.processingInstruction, tags.inserted],
    color: base07
  },
  {
    tag: [tags.contentSeparator],
    color: base0D
  },
  { tag: tags.invalid, color: base02, borderBottom: `1px dotted ${invalid}` }
])

/// Extension to enable the Nord theme (both the editor theme and
/// the highlight style).
export const nord = [
  nordTheme,
  syntaxHighlighting(nordHighlightStyle)
]