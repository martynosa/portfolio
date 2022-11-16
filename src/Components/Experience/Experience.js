import Certificates from './Certificates';
import classes from './Experience.module.css';
import Nav from './Nav';
import Projects from './Projects';

const Experience = () => {
  return (
    <div className={classes['experience-container']}>
      <Nav />
      <Certificates />
      <Projects />
    </div>
  );
};

export default Experience;
