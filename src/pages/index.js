import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: '正常的知识',
    imageUrl: 'img/icons/C1.png',
    jump: 'docs/',
    description: (
      <>
        每天以🐢的速度增长
      </>
    ),
  },

  {
    title: '奇怪的知识',
    imageUrl: 'img/icons/C2.png',
    jump: 'docs/Useless-knowledge/about-code/ascii-art',
    description: (
      <>
        多得就像代码里的🐛
      </>
    ),
  },

  {
    title: 'To Do🎯',
    imageUrl: 'img/icons/lzumi-06.png',
    jump: 'todo-List/',
    description: (
      <>
        Rcxxx's To Do List
      </>
    ),
  },

  {
    title: '吃货看这里',
    imageUrl: 'img/icons/re-01.png',
    description: (
      <>
        喜欢的美食收录
      </>
    ),
  },

//   {
//     title: 'page5',
//     imageUrl: 'img/icons/re-02.png',
//     description: (
//       <>
//         暂时没想好写什么
//       </>
//     ),
//   },

//   {
//     title: 'page6',
//     imageUrl: 'img/icons/re-03.png',
//     description: (
//       <>
//         暂时没想好写什么
//       </>
//     ),
//   },

//   {
//     title: 'page7',
//     imageUrl: 'img/icons/konosuba-01.png',
//     description: (
//       <>
//         暂时没想好写什么
//       </>
//     ),
//   },

//   {
//     title: 'page8',
//     imageUrl: 'img/icons/yourname-01.png',
//     description: (
//       <>
//         暂时没想好写什么
//       </>
//     ),
//   },
];

function Feature({imageUrl, title, description, jump}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <div className="text--center">
        <a href={jump}><h3>{title}</h3></a>
      </div>
      <div className="text--center"><p>{description}</p></div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
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
              🌈Portal
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
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
