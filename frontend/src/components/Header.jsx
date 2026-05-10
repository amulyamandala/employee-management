import { NavLink } from "react-router"

function Header() {
  return (
  <nav className="w-full h-20 bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
    <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
     
      <div className="text-xl font-bold text-gray-800">EMPLOYEE MANAGEMENT</div>

      <ul className="flex items-center gap-8 text-lg font-medium">
        <li>
          <NavLink 
            to='/' 
            className={({isActive}) => 
              `transition-colors duration-200 hover:text-blue-500 ${isActive ? "text-blue-600" : "text-gray-600"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='create-emp' 
            className={({isActive}) => 
              `transition-colors duration-200 hover:text-blue-500 ${isActive ? "text-blue-600" : "text-gray-600"}`
            }
          >
            Employee Details
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='list' 
            className={({isActive}) => 
              `transition-colors duration-200 hover:text-blue-500 ${isActive ? "text-blue-600" : "text-gray-600"}`
            }
          >
            List of Employees
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
}

export default Header