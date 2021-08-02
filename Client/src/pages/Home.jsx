import { useContext, useState } from 'react';
import Navbar from '../components/Navbar'
import Login from '../components/Login'
import Register from '../components/Register'
import { UserContext } from '../contexts/userProvider';

const Home = () => {
  const { user }  = useContext(UserContext)
  const [state, setState] = useState("login")
  

  const handleState = (state) => {
    setState(state)
  }

  const renderByState = () =>{
    if(!user){
      if(state === "login"){
        return <Login onChange={handleState}/>
      } else {
        return <Register onChange={handleState}/>
      }
    }
  }

  
  return (
    <main>
      <Navbar />
      { renderByState() }
    </main>
  );
}
 
export default Home;