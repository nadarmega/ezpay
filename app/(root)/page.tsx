import HeaderBox from '@/components/HeaderBox';
import TotalBalaneBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';
import React from 'react'


const Home = () => {

    const loggedIn ={ firstName: 'Aashika', lastName: 'Nadar', email:'contact@xyz.com'};
  return (
    <section className="home">
      <div className= "home-content">
        <header className="home-header">
            <HeaderBox
            type="greeting"
            title="Welcome"
            user= {loggedIn?.firstName || 'Guest'}
            subtext = "Access and manage your account and transactions efficiently."
            />
            <TotalBalaneBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1258.36}
            />

        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar 
      
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:123.50},{currentBalance:7000.91}]}
      />
    </section>
  )
}

export default Home
