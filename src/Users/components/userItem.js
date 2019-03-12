import React ,{Component} from 'react';
import UserImage from './userImage';


class UserItem extends Component{
    render(){
        return(
            <div class="media">
            <li className="j-order" >
            <a href = {`/ProfilePage/${this.props.item.id}`} >
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
            {this.props.item.description}
            </div>
            </div>
      
            </ul>
           
            </a>
           
        </li> 
        
          </div>
);
}
}

export default UserItem; 