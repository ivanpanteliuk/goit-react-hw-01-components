import Profile from '../Profile/Profile';
import Statistic from '../Statistics/Statistics';
import FriendsList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import user from '../../data/user';
import data from '../../data/data';
import friends from '../../data/friends';
import transactions from '../../data/transactions';

import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistic title="Upload stats" stats={data} />
        <FriendsList friends={friends} />
        <TransactionHistory items={transactions} />
      </>
    </Container>
  );
};
