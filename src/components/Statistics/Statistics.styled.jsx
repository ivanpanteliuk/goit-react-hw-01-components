import styled from '@emotion/styled';

export const Section = styled.section`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const Title = styled.h2`
  padding: 30px 150px;
  background-color: #fff;
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 5);
  padding: 15px 0;
`;

export const Label = styled.span`
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  color: #fff;
  text-align: center;
  font-size: 25px;
`;
