'use client';

const Paragraph = ({ children }) => {
  return (
    <div>
      <p>
        This is a simple paragraph component. It can be used to display text
        content in a structured way. You can customize the styles and content
        as needed.
      </p>
      <p>
        You can also add more paragraphs or other HTML elements to enhance the
        content presentation.
      </p>
      {children}
    </div>
  );
}

export default Paragraph;