import { useId } from 'react';

import expClasses from './Experience.module.css';

import Link from './Reusable/Link';

const Certificates = ({ certificates }) => {
  const id = useId();

  const certificatesArr = [...certificates.softuni, ...certificates.udemy];

  return (
    <div id="certificates" className={expClasses.container}>
      <h2 className={expClasses.title}>Certificates</h2>
      <div className={expClasses['link-group']}>
        {certificatesArr.map((c, i) => {
          return (
            <Link
              item={c}
              key={`${i}-${id}`}
              helperClass={expClasses['certificates-link']}
              newTab={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;
