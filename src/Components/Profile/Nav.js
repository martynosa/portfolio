import classes from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <a href="https://github.com/martynosa/" target="_blank" rel="noreferrer">
        <img src="./svg/github.svg" alt="github" />
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/martynosa/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="./svg/linkedin.svg" alt="github" />
        LinkedIn
      </a>
    </nav>
  );
};

export default Nav;
