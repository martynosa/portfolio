import { useId } from 'react';

import expClasses from './Experience.module.css';

import Link from './Reusable/Link';

const Synopsis = () => {
  const id = useId();

  const pages = [
    { name: 'Certificates', link: '#certificates' },
    { name: 'Projects', link: '#projects' },
  ];

  return (
    <div className={`${expClasses.container} ${expClasses.synopsis}`}>
      <h2 className={expClasses.title}>Experience</h2>
      <div className={expClasses['link-group']}>
        {pages.map((p, i) => {
          return (
            <Link
              item={p}
              key={`${i}-${id}`}
              helperClass={expClasses['synopsis-link']}
              newTab={false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Synopsis;
