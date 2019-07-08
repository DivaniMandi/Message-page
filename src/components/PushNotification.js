import React from 'react';
import LetterAvatars from './LetterAvatars';


export default function PushNotification(){

    return(
        <div class="align-items-center" style={Container.dimensions}>
        <div class="media">
        <div class="media-left">
        <figure>
        <LetterAvatars/>
        </figure>
        </div>
        <div class="media-content"  style={Container.styls}>
        <div class="content">
        <p>
            <strong>Divani Mandira</strong>
            <br></br>
            <small>
               Hi, Let's share a taxt?
            </small>
        </p>           
        </div>           
        </div>
        </div>
        </div>
    );
}

const Container ={
    dimensions: {
        radius:12,
        width:821, 
        height:65,
        boxShadow: '0 5px 16px 0px',
        backgroundColor:'#fff',  
      },
    styls:{
        padding:10, 
    }
}