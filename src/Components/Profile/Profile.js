import classes from './Profile.module.css';

import Nav from './Nav';
import Summary from './Summary/Summary';

const Profile = ({ profile }) => {
  const { github, linkedIn, name, summary } = profile;

  return (
    <div className={classes['profile-container']}>
      <Nav github={github} linkedIn={linkedIn} />
      <Summary name={name} summary={summary} />
    </div>
  );
};

export default Profile;
