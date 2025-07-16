import { Link, NavLink} from 'react-router-dom';

function Navbar() {
 
  return (
    <header className="">
    <nav className="flex gap-4 py-4 items-center px-2 text-white font-bold bg-blue-900 mb-4">
      {/* Brand or Logo */}
      <h1 className="text-2xl font-bold mr-2 lg:mr-6">JobHunt</h1>

      {/* Home Link */}
      <NavLink
      
      
         to="/jobhunt"
        className={({ isActive }) =>
          `relative ${isActive ? 'after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-white' : ''}`
        }>
          Home
      </NavLink>

      {/* Favourites Link */}
      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          `relative ${isActive ? 'after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-white' : ''}`
        }>
      
        Favourites
        
      </NavLink>
      
    </nav>
    
    </header>
  );
}

export default Navbar;
