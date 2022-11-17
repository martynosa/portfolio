import classes from './Synopsis.module.css';

const Synopsis = () => {
  return (
    <div className={classes['synopsis']}>
      <div className={classes.content}>
        <h2 className={classes.title}>Experience</h2>

        <div className={classes['link-group']}>
          <div className={classes.arrow}>
            <span>&rarr;</span>
            <a className={classes.link} href="#certificates">
              Certificates
              <div className={classes.border} />
            </a>
            <span>&larr;</span>
          </div>

          <div className={classes.arrow}>
            <span>&rarr;</span>
            <a className={classes.link} href="#projects">
              Projects
              <div className={classes.border} />
            </a>
            <span>&larr;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Synopsis;
