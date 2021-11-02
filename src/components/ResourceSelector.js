import React from "react";
import ReactGA from "react-ga";

function ResourceSelector(props){
    return (
        <div>viewResources is true
            {/* Water Resource Button*/}
            <div>
                <button 
                onClick={() => {
                    
                    props.resourceToggleHandler();
                }}
                
                >WATER</button>
            </div>
            
            {/* Food Resource Button*/}
            <div>
                <button 
                onClick={() => {
                    
                    props.resourceToggleHandler();
                }}>
                FOOD</button>
            </div>

            {/* Foraging Resource Button*/}
            <div>
                <button 
                onClick={() => {
                    
                    props.resourceToggleHandler();
                }}
                >FORAGING</button>
            </div>

            {/* Bathrooms Resource Button*/}
            <div>
                <button 
                onClick={() => {
                    
                    props.resourceToggleHandler();
                }}
                >BATHROOMS</button>
            </div>
        </div>
    );
}
export default ResourceSelector;