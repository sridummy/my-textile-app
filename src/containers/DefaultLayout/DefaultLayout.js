import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import {isMobile} from 'react-device-detect';

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';
import DefaultAside from './DefaultAside';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';

class DefaultLayout extends Component {
  displaySideBar = data => {
    if(data==='closed'){
      document.getElementById("Sidebar").style.display = "block";
    }
  }
  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader displaySideBar={this.displaySideBar}/>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed id="Sidebar" style={{display:isMobile?'block':'none'}}>
            <AppSidebarHeader />
            <AppSidebarForm />
            <AppSidebarNav navConfig={navigation} {...this.props} />
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            {/* <AppBreadcrumb appRoutes={routes}/> */}
            <Container fluid>
              <Switch>
                {routes.map((route, idx) => {
                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                        <route.component {...props} />
                      )} />)
                      : (null);
                  },
                )}
                <Redirect from="/" to="/home" />
              </Switch>
            </Container>
          </main>
          <AppAside fixed hidden>
            <DefaultAside />
          </AppAside>
        </div>
        <AppFooter>
          <DefaultFooter />
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
