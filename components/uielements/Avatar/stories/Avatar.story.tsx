import React from 'react';
import { getHiddenProps } from '../../../../stories/utils';
import Cmp from '../index';

export default {
  title: 'UI Elements/Avatar',
  component: Cmp,
  argTypes: {
    ...getHiddenProps(['alt', 'title', 'image']),
  },
};

const Template = args => <Cmp {...args} />;

export const Avatar = Template.bind({});
Avatar.args = {
    size: 'medium',
    rounded: true,
    image: 'https://via.placeholder.com/150',
    isTransparent: false,
};
