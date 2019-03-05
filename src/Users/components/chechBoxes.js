import React from 'react';

class CheckBox extends React.Component{
    render(){
        return(
            <form >
                <label><input type="checkbox" name="vehicle1" value="All"/> All </label>
                <tr/>
                <label><input type="checkbox" name="vehicle2" value="Frelancers"/> Frelancers </label>
                <tr/>
               <label> <input type="checkbox" name="vehicle3" value="Customers"/>  Customers </label>
            </form> 
        )
    }
}
export default CheckBox;