import React from 'react';
import { FaAirbnb } from "react-icons/fa";

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconButton } from '../components/Button';

export default {
  title: 'Icon Button',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;


export const IconButtonPrimary: ComponentStory<typeof IconButton> = () => 
    <IconButton icon={<FaAirbnb/>} size='large' variant='outlined' type='primary'>Button</IconButton>;
