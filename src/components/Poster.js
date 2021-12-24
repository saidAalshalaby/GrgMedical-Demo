import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getByDisplayValue } from '@testing-library/dom'
import React from 'react'

function Poster(props) {
    console.log(props.content)
    return (
        
        <div className="statistics-container">
            <div className="statistics-background">
                <div style={{display:"flex"}}>
                    <div className="poster-container">
                    <FontAwesomeIcon style={{color:"#fff",margin:" 30px 0 50px 0 "}} className="icon-check" icon={faCheck}  size="3x"></FontAwesomeIcon>
                    <p className="poster-text">Take care of your health and your environment with our certified disinfection products.</p>
                    <a className="button-info" href="#"><i></i>More Info</a>
                    </div>    
                </div>         
            </div>
        </div>
    )
}

export default Poster
