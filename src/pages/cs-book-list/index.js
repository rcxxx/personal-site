import styles from './styles.module.css';
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

const list_ml_dl = [
  {
    title: '机器学习',
    Subtitle: ' - 周志华',
    imageUrl: 'https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/book-list/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0-%E8%A5%BF%E7%93%9C%E4%B9%A6.jpg',
    description: (
      <>
        ······
      </>
    ),
  },
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
    title: 'Machine Learning: A Probabilistic Perspective',
    Subtitle: '',
    imageUrl: 'https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/book-list/Machine-Learning.jpg',
    description: (
      <>
        ······
      </>
    ),
  },
  {
    title: '图解机器学习',
    Subtitle: '',
    imageUrl: 'https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/book-list/%E5%9B%BE%E8%A7%A3%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0.jpg',
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

const list_cc = [
  {
    title: 'C++ Primer',
    Subtitle: '中文版',
    imageUrl: 'https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/book-list/C%2B%2B%20Primer%20%E4%B8%AD%E6%96%87%E7%89%88.jpg',
    description: (
      <>
        ······
      </>
    ),
  },
  {
    title: 'More Effective C++',
    Subtitle: '',
    imageUrl: 'https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/book-list/More-Effective-CC.jpg',
    description: (
      <>
        ······
      </>
    ),
  },
  {
    title: 'STL源码剖析',
    Subtitle: '',
    imageUrl: 'https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/book-list/STL%E6%BA%90%E7%A0%81%E5%89%96%E6%9E%90.jpg',
    description: (
      <>
        ······
      </>
    ),
  },
  {
    title: 'C++ 并发编程实战',
    Subtitle: '',
    imageUrl: 'https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/book-list/cplusplus%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B%E5%AE%9E%E6%88%98.jpg',
    description: (
      <>
        ······
      </>
    ),
  },
];

const list_algorithm = [
  {
    title: '算法',
    Subtitle: ' - 第四版',
    imageUrl: 'https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/book-list/%E7%AE%97%E6%B3%95-%E7%AC%AC%E5%9B%9B%E7%89%88.png',
    description: (
      <>
        ······
      </>
    ),
  },
  {
    title: '大话数据结构',
    Subtitle: '',
    imageUrl: 'https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/book-list/%E5%A4%A7%E8%AF%9D%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.jpg',
    description: (
      <>
        ······
      </>
    ),
  },
  {
    title: '剑指Offer',
    Subtitle: ' - 第二版',
    imageUrl: 'https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/book-list/%E5%89%91%E6%8C%87offer.jpg',
    description: (
      <>
        ······
      </>
    ),
  },
  {
    title: '算法与数据结构图解',
    Subtitle: '',
    imageUrl: 'https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/book-list/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E5%9B%BE%E8%A7%A3.jpg',
    description: (
      <>
        ······
      </>
    ),
  },
];

const list_linux = [
  {
    title: '鸟哥的Linux私房菜',
    Subtitle: '——基础学习篇',
    imageUrl: 'https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/book-list/%E9%B8%9F%E5%93%A5%E7%9A%84Linux%E7%A7%81%E6%88%BF%E8%8F%9C%E2%80%94%E2%80%94%E5%9F%BA%E7%A1%80%E5%AD%A6%E4%B9%A0%E7%AF%87.jpg',
    description: (
      <>
        ······
      </>
    ),
  },
  {
    title: 'Linux命令行与shell脚本编程大全',
    Subtitle: '',
    imageUrl: 'https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/book-list/Linux%E5%91%BD%E4%BB%A4%E8%A1%8C%E4%B8%8Eshell%E8%84%9A%E6%9C%AC%E7%BC%96%E7%A8%8B%E5%A4%A7%E5%85%A8.jpg',
    description: (
      <>
        ······
      </>
    ),
  },
  {
    title: 'vim实用技巧',
    Subtitle: '',
    imageUrl: 'https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/book-list/vim%E5%AE%9E%E7%94%A8%E6%8A%80%E5%B7%A7.jpg',
    description: (
      <>
        ······
      </>
    ),
  },
];

const list_math = [  
  {
    title: '程序员的数学',
    Subtitle: '',
    imageUrl: 'https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/book-list/%E7%A8%8B%E5%BA%8F%E5%91%98%E7%9A%84%E6%95%B0%E5%AD%A6.jpg',
    description: (
      <>
        ······
      </>
    ),
  },
  {
    title: '程序员的数学',
    Subtitle: ' - 概率统计',
    imageUrl: 'https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/book-list/%E7%A8%8B%E5%BA%8F%E5%91%98%E7%9A%84%E6%95%B0%E5%AD%A6-2.jpg',
    description: (
      <>
        ······
      </>
    ),
  },
  {
    title: '程序员的数学',
    Subtitle: ' - 线性代数',
    imageUrl: 'https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/book-list/%E7%A8%8B%E5%BA%8F%E5%91%98%E7%9A%84%E6%95%B0%E5%AD%A6-3.jpg',
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
          {/* <div className="text--center"><p>{description}</p></div>  */}
        </div>
      </div>
    </div>
  );
}

function Hello() {
  return (
    <Layout>
      <div className={clsx('row', styles.category_col)}>
        <div className={styles.category_img}><img src={useBaseUrl('img/icons/category_icons/cplusplus.svg')} /></div>
      </div>
      <main>
        {list_cc && list_cc.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {list_cc.map((props, idx) => (
                  <Book key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <div className={clsx('row', styles.category_col)}>
        <div className={styles.category_img}><img src={useBaseUrl('img/icons/category_icons/leetcode.svg')} /></div>
        <div className={styles.category_img}><img src={useBaseUrl('img/icons/category_icons/算法库.svg')} /></div>
      </div>
      <main>
        {list_algorithm && list_algorithm.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {list_algorithm.map((props, idx) => (
                  <Book key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <div className={clsx('row', styles.category_col)}>
        <div className={styles.category_img}><img src={useBaseUrl('img/icons/category_icons/terminal.svg')} /></div>
        <div className={styles.category_img}><img src={useBaseUrl('img/icons/category_icons/Linux.svg')} /></div>
        <div className={styles.category_img}><img src={useBaseUrl('img/icons/category_icons/Ubuntu.svg')} /></div>
        <div className={styles.category_img}><img src={useBaseUrl('img/icons/category_icons/vim.svg')} /></div>
      </div>
      <main>
        {list_linux && list_linux.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {list_linux.map((props, idx) => (
                  <Book key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <div className={clsx('row', styles.category_col)}>
        <div className={styles.category_img}><img src={useBaseUrl('img/icons/category_icons/185-maths.svg')} /></div>
      </div>
      <main>
        {list_math && list_math.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {list_math.map((props, idx) => (
                  <Book key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
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
    </Layout>
  );
}

export default Hello;