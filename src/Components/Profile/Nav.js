import classes from './Nav.module.css';

const Nav = ({ github, linkedIn, switchThemeHandler, isDark }) => {
  return (
    <nav className={classes.nav}>
      <div className={classes['links-container']}>
        <a
          className={classes.link}
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={classes.icon}
            src="/nav-svg/github.svg"
            alt="github"
          />
          Github
        </a>
        <a
          className={classes.link}
          href={linkedIn}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={classes.icon}
            src="/nav-svg/linkedin.svg"
            alt="github"
          />
          LinkedIn
        </a>
      </div>
      <button className={classes.themeBtn} onClick={switchThemeHandler}>
        {isDark && (
          <img className={classes.icon} src="/nav-svg/sun2.svg" alt="sun" />
        )}
        {!isDark && (
          <img className={classes.icon} src="/nav-svg/moon2.svg" alt="moon" />
        )}
      </button>
    </nav>
  );
};

export default Nav;
