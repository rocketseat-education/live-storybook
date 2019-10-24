import React from 'react';
import PropTypes from 'prop-types';
import * as FontAwesome from 'react-icons/fa';
import { Container } from './styles';

export default function Button({
  color,
  icon,
  children,
  large,
  secondary,
  onClick,
  ...rest
}) {
  const Icon = FontAwesome[icon];

  return (
    <Container
      color={color}
      secondary={secondary}
      onClick={onClick}
      large={large}
      {...rest}
    >
      {children && <span>{children}</span>}
      {icon && <Icon size={18} />}
    </Container>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.string,
  large: PropTypes.bool,
  secondary: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: '#7159c1',
  icon: '',
  children: '',
  large: false,
  secondary: false,
  onClick: () => {},
};
