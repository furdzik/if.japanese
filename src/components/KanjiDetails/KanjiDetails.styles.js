import styled, { css } from 'styled-components';

const Tag = styled.span`
  display: inline-block;
  padding: .3rem 1rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.lightGray};
  & + & {
    margin-left: 2rem;
  }
  ${(props) => props.verb && css`
    background: ${props.theme.colors.primaryColor};
    color: ${props.theme.colors.white};
  `}
  ${(props) => props.isCommon && css`
    background: #64ad5b;
    color: ${props.theme.colors.white};
  `}
  ${(props) => props.isJlpt && css`
    background: #7d88a7;
    color: ${props.theme.colors.white};
  `}
`;

const ReadingList = styled.ul`
  list-style: none;
  margin-top: 2rem;
`;

const ReadingListItem = styled.li`
  margin-bottom: 2rem;
`;

const StrokeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: .1rem;
  margin-top: .1rem;
`;

const StrokeBox = styled.div`
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.secondaryColor};
  width: 12.444rem;
  margin-left: -.1rem;
  margin-top: -.1rem;
  &::before,
  &::after {
    position: absolute;
    content: '';
    z-index: 1;
  }
  &::before {
    border-left: 1px dashed ${(props) => props.theme.colors.secondaryColor};
    top: 0;
    left: 50%;
    width: 0;
    height: 100%;
  }
  &::after {
    border-top: 1px dashed ${(props) => props.theme.colors.secondaryColor};
    top: 50%;
    left: 0;
    width: 100%;
    height: 0;
  }
`;

const StrokeImage = styled.img`
  display: block;
  position: relative;
  max-width: 100%;
  z-index: 2;
`;

const StrokeNumberWrapper = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  background: ${(props) => props.theme.colors.secondaryColor};
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

const ExampleWrapper = styled.div`
  display: block;
`;

export {
  Tag,
  ReadingList,
  ReadingListItem,
  StrokeWrapper,
  StrokeBox,
  StrokeImage,
  StrokeNumberWrapper,
  ExampleWrapper
};
