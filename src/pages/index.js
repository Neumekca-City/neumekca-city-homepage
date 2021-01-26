/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Based on Huobi ECO Chain',
    imageUrl: 'img/undraw_docusaurus_mountain.png',
    description: (
      <>
        Huobi Eco Chain client based on the go-ethereum fork. The Huobi Open Platform
        will provide global developers with series of diverse innovative facilities and services.
      </>
    ),
  },
  {
    title: 'Easy to use',
    imageUrl: 'img/chronos.png',
    description: (
      <>
        Chronos was a drug created by Leon Von Alvensleben for the Neumékca government in order to create super soldiers for the NULL project. Chronos provides the NULL soldiers with limited precognition, allowing them to preplan the outcomes of combat. It also allows for them to slow their perception of time and rewind time to a certain point.
      </>
    ),
  },
  {
    title: 'NFTs Factory',
    imageUrl: 'img/cryotank.png',
    description: (
      <>
        Characters in the Katana storyline will appear in turn as NFT cards that will bring a lot of fun for players to participate in the project.
        A farming strategy will be developed by our team to bring fairness to everyone involved in the project, regardless of how much or how little you fund.
        It will help for ordinary peoples with small fund 😉
        Each project have there own unique features...
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello and Welcome to ${siteConfig.title}`}
      description="The first IDO Platform based on Huobi ECO Chain">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
            &emsp;
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to='https://app.neumekca.city'>
              Launch App↗
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({ title, imageUrl, description }) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
