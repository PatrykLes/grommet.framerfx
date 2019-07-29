// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  a11yTitle: ControlDescription;
  alignSelf: ControlDescription;
  gridArea: ControlDescription;
  margin: ControlDescription;
  activeIndex: ControlDescription;
  flex: ControlDescription;
  justify: ControlDescription;
  placeholder: ControlDescription;
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
  activeIndex: { title: "ActiveIndex", type: ControlType.Number },
  flex: {
    title: "Flex",
    options: ["grow", "shrink"],
    optionTitles: ["Grow", "Shrink"],
    type: ControlType.Enum
  },
  justify: {
    title: "Justify",
    options: ["start", "center", "end"],
    optionTitles: ["Start", "Center", "End"],
    type: ControlType.Enum
  },
  placeholder: { title: "Placeholder", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}