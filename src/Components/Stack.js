import classes from './Stack.module.css';

const Stack = () => {
  return (
    <div className={classes['stack-container']}>
      <h2>
        <span>Tech stack</span>
      </h2>
      <div className={classes.tech}>
        <img src="./svg/html.svg" alt="html" />
        <img src="./svg/css.svg" alt="css" />
        <img src="./svg/javascript.svg" alt="javascript" />
        <img src="./svg/typescript.svg" alt="typescript" />
        <img src="./svg/nodejs.svg" alt="nodejs" />
        <img src="./svg/express.svg" alt="express" />
        <img src="./svg/git.svg" alt="git" />
        <img src="./svg/react.svg" alt="react" />
        <img src="./svg/redux.svg" alt="redux" />
        <img src="./svg/angular.svg" alt="angular" />
      </div>
    </div>
  );
};

export default Stack;
