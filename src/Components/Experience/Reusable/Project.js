import classes from './Project.module.css';

const Project = ({ item, helperClass }) => {
  let projectClass = classes.project;
  if (helperClass) projectClass = `${projectClass} ${helperClass}`;

  return (
    <a
      href={item.link}
      className={projectClass}
      target="_blank"
      rel="noreferrer"
    >
      <h3>{item.name}</h3>
      <img src={`./projects/${item.name}.jpg`} alt={item.name} />
      <div />
    </a>
  );
};

export default Project;
