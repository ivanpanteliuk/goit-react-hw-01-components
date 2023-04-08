import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatsList,
  ListItem,
  Label,
  Percentage,
} from './Statistics.styled';

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function Statistic({ title, stats }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <ListItem key={id} style={{ backgroundColor: randomColor() }}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </ListItem>
        ))}
      </StatsList>
    </Section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistic;
