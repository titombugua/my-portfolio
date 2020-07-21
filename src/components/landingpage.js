import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin:'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img 
                        src='https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-male-circle2-512.png'
                        alt='avatar'
                        className='avatar-img'
                        />
                        <div className='banner-text'>
                            <h1>Full Stack Web Developer </h1>
                            <hr/>
                            <p> Python | Django | Javascript | React | Nodejs </p>
                            

                        </div>
                    </Cell>

                </Grid>


            </div>
        )
    }
}

export default LandingPage;