import classes from './Stack.module.css';

const Stack = () => {
  return (
    <div className={classes['stack-container']}>
      <h2 className={classes.question}>Tech stack?</h2>
      <div className={classes.tech}>
        <img className={classes.icon} src="/tech-svg/html.svg" alt="html" />
        <img className={classes.icon} src="/tech-svg/css.svg" alt="css" />
        <img
          className={classes.icon}
          src="/tech-svg/javascript.svg"
          alt="javascript"
        />
        <img
          className={classes.icon}
          src="/tech-svg/typescript.svg"
          alt="typescript"
        />
        <img className={classes.icon} src="/tech-svg/nodejs.svg" alt="nodejs" />
        <img
          className={classes.icon}
          src="/tech-svg/express.svg"
          alt="express"
        />
        <img className={classes.icon} src="/tech-svg/git.svg" alt="git" />
        <img className={classes.icon} src="/tech-svg/react.svg" alt="react" />
        <img className={classes.icon} src="/tech-svg/redux.svg" alt="redux" />
        <img
          className={classes.icon}
          src="./tech-svg/angular.svg"
          alt="angular"
        />
      </div>
    </div>
  );
};

export default Stack;
