import PropTypes from 'prop-types';
import { ListItem, Image, Status, Text } from './FriendListItem.styled';

function FriendListItem({ avatar, name, isOnline }) {
  const bgColor = isOnline ? 'green' : 'red';
  return (
    <ListItem>
      <Status style={{ backgroundColor: bgColor }}></Status>
      <Image src={avatar} alt={name} width="48" />
      <Text>{name}</Text>
    </ListItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
