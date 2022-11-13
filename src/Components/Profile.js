import classes from './Profile.module.css';

import Nav from './Nav';
import Stack from './Stack';
import Content from './Content';

const Profile = () => {
  return (
    <div className={classes['profile-container']}>
      <Nav />

      <Content />

      <Stack />
    </div>
  );
};

export default Profile;
