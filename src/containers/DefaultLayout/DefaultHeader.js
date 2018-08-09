import React, { Component } from 'react';
import { Form,Input,InputGroup,InputGroupAddon,InputGroupText,Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import {isMobile} from 'react-device-detect';
import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/funky-logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'
import './searchbar.css';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  state={
    displaySideBarState:'closed',
    searchQuery:''
  }
  displaySideBar = () => {
    console.log(this.props);
    this.props.displaySideBar(this.state.displaySideBarState);
  }

handleChange(event){
  this.setState({...this.state,[event.target.name]:event.target.value},()=>{
    console.log(this.state.searchQuery);
  })
}

  getItems(){
    alert("called");
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    const isAuthenticated = true;
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 200, height: 50, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <div onClick={this.displaySideBar}>
        <AppSidebarToggler className="d-md-down-none" display="lg"  />
        </div>

        {/* <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="/">Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">Users</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">Settings</NavLink>
          </NavItem>
        </Nav> */}
        <Nav className="ml-auto" navbar>
       
          
          <AppHeaderDropdown direction="left">
            <DropdownToggle nav>
              <i className='fa fa-search' style={{marginLeft:'5px',fontSize:isMobile ? '20px':'15px'}}></i>
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto',border:'transparent' }}>    
            <Form onSubmit={this.getItems}>  
                  <input 
                  type="text"
                  name="searchQuery"
                  id="searchQuery"
                  style={{borderRadius:'0px',border:'transparent',outline:'none',marginTop:'15px',borderBottom:'2px solid orange',width: isMobile ? '300px':'700px'}} 
                  placeholder="Search for Funky's..." 
                  autoFocus={true}
                  onChange={this.handleChange.bind(this)}
                  />
            </Form>  
            </DropdownMenu>
          </AppHeaderDropdown>
         
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="fa fa-bell"></i>
             
            </NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="fa fa-shopping-cart"></i></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="fa fa-heart"></i></NavLink>
          </NavItem>
          {
            isAuthenticated ? '':<NavItem className="d-md-down-none">
            <NavLink href="#">Log In</NavLink>  
            </NavItem>
          }
         
          {isAuthenticated && !isMobile && <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              <DropdownItem><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown> }
        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;
DefaultHeader.propTypes = {
  displaySideBar:PropTypes.func.isRequired
}
export default DefaultHeader;
