import './App.scss';
// import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Layout1 from './components/Layouts/Layout1';
import Header from './mycomponents/Header/Header';
import Layout from './mycomponents/Layouts/Layout1/layout';

import Layout2 from './mycomponents/Layouts/Layout2/Layout2';
import Layout3 from './mycomponents/Layouts/Layout3/Layout3';
import Footer from './mycomponents/Footer/Footer';
import Layout4 from './mycomponents/Layout4/Layout';
import Layout5 from './mycomponents/Layout5/Layout5';

function App() {
  return (
    // <div className="App">
    //  <Header />
    //  <Layout1/>
    // </div>
    <div>
<Header/>
<Layout/>
<Layout2/>
<Layout3/>
<Layout4/>
<Layout5/>
<Footer/>

    </div>
  );
}

export default App;
