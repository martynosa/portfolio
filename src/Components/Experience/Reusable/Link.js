import classes from './Link.module.css';

const Link = ({ item, helperClass, newTab }) => {
  let arrowLinkClass = classes['arrow-link'];
  if (helperClass) arrowLinkClass = `${arrowLinkClass} ${helperClass}`;

  return (
    <a
      className={arrowLinkClass}
      href={item.link}
      target={newTab ? '_blank' : ''}
      rel="noreferrer"
    >
      <span>&rarr;</span>
      {item.name}
      <span>&larr;</span>
    </a>
  );
};

export default Link;
