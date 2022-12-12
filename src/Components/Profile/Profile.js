import { useState } from 'react';

import classes from './Profile.module.css';

import Nav from './Nav';
import Summary from './Summary/Summary';

const Profile = ({ profile }) => {
  const { github, linkedIn, name, summary } = profile;

  const [isDark, setIsDark] = useState(true);

  const containerClass = isDark
    ? `${classes['profile-container']} ${classes['dark-mode']}`
    : `${classes['profile-container']} ${classes['light-mode']}`;

  const switchThemeHandler = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={containerClass}>
      <Nav
        github={github}
        linkedIn={linkedIn}
        switchThemeHandler={switchThemeHandler}
        isDark={isDark}
      />
      <Summary name={name} summary={summary} />
    </div>
  );
};

export default Profile;
