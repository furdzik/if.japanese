import styled, { css } from 'styled-components';

const ListWrapper = styled.ul`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 -1rem 3rem;
  padding: 0;
  list-style: none;

  @media print {
    display: block;
    text-align: justify;
  }
`;

const ListItem = styled.li`
  position: relative;
  margin: 1rem;
  padding: .6rem 1.2rem .4rem;
  background: ${(props) => props.theme.colors.secondaryColor};
  border-radius: ${(props) => props.theme.layout.borderRadius};
  font-size: 2rem;
  order: 2;

  @media print {
      & {
        display: inline-block;
        margin: .5rem .5rem;
        padding: .5rem .5rem;
        height: 3.5rem;
        page-break-inside: avoid;
        &::before {
            display: none;
        }
      }
    }

  ${(props) => props.known && css`
    background: ${props.theme.colors.primaryColor};
    color: ${props.theme.colors.white};
    order: 0;
    &::before {
      color: ${props.theme.colors.white};
      text-shadow: -1px 1px 8px #750101;
    }
  `}
  ${(props) => props.inProgress && css`
    background: repeating-linear-gradient(45deg, #ef8888, #fba5a5 2px, ${props.theme.colors.tartaryColor} 4px, ${props.theme.colors.tartaryColor} 6px);
    color: ${props.theme.colors.white};
    text-shadow: -1px 1px 8px #750101;
    order: 1;
    &::before {
      color: ${props.theme.colors.white};
      text-shadow: -1px 1px 8px #750101;
    }
    @media print {
      background: #fba5a5;
      color: ${props.theme.colors.black};
      text-shadow: none;
    }
  `}
  ${(props) => props.inProgress && props.known && css`
    background: ${props.theme.colors.black};
    color: ${props.theme.colors.white};
    order: 3;
    &::before {
      color: ${props.theme.colors.white};
    }
  `}

  ${(props) => props.level && props.level !== 0 && css`
    &::before {
      position: absolute;
      top: 0;
      right: .3rem;
      color: inherit;
      font-family: Arial, Calibri, Helvetica, sans-serif;
      font-size: 1rem;
      content: '${props.level}';
    }
  `}
`;

export {
  ListWrapper,
  ListItem
};
