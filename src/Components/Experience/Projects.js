import classes from './Projects.module.css';

const Projects = ({ projects }) => {
  return (
    <div id="projects" className={classes.projects}>
      <h2 className={classes.title}>Projects</h2>
      <div className={classes.content}>
        <div className={classes.grid}>
          {projects.map((p) => {
            return (
              <a
                href={p.link}
                className={classes.project}
                target="_blank"
                rel="noreferrer"
              >
                <h3>{p.name}</h3>
                <img src={`./projects/${p.name}.jpg`} alt={p.name} />
                <div className={classes.border} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
