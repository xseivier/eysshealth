import React, { Fragment } from 'react';
import nav from '../../../img/navbar.png'
import Contact1 from '../../../img/contact1.png'
import Contact2 from '../../../img/contact2.png'
import './styles.css'
import Phone from '../../../img/phone.png'
import Message from '../../../img/message.png'
import ubica from '../../../img/ubica.png'

const index = () => {

    

    return (
        <Fragment>
        <div className='container'> 
        
            <img src={nav} width='100%' className='navbar' alt=""/>
            <div className="bottom"></div>
      
    
            <div className='row-contact'>

            <img className='cimg' src={Contact1} width='22%'/>
              
                    <div className="card c">
                        <div className="title-contact">Contact us!</div>
                        <div className="text-card">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, odio doloremque, vero eligendi harum dolorem minima cupiditate nobis modi rem expedita enim aliquam voluptatem ea. 
                        </div>

                        <form>
                            <input type='text' required placeholder='Name' />
                            <input type='tel' required placeholder='Phone' />
                            <input type='email' required placeholder='Email' />
                            <textarea placeholder='Comment' required rows="4" />
                            <button>Send</button>
                        </form>

                        <div>

                        <div className='icont'>
                            <img src={Phone} width='20px' alt='#' />
                            <div className="i-tex">proyectos ajenos</div>                      
                        </div>

                        <div className='icont'>
                             <img src={Message} width='20px' alt='#' />
                             <div className="i-tex">proyectos ajenos</div> 
                        </div>

                        <div className='icont'>
                             <img src={ubica} width='20px' alt='#' />
                             <div className="i-tex">proyectos ajenos</div> 
                        </div>
                        </div>

                    </div>
               

                <img className='cimg' src={Contact2} width='22%'/> 

            </div>
        </div>
        </Fragment>
    );
};

export default index;