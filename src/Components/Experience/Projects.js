import classes from './Projects.module.css';

const Projects = () => {
  return (
    <div id="projects" className={classes.projects}>
      <div className={classes.content}>
        <h2 className={classes.title}>Projects</h2>
        <div className={classes.grid}>
          <div className={classes.project}>
            <h3>Omnifood</h3>
            <img src="./projects/omnifood.jpg" alt="omnifood" />
            <p>Lorem ipsum dolor sit amet.</p>
            <div className={classes.border} />
          </div>

          <div className={classes.project}>
            <h3>Omnifood</h3>
            <img src="./projects/omnifood.jpg" alt="omnifood" />
            <p>Lorem ipsum dolor sit amet.</p>
            <div className={classes.border} />
          </div>

          <div className={classes.project}>
            <h3>Omnifood</h3>
            <img src="./projects/omnifood.jpg" alt="omnifood" />
            <p>Lorem ipsum dolor sit amet.</p>
            <div className={classes.border} />
          </div>

          <div className={classes.project}>
            <h3>Omnifood</h3>
            <img src="./projects/omnifood.jpg" alt="omnifood" />
            <p>Lorem ipsum dolor sit amet.</p>
            <div className={classes.border} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
