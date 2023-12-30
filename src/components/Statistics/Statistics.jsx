import styles from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={styles.item}
            style={{ backgroundColor: getRandomHexColor() }}
            key={id}
          >
            <span className={styles.label}>{label}</span> <br />
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </>
  );
};
