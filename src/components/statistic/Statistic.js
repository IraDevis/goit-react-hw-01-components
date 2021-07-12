import React from "react";
import PropTypes from "prop-types";

import styles from "./Statistic.module.css";

const Statistic = ({ title, stats }) => {
  return (
    <section className={styles.statistic}>
      <h2>Upload stats</h2>

      <ul className={styles.list}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={styles.item}>
            <span className={styles.label}>{label} </span>
            <span>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistic.defaultProps = {
  title: "",
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistic;
