import React from 'react';
import '../../css/users.css'

class CheckBox extends React.Component{
    render(){
        return(
            <form className="check-box">
                <div className="check-container">
                    <tr/>
                    <label className="freelacle-customer"><input type="checkbox" name="vehicle2" value="Frelancers"/> Frelancers </label>
                    <tr/>
                    <label className="freelacle-customer"> <input type="checkbox" name="vehicle3" value="Customers"/>  Customers </label>
               </div>
            </form> 
        )
    }
}
export default CheckBox;