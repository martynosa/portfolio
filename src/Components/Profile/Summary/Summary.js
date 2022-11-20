import { useTypewriter, Cursor } from 'react-simple-typewriter';

import classes from './Summary.module.css';
import Stack from './Stack';

const Summary = ({ name, summary }) => {
  const [text] = useTypewriter({
    words: [name],
    loop: 0,
  });

  return (
    <div className={classes.summary}>
      <img
        className={classes.mugshot}
        src="/img/Profile-image-square2.jpg"
        alt="mugshot"
      />

      <h1 className={classes.name}>
        {text}
        <Cursor cursorColor={'#f59f00'} />
      </h1>

      <h2 className={classes.question}>Who am I?</h2>
      <p className={classes.answer}>{summary}</p>

      <Stack />
    </div>
  );
};

export default Summary;
