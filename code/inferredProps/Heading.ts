// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  a11yTitle: ControlDescription;
  alignSelf: ControlDescription;
  as: ControlDescription;
  gridArea: ControlDescription;
  margin: ControlDescription;
  color: ControlDescription;
  level: ControlDescription;
  responsive: ControlDescription;
  size: ControlDescription;
  textAlign: ControlDescription;
  truncate: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  a11yTitle: { title: "A11yTitle", type: ControlType.String },
  alignSelf: {
    title: "AlignSelf",
    options: ["start", "center", "end", "stretch"],
    optionTitles: ["Start", "Center", "End", "Stretch"],
    type: ControlType.Enum
  },
  as: {
    title: "As",
    options: [
      "symbol",
      "object",
      "div",
      "small",
      "a",
      "style",
      "title",
      "time",
      "link",
      "menu",
      "dialog",
      "text",
      "abbr",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "bdi",
      "bdo",
      "big",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dl",
      "dt",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "legend",
      "li",
      "main",
      "map",
      "mark",
      "menuitem",
      "meta",
      "meter",
      "nav",
      "noindex",
      "noscript",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "script",
      "section",
      "select",
      "source",
      "span",
      "strong",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "tr",
      "track",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
      "webview",
      "svg",
      "animate",
      "animateMotion",
      "animateTransform",
      "circle",
      "clipPath",
      "defs",
      "desc",
      "ellipse",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "filter",
      "foreignObject",
      "g",
      "image",
      "line",
      "linearGradient",
      "marker",
      "mask",
      "metadata",
      "mpath",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "stop",
      "switch",
      "textPath",
      "tspan",
      "use",
      "view"
    ],
    optionTitles: [
      "Symbol",
      "Object",
      "Div",
      "Small",
      "A",
      "Style",
      "Title",
      "Time",
      "Link",
      "Menu",
      "Dialog",
      "Text",
      "Abbr",
      "Address",
      "Area",
      "Article",
      "Aside",
      "Audio",
      "B",
      "Base",
      "Bdi",
      "Bdo",
      "Big",
      "Blockquote",
      "Body",
      "Br",
      "Button",
      "Canvas",
      "Caption",
      "Cite",
      "Code",
      "Col",
      "Colgroup",
      "Data",
      "Datalist",
      "Dd",
      "Del",
      "Details",
      "Dfn",
      "Dl",
      "Dt",
      "Em",
      "Embed",
      "Fieldset",
      "Figcaption",
      "Figure",
      "Footer",
      "Form",
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "Head",
      "Header",
      "Hgroup",
      "Hr",
      "Html",
      "I",
      "Iframe",
      "Img",
      "Input",
      "Ins",
      "Kbd",
      "Keygen",
      "Label",
      "Legend",
      "Li",
      "Main",
      "Map",
      "Mark",
      "Menuitem",
      "Meta",
      "Meter",
      "Nav",
      "Noindex",
      "Noscript",
      "Ol",
      "Optgroup",
      "Option",
      "Output",
      "P",
      "Param",
      "Picture",
      "Pre",
      "Progress",
      "Q",
      "Rp",
      "Rt",
      "Ruby",
      "S",
      "Samp",
      "Script",
      "Section",
      "Select",
      "Source",
      "Span",
      "Strong",
      "Sub",
      "Summary",
      "Sup",
      "Table",
      "Tbody",
      "Td",
      "Textarea",
      "Tfoot",
      "Th",
      "Thead",
      "Tr",
      "Track",
      "U",
      "Ul",
      "Var",
      "Video",
      "Wbr",
      "Webview",
      "Svg",
      "Animate",
      "AnimateMotion",
      "AnimateTransform",
      "Circle",
      "ClipPath",
      "Defs",
      "Desc",
      "Ellipse",
      "FeBlend",
      "FeColorMatrix",
      "FeComponentTransfer",
      "FeComposite",
      "FeConvolveMatrix",
      "FeDiffuseLighting",
      "FeDisplacementMap",
      "FeDistantLight",
      "FeFlood",
      "FeFuncA",
      "FeFuncB",
      "FeFuncG",
      "FeFuncR",
      "FeGaussianBlur",
      "FeImage",
      "FeMerge",
      "FeMergeNode",
      "FeMorphology",
      "FeOffset",
      "FePointLight",
      "FeSpecularLighting",
      "FeSpotLight",
      "FeTile",
      "FeTurbulence",
      "Filter",
      "ForeignObject",
      "G",
      "Image",
      "Line",
      "LinearGradient",
      "Marker",
      "Mask",
      "Metadata",
      "Mpath",
      "Path",
      "Pattern",
      "Polygon",
      "Polyline",
      "RadialGradient",
      "Rect",
      "Stop",
      "Switch",
      "TextPath",
      "Tspan",
      "Use",
      "View"
    ],
    type: ControlType.Enum
  },
  gridArea: { title: "GridArea", type: ControlType.String },
  margin: { title: "Margin", type: ControlType.String },
  color: { title: "Color", type: ControlType.String },
  level: {
    title: "Level",
    options: ["1", "2", "3", "4", "5", "6"],
    optionTitles: ["1", "2", "3", "4", "5", "6"],
    type: ControlType.Enum
  },
  responsive: { title: "Responsive", type: ControlType.Boolean },
  size: { title: "Size", type: ControlType.String },
  textAlign: {
    title: "TextAlign",
    options: ["start", "center", "end"],
    optionTitles: ["Start", "Center", "End"],
    type: ControlType.Enum
  },
  truncate: { title: "Truncate", type: ControlType.Boolean }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
