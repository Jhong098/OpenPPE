import React from "react";

// .SectionComponent {
//     // Add light border if two white
//     // sections next to each other.
//     .is-white + &.is-white {
//       border-top: 1px solid #F0F0F0;
//     }
//   }

function Section(props) {
  const {
    color,
    size,
    children,
    // Passed to section element
    ...otherProps
  } = props;

  return (
    <section
      className="px-2 py-10 flex flex-col items-center justify-between"
      {...otherProps}
    >
      {props.children}
    </section>
  );
}

export default Section;
