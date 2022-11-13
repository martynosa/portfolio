import classes from './Profile.module.css';

import Nav from './Nav';
import Description from './Description';

const Profile = () => {
  return (
    <div className={classes['profile-container']}>
      <Nav />
      <Description />
    </div>
  );
};

export default Profile;
