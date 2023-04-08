import styled from '@emotion/styled';

export const Table = styled.table`
  width: 600px;
  border-collapse: collapse;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const HeaderCell = styled.th`
  border: 1px solid #ddd;
  padding: 15px;
  background-color: #f2f2f2;
`;

export const DataCell = styled.td`
  border: 1px solid #ddd;
  padding: 0.5rem;
`;

export const Row = styled.tr`
  background: linear-gradient(
    90deg,
    rgba(248, 230, 131, 0.9090466753107493) 8%,
    rgba(195, 245, 198, 0.9118477957589286) 33%,
    rgba(69, 220, 101, 0.8698309890362395) 61%,
    rgba(0, 212, 255, 0.8922399526216737) 83%
  );
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:nth-of-type(2n) {
   background: linear-gradient(90deg, rgba(229,197,133,0.8922399526216737) 5%, rgba(197,114,236,0.8698309890362395) 31%, rgba(89,134,235,0.9118477957589286) 63%, rgba(131,150,248,0.9090466753107493) 93%);
    );
  }

  &:hover {
    scale: 1.02;
    background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
  }
`;
