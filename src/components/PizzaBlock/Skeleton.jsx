import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className='pizza__block'
    speed={2}
    width={280}
    height={560}
    viewBox='0 0 280 465'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'>
    <rect x='-1' y='313' rx='9' ry='9' width='280' height='90' />
    <circle cx='147' cy='136' r='125' />
    <rect x='5' y='270' rx='11' ry='11' width='280' height='30' />
    <rect x='4' y='423' rx='9' ry='9' width='100' height='30' />
    <rect x='114' y='417' rx='9' ry='9' width='160' height='45' />
  </ContentLoader>
);

export default Skeleton;
