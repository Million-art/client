import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Search from '@mui/icons-material/Search';
import Forget from './pages/Forget';
import Chat from './components/users/Chat';
import Admin from './components/users/Admin';
import Pharmaciest from './components/users/Pharmaciest';
import Drugiest from './components/users/Drugiest';
import { useState } from 'react';
function App(messages) {

  // const [search, setSearch] = useState('');
  // const [searchResults, setSearchResults] = useState([]);
 

  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  // };

  const [isAutenticated, setIsAutenticated] = useState(false);

   
  // handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAutenticated(!isAutenticated);
    Navigate('/login');
  };

   
  
  return (

    <div className='container'>
      <Router>
        <div className='nav'>
          <div className='logo'>
            <h1>Betselot Pharmacy</h1>
          </div>
          <div className='menu'>
            <ul>
              <li>
                <NavLink exact="true" to='/'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" to='/products'>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" to='/about'>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" to='/contact'>
                  Contact
                </NavLink>
              </li>
              {/* if else for users loged in  */}

              {!isAutenticated ?  <li>
                    <NavLink exact="true" to='/login'>
                      Login
                    </NavLink>
                    </li>:(() => {
        
                    if(messages.role === 'admin'){
                      <>
                        <li>
                          <NavLink exact="true" to='/admin'>
                            Admin Panel
                          </NavLink>
                        </li>
                        <li>
                          <button onClick={handleLogout}style={{width:75,height:30,fontSize:18,backgroundColor:'red',color:'white'}}>Logout</button>
                        </li>
                      </>
                    
                    }
                    else if(messages.role === 'pharmaciest'){
                    
                      <>  
                          <li>
                              <NavLink exact="true" to='/pharmaciest'>
                                View
                              </NavLink>
                          </li>
                          <li>
                              <button onClick={handleLogout}style={{width:75,height:30,fontSize:18,backgroundColor:'red',color:'white'}}>Logout</button>
                          </li>
                      </>
                    }
                    else if(messages.role === 'drugiest'){
                    
                      <>  
                          <li>
                              <NavLink exact="true" to='/drugiest'>
                                Manage Drug
                              </NavLink>
                          </li>
                          <li>
                              <button onClick={handleLogout}style={{width:75,height:30,fontSize:18,backgroundColor:'red',color:'white'}}>Logout</button>
                          </li>
                      </>
                    }
                    else if(messages.role === ''){
                      <>  
                          <li>
                              <NavLink exact="true" to='/chat'>
                                Chat
                              </NavLink>
                          </li>
                          <li>
                              <button onClick={handleLogout}style={{width:75,height:30,fontSize:18,backgroundColor:'red',color:'white'}}>Logout</button>
                          </li>
                      </>
                    }
                    else{
                     
                    }
         
                })()}
              
                     
              
              
                
              
            </ul>
          </div>

          <div className='search_login'>
            <div className='searchBox'>
              <input type='text' placeholder='search....' />
              <Search className='search-btn' />
            </div>
          </div>
        </div>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/login' element={<Login  />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forget' element={<Forget />} />
          <Route path='/chat' element={ <Chat />} />
          <Route path='/admin' element={ <Admin />} />
          <Route path='/pharmaciest' element={ <Pharmaciest />} />
          <Route path='/drugiest' element={ <Drugiest />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
