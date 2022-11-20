import Profile from './Components/Profile/Profile';
import Experience from './Components/Experience/Experience';

import martin from './martin';

function App() {
  const { profile, certificates, projects } = martin;

  return (
    <section className="container">
      <Profile profile={profile} />
      <Experience certificates={certificates} projects={projects} />
    </section>
  );
}

export default App;
