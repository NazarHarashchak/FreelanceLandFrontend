import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './ProfilePage.css';
import { Form, Segment, Button } from 'semantic-ui-react'
import { actionCreators } from '../actions';
import { Formik } from 'formik';
import { requests } from '../../services/apiService';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: true, rea: false };
  }

  async componentWillMount() {
    await this.props.requestProfilePage(this.props.id);
    if (this.props.id !== sessionStorage.getItem('id') && sessionStorage.getItem('role') !== "Administrator") { this.state.rea = !this.state.rea }
    console.log(this.props.id);
    this.setState({ user: this.props.User, isLoaded: false });
  }

  render() {
    if (!this.state.isLoaded) {
      const { email, name, sur_Name, birth_Date, phone_Number, login, userRoleName } = this.props.User;
      const birthDate = birth_Date;
      return (
        <div>

          <Formik
            initialValues={{
              email: email,
              firstName: name,
              lastName: sur_Name,
              bitrhDate: birthDate,
              phone: phone_Number,
              login: login,
              role: userRoleName
            }}
            onSubmit={(values) => {
              requests.doPut('/Users/' + this.props.id,
                JSON.stringify({
                  Name: values.firstName,
                  Sur_Name: values.lastName,
                  Birth_Date: values.bitrhDate,
                  Phone_Number: values.phone,
                  Email: values.email,
                  Login: values.login,
                  UserRoleName: values.role
                })
              ).then(res => {
                const parse = res;
                alert("updated");
                console.log(values);
              })
                .catch(err => {
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

                  <Form inverted onSubmit={handleSubmit} >
                    <Form.Group widths='equal'>
                      <Form.Input
                        className="first-name"
                        fluid label='First name'
                        placeholder='First name'
                        type="text"
                        readOnly={this.state.rea}
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                      />
                      <Form.Input fluid label='Last name'
                        placeholder='Last name'
                        type="text"
                        name="lastName"
                        readOnly={this.state.rea}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName} />
                    </Form.Group>

                    <Form.Group widths='equal'>
                      <Form.Input fluid label='Birth date'
                        placeholder='Birth date'
                        type="date"
                        readOnly={this.state.rea}
                        name="bitrhDate"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.bitrhDate} />
                    </Form.Group>

                    <Form.Group widths='equal'>
                      <Form.Input fluid label='Phone'
                        placeholder='Phone'
                        readOnly={this.state.rea}
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
                        readOnly={this.state.rea}
                        onBlur={handleBlur}
                        value={values.email} />
                    </Form.Group>

                    {sessionStorage.getItem('role') === "Administrator" ?
                      (<Form.Group widths='equal'>
                        <Form.Dropdown fluid label='Role'
                          placeholder='role'
                          name="role"
                          onChange={handleChange}
                          readOnly={this.state.rea}
                          onBlur={handleBlur}
                          control="select">
                          <option value='' hidden selected disabled>{values.role}</option>
                          <option value='User'>User</option>
                          <option value='Moderator'>Moderator</option>
                          </Form.Dropdown>
                      </Form.Group>
                      ) : (null)
                    }

                    {sessionStorage.getItem('id') === this.props.id || sessionStorage.getItem('role') === "Administrator" ?
                      <Button className="submit-button" type='submit'>Update</Button>
                      : <div></div>}
                  </Form>
                </Segment>
              )}
          </Formik>
          <div>
          </div>
        </div>

      );
    }
    return <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  }
}

export default connect(
  state => state.profilePage,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(PersonalInfo);

