import { useId } from 'react';
import classes from './Certificates.module.css';

const Certificates = ({ certificates }) => {
  const id = useId();

  const certificatesArr = [...certificates.softuni, ...certificates.udemy];

  return (
    <div id="certificates" className={classes.certificates}>
      <h2 className={classes.title}>Certificates</h2>
      <div className={classes.content}>
        <div className={classes['link-group']}>
          {certificatesArr.map((c, i) => {
            return (
              <div className={classes.arrow} key={`${i}-${id}`}>
                <span>&rarr;</span>
                <a
                  className={classes.link}
                  href={c.certificateLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {c.name}
                </a>
                <span>&larr;</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
