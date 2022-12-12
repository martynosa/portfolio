import { useId } from 'react';

import classes from './Experience.module.css';

import Link from './Reusable/Link';

const Certificates = ({ certificates }) => {
  const id = useId();

  const entries = Object.entries(certificates);

  return (
    <div id="certificates" className={classes.container}>
      <h2 className={classes.title}>Certificates</h2>
      <div className={classes['link-group']}>
        {entries.map((e) => {
          return (
            <>
              <h3 className={classes.organization}>{e[0]}</h3>
              {e[1].map((c, i) => {
                if (c.isVisible) {
                  return (
                    <Link
                      item={c}
                      key={`${i}-${id}`}
                      helperClass={classes['certificates-link']}
                      newTab={true}
                    />
                  );
                }
                return null;
              })}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;
