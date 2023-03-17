import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const NewButton: ComponentStory<typeof Button> = () => 
    <Button>Button</Button>;

