import React from 'react';
import { Button, Collapse } from 'react-bootstrap';
import CheckBox from './chechBoxes';
import SeachBar from './SeachBar' ;
import Dropdowns from './Dropdown'

class FilterComponent extends React.Component{
render(){
    return(
           
             <div className="well" id="filter">
             <h3>Task Filter</h3>
               <div className="form-group">
                 <Button
                   aria-controls="collapse-categories"
                   id="toggleCatBtn" >
                   <h5>Categories</h5>
                 </Button>
                 <Collapse >
              <div id="collapse-categories">
               
              </div>
            </Collapse>
               </div>
           </div>
        );

        }
    }
export default FilterComponent; 