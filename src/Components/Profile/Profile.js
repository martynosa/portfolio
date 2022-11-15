import classes from './Profile.module.css';

import Nav from './Nav';
import Summary from './Summary/Summary';

const Profile = () => {
  return (
    <div className={classes['profile-container']}>
      <Nav />
      <Summary />
    </div>
  );
};

export default Profile;
