import styled, { css } from 'styled-components';

import { breakpointMixin } from '@styles/mixins';

import VerbConjugation from '@components/VerbConjugation';

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: .7rem 1rem;

  ${breakpointMixin.laptop`
    flex-wrap: nowrap;
  `}
`;

const Line = css`
  margin-top: 1rem;
  padding-top: 2rem;
  border-top: .1rem dashed ${(props) => props.theme.colors.lightGray};
`;

const BoxGroup = styled.div`
  margin-right: 3rem;
  margin-left: 1rem;
  & + & {
    ${Line}
  }

  ${(props) => props.showLine && css`
    ${Line}
  `}

  ${breakpointMixin.laptop`
    margin-right: 1rem;
  `}
`;

const VerbConjugationWrapper = styled(VerbConjugation)`
  width: 100%;

  ${breakpointMixin.laptop`
    width: 25%;
  `}
`;

const Label = styled.span`
  display: inline-block;
  margin-bottom: .5rem;
  margin-left: 1rem;
  padding: .3rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.lightGray};
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.primaryColor};
`;

export {
  Box,
  BoxGroup,
  VerbConjugationWrapper,
  Label
};
