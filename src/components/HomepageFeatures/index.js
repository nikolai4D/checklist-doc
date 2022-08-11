import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/simplify.png').default,
    description: (
      <>
          Generate and fill a tailored checklist in a handful of clicks.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/efficiency.png').default,
    description: (
      <>
          Set up a flexible checklist model for all of your needs.
      </>
    ),
  },
  {
    title: 'Save and share checklists',
    Svg: require('@site/static/img/cloud-data.png').default,
    description: (
      <>
          Store your checklists online or locally and share them easily.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} height="200px" width="200px" role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
