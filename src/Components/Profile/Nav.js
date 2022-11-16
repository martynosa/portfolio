import classes from './Nav.module.css';

const Nav = ({ github, linkedIn }) => {
  return (
    <nav className={classes.nav}>
      <a
        className={classes.link}
        href={github}
        target="_blank"
        rel="noreferrer"
      >
        <img className={classes.icon} src="./svg/github.svg" alt="github" />
        Github
      </a>
      <a
        className={classes.link}
        href={linkedIn}
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
