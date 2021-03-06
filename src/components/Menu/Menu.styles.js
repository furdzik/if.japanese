import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

import { breakpointMixin } from '@styles/mixins';

const MenuWrapper = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  display: block;
  margin: 3rem 2rem 3rem 0;
  font-size: 2.3rem;
  font-weight: ${(props) => props.theme.typography.fontWeight.semibold};
  color: ${(props) => props.theme.colors.black};

  &:last-child {
    margin-right: 0;
  }

  ${breakpointMixin.portraitTablet`
    margin-right: 3rem;
    font-size: 2.7rem;
  `};

  @media print {
    margin-top: 0;
  }
`;

const LinkStyled = styled(Link)`
  color: ${(props) => props.theme.colors.black};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.primaryColor};
    transition: all 0.3s ease 0s;
  }

  ${(props) => props.active && css`
    color: ${props.theme.colors.primaryColor};
  `};

  @media print {
    display: none;

    ${(props) => props.active && css`
      display: block;
    `};
  }
`;

export {
  MenuWrapper,
  MenuItem,
  LinkStyled
};
