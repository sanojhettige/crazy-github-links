import React from 'react';
import { getHiddenProps } from '../../../../stories/utils';
import Cmp from '../index';

export default {
  title: 'UI Elements/Button',
  component: Cmp,
  argTypes: {
    ...getHiddenProps(['children', 'onClick']),
  },
};

const Template = args => <Cmp {...args}>{args.buttonText}</Cmp>;

export const Button = Template.bind({});
Button.args = {
    type: 'primary',
  prefixIcon: '',
  suffixIcon: '',
  size: 'medium',
  variant: 'contained',
  fullwith: false,
  rounded: true,
  buttonText: 'Button'
};
