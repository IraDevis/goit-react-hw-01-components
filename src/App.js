import React from 'react';

import Profile from './components/profile/Profile';
import userData from './components/profile/user.json';

import Statistic from './components/statistic/Statistic';
import statsData from './components/statistic/statistical-data.json';

import FriendList from './components/friends/FriendList';
import friendsData from './components/friends/friends.json';

import TransactionHistory from './components/transactions/TransactionHistory';
import transactionsData from './components/transactions/transactions.json';

const App = () => {
    return <div>
        <h1>Задание 1 - Профиль социальной сети</h1>
        <Profile
            name={userData.name}
            tag={userData.tag}
            location={userData.location}
            avatar={userData.avatar}
            stats={ userData.stats}/>
        <h1>Задание 2 - Секция статистики</h1>
        <Statistic title="Upload Stats" stats={statsData}/>
        <h1>Задание 3 - Список друзей</h1>
        <FriendList friends={friendsData}/>
        <h1>Задание 4 - История транзакций</h1>
        <TransactionHistory items={transactionsData}/>
    </div>
};

export default App;