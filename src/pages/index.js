import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

import Bilibili_icon from "@site/static/img/icons/social_icons/bilibili@48x.svg";
import GitHub_icon from "@site/static/img/icons/social_icons/github@48x.svg";
import Wechat_icon from "@site/static/img/icons/social_icons/wechat@48x.svg";
import _qq_icon from "@site/static/img/icons/social_icons/qq@48x.svg";


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
    jump: 'docs/life/foods/always-eating',
    description: (
      <>
        喜欢的美食收录
      </>
    ),
  },

  {
    title: '一起出去玩',
    imageUrl: 'img/icons/re-02.png',
    jump: 'docs/life/play/go-out-and-play',
    description: (
      <>
        不走心的游记
      </>
    ),
  },

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
      // title={`Hello from ${siteConfig.title}`}
      title={``}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img src="img/personal/computer.png" className="computer-img" alt="0 error(s),0 warning(s)"></img>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <p className="hero__subtitle">Hi I'm rcxxx 👋</p>
          <p className="hero__subtitle">very interested in CV & ML & DL</p>
          <p className="hero__subtitle">🤔 I'm studying, but I'm lazy</p>
          <p className="hero__subtitle">There are some documents recorded here</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Docs 🌈Portal
            </Link>
          </div>
        </div>
      </header>
      
      <header className={styles.socialIcon}>
        <link href="https://cdn.bootcss.com/font-awesome/5.11.2/css/all.css" rel="stylesheet" />
        <div>
          <ul className={styles.social_icon_custom_ul}>
            {/* github icon */}
            <li className={styles.social_icon_custom_li}>
              <a className={styles.social_icon_custom_li_a} href="https://github.com/rcxxx" target="_blank">
                <GitHub_icon />
              </a>
            </li>
            
            {/* bilibili icon */}
            <li className={styles.social_icon_custom_li}>
              <a className={styles.social_icon_custom_li_a} href="https://space.bilibili.com/373512714" target="_blank">
                <Bilibili_icon />
              </a>
            </li>
            
            <li className={styles.social_icon_custom_li}>
              <a className={styles.social_icon_custom_li_a}>
                <div className={`dropdown ${styles.dropdown} dropdown--hoverable`}>
                  <_qq_icon />
                  <img
                    width="50%"
                    className={`dropdown__menu ${styles.dropdown__menu}`}
                    src={useBaseUrl("https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/qr-code/qq.jpg")}
                  />
                </div>
              </a>
            </li>
            
            <li className={styles.social_icon_custom_li}>
              <a className={styles.social_icon_custom_li_a}>
                <div className={`dropdown ${styles.dropdown} dropdown--hoverable`}>
                  <Wechat_icon />
                  <img
                    width="50%"
                    className={`dropdown__menu ${styles.dropdown__menu}`}
                    src={useBaseUrl("https://pictures-1304295136.cos.ap-guangzhou.myqcloud.com/qr-code/wechat.jpg")}
                  />
                </div>
              </a>
            </li>
          
          </ul>
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
