import Certificates from './Certificates';
import classes from './Experience.module.css';
import Synopsis from './Synopsis';
import Projects from './Projects';

const Experience = ({ certificates }) => {
  return (
    <div className={classes['experience-container']}>
      <Synopsis />
      <Certificates certificates={certificates} />
      <Projects />
    </div>
  );
};

export default Experience;
