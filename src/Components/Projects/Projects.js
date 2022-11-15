import classes from './Projects.module.css';

const Projects = () => {
  return (
    <div className={classes['experience-container']}>
      <div className={classes['nav']}>
        <div className={classes.content}>
          <h2 className={classes.title}>Experience</h2>

          <div className={classes['link-group']}>
            <div className={classes.arrow}>
              <span>&rarr;</span>
              <div className={classes.link}>
                <a href="#certificates">Certificates</a>
                <div className={classes.border} />
              </div>
            </div>

            <div className={classes.arrow}>
              <span>&rarr;</span>
              <div className={classes.link}>
                <a href="#projects">Projects</a>
                <div className={classes.border} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="certificates" className={classes.certificates}>
        <div className={classes.content}>
          <h2 className={classes.title}>Experience</h2>
        </div>
      </div>

      <div id="projects" className={classes.projects}>
        <div className={classes.content}>
          <h2 className={classes.title}>projects</h2>
        </div>
      </div>
    </div>
  );
};

export default Projects;
