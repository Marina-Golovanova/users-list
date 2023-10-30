import React from 'react';
import { requestUsers } from '../../api';
import { UserCard } from '../../composite-ui/user-card/UserCard';
import { IUser } from '../../domain/types';
import { InputSearch } from '../../ui/input-search';

import styles from './users-report.module.scss';

export const UsersReport: React.FC = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [nameFilter, setNameFilter] = React.useState('');

  React.useEffect(() => {
    requestUsers({ name: nameFilter }).then((data) => setUsers(data));
  }, [nameFilter]);

  return (
    <div className={styles.layout}>
      <InputSearch onChange={(e) => setNameFilter(e.target.value)} />
      <div className={styles.cardsLayout}>
        {users.map((user) => (
          <UserCard {...user} key={user.email} />
        ))}
      </div>
    </div>
  );
};
