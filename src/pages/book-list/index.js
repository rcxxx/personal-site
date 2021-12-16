import styles from './styles.module.css';

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

const list = [
  {
    title: '正常的知识',
    imageUrl: 'img/icons/C1.png',
    to: 'docs/',
    description: (
      <>
        每天以🐢的速度增长
      </>
    ),
  },
];

function Book({imageUrl, title, description, to}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <div className="text--center">
        <a href={to}><h3>{title}</h3></a>
      </div>
      <div className="text--center"><p>{description}</p></div>
    </div>
  );
}

function Hello() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          book list
        </p>
      </div>

      <main>
        {list && list.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {list.map((props, idx) => (
                  <Book key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

    </Layout>
  );
}

export default Hello;