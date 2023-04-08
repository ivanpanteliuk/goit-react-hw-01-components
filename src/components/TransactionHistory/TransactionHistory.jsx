import PropTypes from 'prop-types';
import { Table, HeaderCell, DataCell, Row } from './TransactionHistory.styled';

function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <tr>
          <HeaderCell>Type</HeaderCell>
          <HeaderCell>Amount</HeaderCell>
          <HeaderCell>Currency</HeaderCell>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Row key={id}>
            <DataCell>{type}</DataCell>
            <DataCell>{amount}</DataCell>
            <DataCell>{currency}</DataCell>
          </Row>
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
