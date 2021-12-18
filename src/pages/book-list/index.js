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
    description: (
      <>
        ······
      </>
    ),
  },
  {
    title: '动手学深度学习',
    Subtitle: ' - 李沐',
    imageUrl: 'https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/book-list/%E5%8A%A8%E6%89%8B%E5%AD%A6%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0.jpg',
    description: (
      <>
        ······
      </>
    ),
  },
  {
    title: '统计学习方法',
    Subtitle: ' - 李航',
    imageUrl: 'https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/book-list/%E7%BB%9F%E8%AE%A1%E5%AD%A6%E4%B9%A0%E6%96%B9%E6%B3%95.jpg',
    description: (
      <>
        ······
      </>
    ),
  },
  {
    title: '图解深度学习',
    Subtitle: '',
    imageUrl: 'https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/book-list/%E5%9B%BE%E8%A7%A3%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0.jpg',
    description: (
      <>
        ······
      </>
    ),
  },
  {
    title: '深度学习的数学',
    Subtitle: '',
    imageUrl: 'https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/book-list/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0%E7%9A%84%E6%95%B0%E5%AD%A6.jpg',
    description: (
      <>
        ······
      </>
    ),
  },
  // {
  //   title: '',
  //   Subtitle: '',
  //   imageUrl: '',
  //   description: (
  //     <>
  //       ······
  //     </>
  //   ),
  // },
];

function Book({imageUrl, title, Subtitle, description, to}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.book_category)}>
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
      <div className={clsx('row', styles.category_col)}>
        <div className={styles.category_img}><img src={useBaseUrl('img/icons/category_icons/机器学习.svg')} /></div>
        <div className={styles.category_img}><img src={useBaseUrl('img/icons/category_icons/深度学习.svg')} /></div>
      </div>
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
      {/* <div className={clsx('row', styles.category_col)}>
        <div className={styles.category_img}><img src={useBaseUrl('')} /></div>
        <div className={styles.category_img}><img src={useBaseUrl('')} /></div>
        <div className={styles.category_img}><img src={useBaseUrl('')} /></div>
      </div>
      <div className={clsx('row', styles.category_col)}>
        <div className={styles.category_img}><img src={useBaseUrl('')} /></div>
        <div className={styles.category_img}><img src={useBaseUrl('')} /></div>
        <div className={styles.category_img}><img src={useBaseUrl('')} /></div>
      </div> */}
    </Layout>
  );
}

export default Hello;