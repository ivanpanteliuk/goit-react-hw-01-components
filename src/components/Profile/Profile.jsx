import PropTypes from 'prop-types';
import {
  ProfileCard,
  Image,
  Title,
  Tag,
  StatsList,
  ListItem,
  LabelText,
  QuantityText,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <div>
        <Image src={avatar} alt={tag} className="avatar" />
        <Title>{username}</Title>
        <Tag>@{tag}</Tag>
        <Tag>{location}</Tag>
      </div>

      <StatsList>
        <ListItem>
          <LabelText>Followers</LabelText>
          <QuantityText>{stats.followers}</QuantityText>
        </ListItem>
        <ListItem>
          <LabelText>Views</LabelText>
          <QuantityText>{stats.views}</QuantityText>
        </ListItem>
        <ListItem>
          <LabelText>Likes</LabelText>
          <QuantityText>{stats.likes}</QuantityText>
        </ListItem>
      </StatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
