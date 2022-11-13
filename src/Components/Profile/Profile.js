import classes from './Profile.module.css';

import Nav from './Nav';
import Stack from './Stack';
import Description from './Description';

const Profile = () => {
  return (
    <div className={classes['profile-container']}>
      <Nav />

      <Description />

      <Stack />
    </div>
  );
};

export default Profile;
