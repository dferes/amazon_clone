import React from 'react';
import './Home.css';
import Product from './Product';


const Home: React.FC = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img 
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt=''
          className='home__image'
        />  

        <div className='home__row'>
          <Product
            key={1} 
            id={1}
            title={'The Lean Startup'} 
            price={19.99}
            image={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'}
            rating={4}
          />
          <Product
            key={2} 
            id={2}
            title={'Fuck You, The Story'} 
            price={279.99}
            image={'https://i.redd.it/js2agifhb7xx.jpg'}
            rating={3}
          />
          <Product
            key={9} 
            id={9}
            title={"Dynamic Programming and Optimal Control"} 
            price={79.99}
            image={'https://images-na.ssl-images-amazon.com/images/I/51A-1LyVwdL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'}
            rating={4}
          />
        </div>

        <div className='home__row'>
          <Product 
            key={3}
            id={3}
            title={'Look, A Fucking Toaster!'} 
            price={999.99}
            image={'https://www.bestkitchengadgets.co.uk/wp-content/uploads/2015/01/Russell-Hobbs-19160-Heritage-4-Slice-Toaster-Metallic-Red.jpg'}
            rating={1}
          />
          <Product
            key={4} 
            id={4}
            title={"It's Some kind of Thing"} 
            price={0.99}
            image={'https://img.talkandroid.com/uploads/2018/03/Acer-Chromebook-Tab-10-D651N_front-facing-left-horizontal.jpg'}
            rating={4}
          />
          <Product 
            key={5}
            id={5}
            title={"Amazon"} 
            price={10000000000.99}
            image={'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/03/most-powerful-supercomputer.jpg'}
            rating={1}
          />
        </div>  
        <div className='home__row'>
        <Product 
            key={7}
            id={7}
            title={"Data-Driven Science and Engineering"} 
            price={62.99}
            image={'https://images-na.ssl-images-amazon.com/images/I/511GHkkBAeL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'}
            rating={1}
          />
        </div>
      
      </div>    
    </div>
  )
};

export default Home;