import { useTypewriter, Cursor } from 'react-simple-typewriter';

import classes from './Profile.module.css';

const Profile = () => {
  const [text] = useTypewriter({
    words: ['Martin Enev'],
    loop: 0,
  });

  return (
    <div className={classes['profile-container']}>
      <nav className={classes.nav}>
        <a
          href="https://github.com/martynosa/"
          target="_blank"
          rel="noreferrer"
        >
          <ion-icon name="logo-github"></ion-icon>
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/martynosa/"
          target="_blank"
          rel="noreferrer"
        >
          <ion-icon name="logo-linkedin"></ion-icon>
          LinkedIn
        </a>
      </nav>

      <div className={classes.content}>
        <img src="/img/Profile-image-tall.jpg" alt="mugshot" />

        <h1>
          {text}
          <Cursor cursorColor={'#7048e8'} />
        </h1>

        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default Profile;
