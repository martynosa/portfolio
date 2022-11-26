import { useId } from 'react';

import classes from './Experience.module.css';

import Link from './Reusable/Link';

const Synopsis = () => {
  const id = useId();

  const pages = [
    { name: 'Certificates', link: '#certificates' },
    { name: 'Projects', link: '#projects' },
  ];

  return (
    <div className={`${classes.container} ${classes.synopsis}`}>
      <h2 className={classes.title}>Experience</h2>
      <div className={classes['link-group']}>
        {pages.map((p, i) => {
          return (
            <Link
              item={p}
              key={`${i}-${id}`}
              helperClass={classes['synopsis-link']}
              newTab={false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Synopsis;
