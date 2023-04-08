import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 400px;
  height: 650px;
  background: linear-gradient(
    154.62deg,
    rgba(255, 253, 253, 0.4) 3.67%,
    rgba(255, 250, 250, 0.1) 98.21%
  );
  box-shadow: 0px 4px 26px -1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 40px;
`;

export const Image = styled.img`
  width: 260px;
  height: 260px;
  border: 8px solid rgba(255, 255, 255, 0.49);
  border-radius: 50%;
  margin: 40px auto;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 40px;
  line-height: 53px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Tag = styled.p`
  font-weight: 500;
  font-size: 25px;
  text-align: center;
  margin-bottom: 5px;
  color: rgba(43, 42, 42, 0.5);
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 5px;
  padding: 30px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 110px;
  padding: 15px 0;
  background-color: #9b9a9a;
  border-radius: 10px;
`;

export const LabelText = styled.span`
  font-size: 20px;
  color: rgb(57, 73, 87, 0.8);
`;

export const QuantityText = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
