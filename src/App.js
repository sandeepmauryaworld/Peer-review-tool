import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Admin from './Pages/Admin';
import Feedback from "./Pages/Feedback";
import Listing from "./Pages/Listing";
// import List from './Pages/List';
// import Feedback from './Pages/Feedback';
// import './App.css';
// import Listing from './Pages/Listing';
// import Avp from './Pages/Avp';
// import List from './Pages/List';
// import Feed from './Pages/Feed';
// import View from './Pages/View';
// import Feda from './Pages/Feda';
// import Actual from './Pages/Actual';
// import Fsubmit from './Pages/Fsubmit';






function App() {



  return (
    

    <div>
      
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Admin/>} />
  <Route path="feedback" element={<Feedback/>} />
  <Route path="listing" element={<Listing/>} />
</Routes>
    </BrowserRouter>
     </div>

    
  );
}

export default App;
