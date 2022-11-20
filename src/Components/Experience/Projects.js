import { useId } from 'react';

import expClasses from './Experience.module.css';

import Project from './Reusable/Project';

const Projects = ({ projects }) => {
  const id = useId();

  return (
    <div
      id="projects"
      className={`${expClasses.container} ${expClasses.projects}`}
    >
      <h2 className={expClasses.title}>Projects</h2>
      <div className={expClasses.grid}>
        {projects.map((p, i) => {
          return <Project item={p} key={`${i}-${id}`} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
