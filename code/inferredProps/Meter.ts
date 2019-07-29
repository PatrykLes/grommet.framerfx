// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  a11yTitle: ControlDescription;
  alignSelf: ControlDescription;
  gridArea: ControlDescription;
  margin: ControlDescription;
  background: ControlDescription;
  round: ControlDescription;
  size: ControlDescription;
  thickness: ControlDescription;
  type: ControlDescription;
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
  gridArea: { title: "GridArea", type: ControlType.String },
  margin: { title: "Margin", type: ControlType.String },
  background: { title: "Background", type: ControlType.String },
  round: { title: "Round", type: ControlType.Boolean },
  size: { title: "Size", type: ControlType.String },
  thickness: { title: "Thickness", type: ControlType.String },
  type: {
    title: "Type",
    options: ["circle", "bar"],
    optionTitles: ["Circle", "Bar"],
    type: ControlType.Enum
  }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}