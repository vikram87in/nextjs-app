const ServerParagraph = ({ children }) => {
  // cant use hooks in server components
  // const [state, setState] = useState('initial state');  ❌
  return (
    <div>
      <p>
        This is a server paragraph component.It will be passed as children to a client component.
      </p>
    </div>
  );
}

export default ServerParagraph;