import { useState, useEffect } from 'react';
import type { PageMeta } from '@vitebook/client';
import { Variant } from '@vitebook/preact';
import {
  ControlsAddon,
  eventCallback,
  EventsAddon,
} from '@vitebook/preact/addons';

import Button from './Button';

export const __pageMeta: PageMeta = {
  title: 'Button',
  description: 'My awesome button.',
};

function ButtonStory() {
  return (
    <>
      <Variant name="Primary" description="The primary button.">
        <Button type='primary'>
          Primary Button
        </Button>
      </Variant>

      <Variant
        name="Warning"
        description="The warning button."
      >
        <Button type='warning'>Warning button</Button>
      </Variant>

      <Variant
        name="Disabled"
        description="The disabled button."
      >
        <Button type='disabled'>Disabled button</Button>
      </Variant>

      <Variant name="Primary outlined" description="The primary button.">
        <Button type='primary' variant='outlined'>
          Primary Outlined  Button
        </Button>
      </Variant>

      <Variant
        name="Warning outlined"
        description="The warning button."
      >
        <Button type='warning' variant='outlined'>Warning Outlined button</Button>
      </Variant>
    </>
  );
}

ButtonStory.displayName = 'ButtonStory';

export default ButtonStory;