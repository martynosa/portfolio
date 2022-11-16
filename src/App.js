import Profile from './Components/Profile/Profile';
import Experience from './Components/Experience/Experience';

import martin from './martin';

function App() {
  const { profile, certificates } = martin;

  return (
    <section className="container">
      <Profile profile={profile} />
      <Experience certificates={certificates} />
    </section>
  );
}

export default App;
