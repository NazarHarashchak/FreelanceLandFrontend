import React ,{Component} from 'react';
import UserImage from './userImage';


class UserItem extends Component{
    render(){
        return(
            <div class="media">
            <li className="j-order" >
               <a href = '#' >
                 <ul className="l-item-features">
                 <div class="media-left">
                 <UserImage/>
                </div>
                       
                <div class="media-body">
           <div class = "media-heading">
                   {this.props.item.name}
           </div>
            <p className="info">
                 {this.props.item.phone_Number}
            </p>
            <div className="description">
                <p>description</p>
            </div>
            </div>
      
            </ul>
           
            </a>
           
        </li> 
        <hr></hr>
          </div>
);
}
}

export default UserItem; 