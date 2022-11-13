import { useTypewriter, Cursor } from 'react-simple-typewriter';

import classes from './Description.module.css';

const Description = () => {
  const [text] = useTypewriter({
    words: ['Martin Enev'],
    loop: 0,
  });

  return (
    <div className={classes.description}>
      <img src="/img/Profile-image-square2.jpg" alt="mugshot" />

      <h1>
        {text}
        <Cursor cursorColor={'#7048e8'} />
      </h1>

      <h2>Who am I?</h2>
      <p>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book.
      </p>
    </div>
  );
};

export default Description;