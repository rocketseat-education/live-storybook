import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useField } from '@rocketseat/unform';
import * as MaterialDesign from 'react-icons/md';

import { Label } from './styles';

export default function Input({
  label,
  name,
  icon,
  size,
  iconStyle,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const renderLabel = label || name;

  const Icon = MaterialDesign[icon];

  useEffect(() => {
    if (!ref.current) return;
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'value',
    });
  }, [ref.current, fieldName]); //eslint-disable-line

  return (
    <Label htmlFor={fieldName} icon={icon}>
      {error && <span>{error}</span>}

      <input
        name={fieldName}
        ref={ref}
        id={fieldName}
        aria-label={fieldName}
        defaultValue={defaultValue}
        {...rest}
      />
      <span>{renderLabel}</span>
      {icon && <Icon size={size} style={iconStyle} />}
      {children}
    </Label>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  size: PropTypes.number,
  iconStyle: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.element,
};

Input.defaultProps = ({ name }) => ({
  icon: '',
  label: '',
  size: null,
  iconStyle: null,
  children: null,
});
