import {Route} from 'react-router-dom' 
import React from 'react'

import Mounting from "./Pages/mounting"
import Updating from "./Pages/updating"
import Unmounting from  "./Pages/unmounting"
import Mainheader from "./components/Mainheader"
function App() {
  return ( <div>
    
      <Mainheader/>
      <main>
      <Route path="/mounting"> <Mounting/> </Route>
      <Route path="/updating"> <Updating/> </Route>
      <Route path="/unmounting"> <Unmounting/> </Route>
      </main>
    </div>
   

  );
}

export default App;
