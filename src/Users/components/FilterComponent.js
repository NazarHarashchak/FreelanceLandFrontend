import React from 'react';
import { Button, Collapse } from 'react-bootstrap';
import CheckBox from './chechBoxes';
import SeachBar from './SeachBar' ;
import Dropdowns from './Dropdown'

class FilterComponent extends React.Component{
render(){
    return(
           
             <div className="well" id="filter">
               <div className="form-group">
                    <CheckBox/>
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