import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="body">
      <div className="content">
        <h1 style={{ textAlign: 'left' }}>Error 404</h1>
        <h2 style={{ textAlign: 'left' }}>
          Woah! looks like that page wasn't found!
        </h2>
        <p>
          <Link to={'..'}>Click Here</Link> to go back, or{' '}
          <Link to="/">Click Here to go home.</Link>
        </p>
      </div>
    </div>
  );
};

export { NotFound };
