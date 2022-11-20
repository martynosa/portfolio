import classes from './Link.module.css';

const Link = ({ item, helperClass, newTab }) => {
  let arrowLinkClass = classes['arrow-link'];
  if (helperClass) arrowLinkClass = `${arrowLinkClass} ${helperClass}`;

  return (
    <div className={arrowLinkClass}>
      <span>&rarr;</span>
      <a href={item.link} target={newTab ? '_blank' : ''} rel="noreferrer">
        {item.name}
      </a>
      <span>&larr;</span>
    </div>
  );
};

export default Link;
