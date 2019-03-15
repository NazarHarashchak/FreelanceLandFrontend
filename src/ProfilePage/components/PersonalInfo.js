import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './ProfilePage.css';
import { Form , Segment} from 'semantic-ui-react'
import { actionCreators } from '../actions';
import {Formik} from 'formik';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoaded: true };
}

async componentDidMount() {  
  await this.props.requestProfilePage(this.props.id);
  this.setState({user:this.props.User, isLoaded : false });
}
  render() {
    if(!this.state.isLoaded){
    const { email, name, sur_Name, birth_Date, phone_Number, login } = this.props.User;
    const birthDate = birth_Date.toString().slice(0,birth_Date.indexOf('T'));
    return (
      <div>
        
      <Formik
      initialValues={{ 
        email: email,
        firstName: name,
        lastName : sur_Name,
        bitrhDate: birthDate,
        phone: phone_Number,
        login: login
       }}
      onSubmit={(values) => {
        fetch('https://localhost:44331/api/Users/'+this.props.id, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        
          body: JSON.stringify({
            Name: values.firstName,
            Sur_Name: values.lastName,
            Birth_Date: values.bitrhDate,
            Phone_Number: values.phone,
            Email: values.email,
            Login: values.login
          })
        })
        .then(res=>{
          const parse = res.json();
          alert("updated");
          console.log(values);
        })
        .catch(err=>{
          console.log(err);
        })
      }}
      >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
          }) => (
              <Segment inverted>
                <Form inverted onSubmit={handleSubmit}>
                  <Form.Group widths='equal'>
                    <Form.Input 
                      fluid label='First name' 
                      placeholder='First name' 
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName} />
                    <Form.Input fluid label='Last name' 
                        placeholder='Last name' 
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName} />
                    </Form.Group>
                    
                    <Form.Group widths='equal'>
                      <Form.Input fluid label='Birth date' 
                        placeholder='Birth date' 
                        type="date"
                        name="bitrhDate"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.bitrhDate} />
                    </Form.Group>

                    <Form.Group widths='equal'>
                      <Form.Input fluid label='Phone' 
                        placeholder='Phone' 
                        type="tel"
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone} />
                    </Form.Group>

                    <Form.Group widths='equal'>
                      <Form.Input fluid label='Email' 
                        placeholder='email' 
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email} />
                 </Form.Group>

                  </Form>
        </Segment>
      )}
    </Formik>
      <div>
      </div>
  </div>
 
    );}
    return <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  }
}

export default connect(
  state => state.profilePage,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(PersonalInfo);

