import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

import socialProfile from './backand/user.json';
import statisticalData from './backand/statistical-data.json';
import friends from './backand/friends.json';
import transactions from './backand/transactions.json';


function App() {
  return (
  <div className="App">
    <Profile
    name={socialProfile.name}
    tag={socialProfile.tag}
    location={socialProfile.location}
    avatar={socialProfile.avatar}
    stats={socialProfile.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
  )
}

export default App;
