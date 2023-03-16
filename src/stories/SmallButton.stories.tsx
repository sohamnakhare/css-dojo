// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/Button';

export default {
  title: 'Small Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const ContainedPrimary: ComponentStory<typeof Button> = () => <Button size='small' variant='contained' type='primary'>Button</Button>;
export const ContainedWarning: ComponentStory<typeof Button> = () => <Button size='small' variant='contained' type='warning'>Button</Button>;
export const ContainedDisabled: ComponentStory<typeof Button> = () => <Button size='small' variant='contained' type='disabled'>Button</Button>;

export const OutlinedPrimary: ComponentStory<typeof Button> = () => <Button size='small' variant='outlined' type='primary'>Button</Button>;
export const OutlinedWarning: ComponentStory<typeof Button> = () => <Button size='small' variant='outlined' type='warning'>Button</Button>;
export const OutlinedDisabled: ComponentStory<typeof Button> = () => <Button size='small' variant='outlined' type='disabled'>Button</Button>;
