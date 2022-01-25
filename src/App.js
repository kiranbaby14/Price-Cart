import './App.css';
import React from 'react';
import Card from './components/card';

//------details to be entered into the card----------
let data = [{
  id: 0,
  type: 'FREE',
  price: 0,
  users: 'Single User',
  storage: '5GB Storage',
  projects: false,
  phnSupport: false,
  subdomainType: 'Free Subdomain',
  subdomain: false,
  stausReports: false
},
{
  id: 1,
  type: 'PLUS',
  price: 9,
  users: <strong>5 Users</strong>,
  storage: '50GB Storage',
  projects: true,
  phnSupport: true,
  subdomainType: 'Free Subdomain',
  subdomain: true,
  stausReports: false
},

{
  id: 2,
  type: 'PRO',
  price: 49,
  users: <strong>Unlimited Users</strong>,
  storage: '150GB Storage',
  projects: true,
  phnSupport: true,
  subdomainType: <span><strong>Unlimited</strong> Free Subdomains</span>,
  subdomain: true,
  stausReports: true
}
];


function App() {
  return <>
          <section className="pricing py-5">
            <div className="container">
              <div className="row">

                  {data.map(element => <Card details={element} key={element.id}/>,<Card/>)}
                
              </div>
            </div>
          </section>
  </>
 
  
}

export default App;
