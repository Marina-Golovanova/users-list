import { IUser } from '../../domain/types';
import { MailIcon } from '../../ui/icons/MailIcon';
import { PhoneIcon } from '../../ui/icons/PhoneIcon';

import styles from './user-card.module.scss';

export const UserCard: React.FC<IUser> = (props) => {
  return (
    <div className={styles.layout}>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.info}>
        <div className={styles.infoPoint}>
          <PhoneIcon className={styles.icon} />
          <span>{props.phone}</span>
        </div>

        <div className={styles.infoPoint}>
          <MailIcon className={styles.icon} />
          <span>{props.email}</span>
        </div>
      </div>
    </div>
  );
};
