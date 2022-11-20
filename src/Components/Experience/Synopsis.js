import classes from './Synopsis.module.css';

const Synopsis = () => {
  return (
    <div className={classes['synopsis']}>
      <h2 className={classes.title}>Experience</h2>
      <div className={classes.content}>
        <div className={classes['link-group']}>
          <div className={classes.arrow}>
            <span>&rarr;</span>
            <a className={classes.link} href="#certificates">
              Certificates
            </a>
            <span>&larr;</span>
          </div>

          <div className={classes.arrow}>
            <span>&rarr;</span>
            <a className={classes.link} href="#projects">
              Projects
            </a>
            <span>&larr;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Synopsis;
