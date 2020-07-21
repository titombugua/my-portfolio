import React from 'react';
import './App.css';
import { Layout, Navigation, Header, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom'


function App() {
  return (
    <div>
    <Layout fixedHeader>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Julius-   Mbugua</Link>} scroll>
            <Navigation>
                <Link to="/about">About</Link>
                <Link to="/projects">Portfolio</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        {/* <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
            <Navigation>
            <Link to="/about">About</Link>
                <Link to="/projects">Portfolio</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer> */}

        <Content>
            <div className='page-content'/>
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
