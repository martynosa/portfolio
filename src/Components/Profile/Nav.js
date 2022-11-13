import classes from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <a
        className={classes.link}
        href="https://github.com/martynosa/"
        target="_blank"
        rel="noreferrer"
      >
        <img className={classes.icon} src="./svg/github.svg" alt="github" />
        Github
      </a>
      <a
        className={classes.link}
        href="https://www.linkedin.com/in/martynosa/"
        target="_blank"
        rel="noreferrer"
      >
        <img className={classes.icon} src="./svg/linkedin.svg" alt="github" />
        LinkedIn
      </a>
    </nav>
  );
};

export default Nav;
