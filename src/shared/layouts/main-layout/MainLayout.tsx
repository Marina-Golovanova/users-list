import styles from './main-layout.module.scss';

export const MainLayout: React.FC<React.PropsWithChildren> = (props) => {
  return <div className={styles.mainLayout}>{props.children}</div>;
};
