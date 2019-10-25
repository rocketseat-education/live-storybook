import React from 'react';

import { storiesOf } from '@storybook/react';

import Home from '../../src/pages/Home';

storiesOf('Pages|Home', module)
  .addParameters({
    centered: {
      disable: true,
    },
    info: {
      disable: true,
    },
  })
  .add('default', () => <Home />);
