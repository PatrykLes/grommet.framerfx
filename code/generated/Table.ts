// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  a11yTitle: ControlDescription;
  alignSelf: ControlDescription;
  gridArea: ControlDescription;
  margin: ControlDescription;
  caption: ControlDescription;
  placeholder: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  a11yTitle: { title: "A11yTitle", defaultValue: "", type: ControlType.String },
  alignSelf: {
    title: "AlignSelf",
    options: ["start", "center", "end", "stretch"],
    optionTitles: ["Start", "Center", "End", "Stretch"],
    defaultValue: "start",
    type: ControlType.Enum
  },
  gridArea: { title: "GridArea", defaultValue: "", type: ControlType.String },
  margin: { title: "Margin", defaultValue: "", type: ControlType.String },
  caption: { title: "Caption", defaultValue: "", type: ControlType.String },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}