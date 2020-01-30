import React, { Fragment } from 'react';
import './styles.css';
import nav from '../../../img/navbar.png'
import Medical from '../../../img/medical.png'
import Consultancy from '../../../img/consultancy.png'
import landingimg from '../../../img/Landingimg.png'
import Research from '../../../img/research.png'

const index = () => {

    

    return (
        <Fragment>
        <div className='container'> 
        
            <img src={nav} width='100%' className='navbar' alt=""/>
            
      
    
            <div className='row'>
                <div className='cards'>
                    <div className="card">
                        <img className='img-card' src={Medical} width='30%' />
                        <p className='title-card'>Medical Consultation</p>
                        <p className='text-card'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, consequatur? Laboriosam consectetur delectus soluta quaerat nam placeat.
                        </p>
                        <button className='btn-card'>
                            Lorem ipsum
                        </button>
                    </div>

                    <div className="card">
                        <img className='img-card' src={Consultancy} width='30%' />
                        <p className='title-card'>Consultancy</p>
                        <p className='text-card'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, consequatur? Laboriosam consectetur delectus soluta quaerat nam placeat.
                        </p>
                        <button className='btn-card'>
                            Lorem ipsum
                        </button>
                    </div>

                    <div className="card">
                        <img className='img-card' src={Medical} width='30%' />
                        <p className='title-card'>Research</p>
                        <p className='text-card'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, consequatur? Laboriosam consectetur delectus soluta quaerat nam placeat.
                        </p>
                        <button className='btn-card'>
                            Lorem ipsum
                        </button>
                    </div>
                </div>

                <img className='landing-img' src={landingimg} width='33%'/>
            </div>
        </div>
        </Fragment>
    );
};

export default index;