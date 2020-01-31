import React, { Fragment, useState } from 'react';
import nav from '../../../img/navbar.png'
import Contact1 from '../../../img/contact1.png'
import Contact2 from '../../../img/contact2.png'
import './styles.css'
import Phone from '../../../img/phone.png'
import Message from '../../../img/message.png'
import ubica from '../../../img/ubica.png'
import { Redirect } from 'react-router-dom';
import Axios from 'axios'

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// CommonJS


const index = (props) => {
    
    
    
    
    

    const [errors, seterrors] = useState('')

    console.log('props.datos.email', props.datos.email)
    
    
    const handleBlur = () => {
        if(errors !== '')
        seterrors(props.datos)
    }
    

    const handleSubmit = (event) =>{
        event.preventDefault()

           
        
            seterrors(props.datos)
        

        if (props.datos.name !== '' && props.datos.phone !== '' && props.datos.email !== '' && props.datos.message !== '' ){

            if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(props.datos.email)){
                console.log("La dirección de email " + props.datos.email + " es correcta.");
               } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Invalid email!',
                  })
               }

           
        
        Axios
        .post('http://192.168.1.61:3000/enviar/', props.datos, props.typesCards)
        .then(response => {
          if(response.data.ok){
            Swal.fire(
                'Sended!',
                'We will contact you',
                'success',
                

              )
            props.setdatos({
                name: '',
                phone: '',
                email: '',
                message: '',
                type: '' 
            })
            props.settypesCards('')
          }
        }).catch(e => {
            console.log('hubo error revisar network')
        })
     } 
    }


    return (

        props.typesCards  === '' ? <Redirect to='/'/> :

        <Fragment>
        <div className='container'> 
        
            <img src={nav} width='100%' className='navbar' alt=""/>
            <div className="bottom"></div>
      
    
            <div className='row-contact'>

            <img className='cimg' src={Contact1} width='22%'/>
              
                    <div className="c-contact">
                        
                        <div  className="title-contact">Contact us!</div>
                        <div className="text-card">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, odio doloremque, vero eligendi harum dolorem minima cupiditate nobis modi rem expedita enim aliquam voluptatem ea. 
                        </div>

                        <form>
                            <input onChange={e => {props.setdatos({...props.datos, name:e.target.value})}} type='text' required 
                            onBlur={handleBlur}           placeholder='Name' id='name' />
                            {errors.name === '' && <label>Please fill this field</label>}
                            <input onBlur={handleBlur}  onChange={e => {props.setdatos({...props.datos, phone:e.target.value})}} type='number' required placeholder='Phone' id='tel'/>
                            {errors.phone === '' && <label>Please fill this field</label>}
                            <input onBlur={handleBlur}  onChange={e => {props.setdatos({...props.datos, email:e.target.value})}} type='email' required placeholder='Email' id='email' />
                            {errors.email === '' && <label>Please fill this field</label>}
                            <textarea onBlur={handleBlur}  onChange={e => {props.setdatos({...props.datos, message:e.target.value})}} placeholder='Comment' required rows="6" id='comment'/>
                            {errors.message === '' && <label>Please fill this field</label>}
                            <button onClick={handleSubmit} id='boton' >Send</button>
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