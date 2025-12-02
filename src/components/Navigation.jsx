import { Link } from 'react-router-dom';

function Navigation() {
    return (
      <div>
          <nav>
              <Link to="/">Home</Link>
              <Link to="/create-exercise">Create</Link>
          </nav>
      </div>
    );
  }
  
  export default Navigation;