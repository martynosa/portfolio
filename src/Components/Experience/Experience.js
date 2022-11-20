import Certificates from './Certificates';
import classes from './Experience.module.css';
import Synopsis from './Synopsis';
import Projects from './Projects';

const Experience = ({ certificates, projects }) => {
  return (
    <div className={classes['experience-container']}>
      <Synopsis />
      <Certificates certificates={certificates} />
      <Projects projects={projects} />
    </div>
  );
};

export default Experience;
