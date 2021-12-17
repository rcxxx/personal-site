import styles from './styles.module.css';

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

const list_ml_dl = [
  {
    title: 'DEEP LEARNING',
    Subtitle: ' - 中文版',
    imageUrl: 'https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/book-list/deep-learning-cn.jpeg',
    to: 'docs/',
    description: (
      <>
        ······
      </>
    ),
  },
];

function Book({imageUrl, title, Subtitle, description, to}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.features)}>
      <div className={clsx(styles.book_box)}>
        <div className={clsx(styles.book_block)}>
          {imgUrl && (
            <div className={clsx('text--center', styles.book_cover)}>
              <img className={styles.cover_img} src={imgUrl} alt={title} />
            </div>
          )}
          <div className="text--center">
            <h5>《{title}》{Subtitle}</h5>
          </div>
          <div className="text--center"><p>{description}</p></div> 
        </div>
      </div>
    </div>
  );
}

function Hello() {
  return (
    <Layout>
      <main>
        {list_ml_dl && list_ml_dl.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {list_ml_dl.map((props, idx) => (
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