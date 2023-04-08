import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 300px;
  padding: 0 30px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255, 0.6);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    scale: 1.1;
    background-color: rgb(255, 255, 255, 0.9);
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  &:hover img {
    filter: brightness(100%);
  }

  &:hover p {
    font-weight: 700;
  }

  &:hover span {
    width: 20px;
    height: 20px;
  }
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Image = styled.img`
  filter: brightness(70%);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Text = styled.p`
  font-weight: 500;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
