import React, { useState } from 'react';

import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

import { storiesOf } from '@storybook/react';

import Input from '../../src/components/Input';

storiesOf('Components|Input', module)
  .add('default', () => (
    <Input autoComplete="off" label="Nome Completo" name="name" />
  ))
  .add('with icon', () => <Input icon="MdEmail" name="email" />)
  .add('toggle password', () => {
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);

    function handleTogglePassword() {
      setPasswordIsVisible(!passwordIsVisible);
    }

    return (
      <Input
        icon="MdLock"
        label="Senha"
        name="password"
        type={passwordIsVisible ? 'text' : 'password'}
      >
        <button
          className="btn__transparent"
          type="button"
          onClick={handleTogglePassword}
          tabIndex="-1"
        >
          {passwordIsVisible ? (
            <MdVisibilityOff size={18} fill="#5E5C66" />
          ) : (
            <MdVisibility size={18} fill="#fff" />
          )}
        </button>
      </Input>
    );
  });
