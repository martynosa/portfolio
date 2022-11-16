import classes from './Synopsis.module.css';

const Synopsis = () => {
  return (
    <div className={classes['synopsis']}>
      <div className={classes.content}>
        <h2 className={classes.title}>Experience</h2>

        <div className={classes['link-group']}>
          <div className={classes.arrow}>
            <span>&rarr;</span>
            <div>
              <a className={classes.link} href="#certificates">
                Certificates
              </a>
              <div className={classes.border} />
            </div>
            <span>&larr;</span>
          </div>

          <div className={classes.arrow}>
            <span>&rarr;</span>
            <div>
              <a className={classes.link} href="#projects">
                Projects
              </a>
              <div className={classes.border} />
            </div>
            <span>&larr;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Synopsis;
