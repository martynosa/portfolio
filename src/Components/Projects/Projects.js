import classes from './Projects.module.css';

const Projects = () => {
  return (
    <div className={classes['projects-container']}>
      <div className={classes['project-container']}>
        <img
          className={classes.image}
          src="/img/jayson-hinrichsen-PTXO7a35rFY-unsplash.jpg"
          alt="project screenshot"
        />
      </div>

      <div className={classes['project-container']}>
        <img
          className={classes.image}
          src="/img/olena-sergienko-a54BiGFA9Ws-unsplash.jpg"
          alt="project screenshot"
        />
      </div>
    </div>
  );
};

export default Projects;
