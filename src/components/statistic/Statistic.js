import React from 'react';
import PropTypes from 'prop-types';

import styles from './Statistic.module.css';

const Statistic = ({ title, stats }) => {
    return (
<section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
          {stats.map(({id, label, percentage}) =>
          (<li key={id} className="item">
            <span className="label">{label} </span>
            <span className="percentage">{percentage}%</span>
    </li>)
          )}
  </ul>
        </section>
    )};

Statistic.defaultProps = {
  title: ''
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  })).isRequired
}

export default Statistic;