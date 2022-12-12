import { useId } from 'react';

import classes from './Experience.module.css';

import Project from './Reusable/Project';

const Projects = ({ projects }) => {
  const id = useId();

  return (
    <div id="projects" className={`${classes.container} ${classes.projects}`}>
      <h2 className={classes.title}>Projects</h2>
      <div className={classes.grid}>
        {projects.map((p, i) => {
          if (p.isVisible) {
            return <Project item={p} key={`${i}-${id}`} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Projects;
