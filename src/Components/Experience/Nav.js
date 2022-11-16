import classes from './Nav.module.css';

const Nav = () => {
  return (
    <div className={classes['nav']}>
      <div className={classes.content}>
        <h2 className={classes.title}>Experience</h2>

        <div className={classes['link-group']}>
          <div className={classes.arrow}>
            <span>&rarr;</span>
            <div className={classes.link}>
              <a href="#certificates">Certificates</a>
              <div className={classes.border} />
            </div>
          </div>

          <div className={classes.arrow}>
            <span>&rarr;</span>
            <div className={classes.link}>
              <a href="#projects">Projects</a>
              <div className={classes.border} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
