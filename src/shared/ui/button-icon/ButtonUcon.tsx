import styles from './button-icon.module.scss';

export type IButtonIconProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ReactNode;
};

export const ButtonIcon: React.FC<IButtonIconProps> = (props) => {
  return (
    <button {...props} className={styles.buttonIcon}>
      {props.icon}
    </button>
  );
};
