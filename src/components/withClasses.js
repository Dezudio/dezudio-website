import * as React from 'react';

// Returns a component that renders `Tag` with a fixed set of Tailwind
// classes. A className passed where the component is used is appended.
//
// Classes are not merged: when two classes set the same property, the
// stylesheet order decides, not the order here. Components that extend
// another component therefore list their full, already-resolved classes
// instead of wrapping the base component.
const withClasses = (Tag, classes) => {
  const base = classes.trim().split(/\s+/).join(' ');
  return ({ className, ...props }) => (
    <Tag className={className ? `${base} ${className}` : base} {...props} />
  );
};

export default withClasses;
