import React, { ComponentPropsWithRef } from 'react';
import { ButtonIcon } from './ButtonIcon';
import { ButtonContainer } from './ButtonContainer';
import { ButtonText } from './ButtonText';
import { Variants } from 'framer-motion';

export type ButtonFlavors =
  | 'basic'
  | 'transparent'
  | 'black'
  | 'square'
  | 'outlined'
  | 'glass';

export type ButtonSizes = 'sm' | 'md' | 'lg';

/**
 * Used to describe the `framer-motion` variants for each flavor and each
 * component inside the Button
 * */
export type FlavorMotionVariants = { [k in ButtonFlavors]: Variants };

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  flavor?: ButtonFlavors;
  icon?: boolean | React.ReactNode;
  isLoading?: boolean;
  buttonSize?: ButtonSizes;
  direction?: 'ltr' | 'rtl';
  glow?: boolean;
}

export const defaultValues = {
  flavor: 'basic',
  icon: false,
  buttonSize: 'md',
  isLoading: false,
  direction: 'ltr',
  glow: false,
} as const satisfies ButtonProps;
/**
 * Custom `Button` component with different flavors (variants)
 *
 * @param props.flavor - The flavor of the button ('basic', 'squared', etc...)
 * @param props.icon - Whether to use icon or not (custom icon, true or false)
 * @param props.color - Color for the button text
 * @param props.bgColor - Background color for the button
 * @param props.bgHover - Background color for main part of button when hovered
 * @param props.bgLight - ('squared' flavor) Background color for main part of button when hovered
 * @param props.bgDark - ('squared' flavor) Background color for icon part of button when hovered
 * */
export const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;

  return (
    <ButtonContainer {...rest}>
      <ButtonText {...rest}>{children}</ButtonText>
      <ButtonIcon {...rest} />
    </ButtonContainer>
  );
};
