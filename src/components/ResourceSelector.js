import React from "react";
import ReactGA from "react-ga";
import { connect } from "react-redux";
import { 
    togglePhlaskType, 
    PHLASK_TYPE_WATER, 
    PHLASK_TYPE_FOOD,
    PHLASK_TYPE_FORAGING,
    PHLASK_TYPE_BATHROOMS } from '../actions'

function ResourceSelector(props){
    return (
        <div>viewResources is true
            {/* Water Resource Button*/}
            <div>
                <button 
                onClick={() => {
                    props.togglePhlaskType(PHLASK_TYPE_WATER)
                    props.resourceToggleHandler();
                }}
                
                >WATER</button>
            </div>
            
            {/* Food Resource Button*/}
            <div>
                <button 
                onClick={() => {
                    props.togglePhlaskType(PHLASK_TYPE_FOOD)
                    props.resourceToggleHandler();
                }}>
                FOOD</button>
            </div>

            {/* Foraging Resource Button*/}
            <div>
                <button 
                onClick={() => {
                    props.togglePhlaskType(PHLASK_TYPE_FORAGING)
                    props.resourceToggleHandler();
                }}
                >FORAGING</button>
            </div>

            {/* Bathrooms Resource Button*/}
            <div>
                <button 
                onClick={() => {
                    props.togglePhlaskType(PHLASK_TYPE_BATHROOMS)
                    props.resourceToggleHandler();
                }}
                >BATHROOMS</button>
            </div>
        </div>
    );
}

const mapDispatchToProps = { togglePhlaskType, PHLASK_TYPE_FOOD, PHLASK_TYPE_WATER};

export default connect(null,mapDispatchToProps)(ResourceSelector);
