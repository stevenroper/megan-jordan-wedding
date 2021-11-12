import styled from 'styled-components';
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  compose,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps as StyledSystemGridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

import colors from '../constants/colors';

interface AllProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    TypographyProps {}

const allProps = compose(
  background,
  border,
  color,
  layout,
  position,
  space,
  typography
);

export const Box = styled('div')<AllProps>(allProps);

interface FlexProps extends AllProps, FlexboxProps {}

export const Flex = styled('div')<FlexProps>`
  display: flex;
  flex-direction: row;
  ${allProps}
  ${flexbox}
`;

interface GridProps extends AllProps, StyledSystemGridProps {}

export const Grid = styled('div')<GridProps>`
  display: grid;
  ${allProps}
  ${grid}
`;

export const Heading = styled('h1')<AllProps>`
  margin: 0;
  color: ${colors.green};
  ${allProps}
`;

export const Input = styled('input')<AllProps>`
  height: 2rem;
  width: 100%;
  background-color: transparent;
  padding: 1rem;
  color: ${colors.green};
  outline: none;
  border: 1px solid ${colors.green};
  border-radius: 0.25rem;
  font-size: 1rem;

  ::placeholder {
    color: ${colors.green};
  }

  ${allProps}
`;

export const Paragraph = styled('p')<AllProps>`
  color: ${colors.green};
  ${allProps}
`;

export const TextButton = styled('button')<AllProps>`
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  padding: 0;
  overflow: visible;
  text-transform: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.green};
  outline-color: ${colors.green};
  border-radius: 0.25rem;
  --webkit-appearance: button;

  &:hover {
    text-decoration: underline;
  }

  ${allProps};
`;
