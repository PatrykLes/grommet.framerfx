import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Box";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Box(props) {
  return <System.Box {...props} style={style} />;
}

Box.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Box, {
  a11yTitle: merge(controls.a11yTitle, {}),
  alignSelf: merge(controls.alignSelf, {}),
  gridArea: merge(controls.gridArea, {}),
  margin: merge(controls.margin, {}),
  align: merge(controls.align, {}),
  alignContent: merge(controls.alignContent, {}),
  animation: merge(controls.animation, {}),
  background: merge(controls.background, {}),
  basis: merge(controls.basis, {}),
  border: merge(controls.border, {}),
  direction: merge(controls.direction, {}),
  elevation: merge(controls.elevation, {}),
  flex: merge(controls.flex, {}),
  fill: merge(controls.fill, {}),
  gap: merge(controls.gap, {}),
  height: merge(controls.height, {}),
  justify: merge(controls.justify, {}),
  overflow: merge(controls.overflow, {}),
  pad: merge(controls.pad, {}),
  responsive: merge(controls.responsive, {}),
  round: merge(controls.round, {}),
  tag: merge(controls.tag, {}),
  as: merge(controls.as, {}),
  width: merge(controls.width, {}),
  wrap: merge(controls.wrap, {}),
  placeholder: merge(controls.placeholder, {})
});
