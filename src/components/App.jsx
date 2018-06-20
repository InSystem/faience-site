import React, { Component } from 'react'
import SidebarMenu from './SidebarMenu'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About.jsx'
import Contacts from './Contacts.jsx'
import './css/app.css'
import Interior from "./Interior";
import Sculptures from "./Sculptures";
import { Icon } from 'semantic-ui-react'
import Headroom from 'react-headroom'


const routes = [
    { path: "/",
        exact: true,
        main: () => <About />
    },
    { path: "/sculptures",
        exact: true,
        main: () => <Sculptures />
    },
    { path: "/interior",
        main: () => <Interior />
    },
    { path: "/about",
        main: () => <About />
    },
    { path: "/contacts",
        main: () => <Contacts />
    }
];

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            activeItem: 'about'
        };

        this.openHamburgerMenu = this.openHamburgerMenu.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    openHamburgerMenu () {
        this.setState({
            isOpen: !this.state.isOpen
        });

        document.getElementById('body').classList.toggle("body-overflow");
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
        if (this.state.isOpen) {
            this.openHumburgerMenu();
        }
    };

    render () {
        return (
            <Router>
                <div className="app">

                    {this.state.isOpen ? (<Icon name='close' size='large' className="icon-close" onClick={this.openHamburgerMenu} color="black"/>) : null}
                    <div className="app-container">
                        <div className={this.state.isOpen ? 'sidebar sidebar-open' : 'sidebar'}>
                            <SidebarMenu isOpen={this.state.isOpen}
                                         activeItem={this.state.activeItem}
                                         onItemClick={this.handleItemClick}/>
                        </div>
                        <div className="route">
                            <div className={this.state.isOpen ? 'overlay-open' : 'overlay'}/>
                                <Headroom>
                                    <header className={this.state.isOpen ? 'app-header app-header-hidden' : 'app-header'}>
                                    <p className='logo'>Наталья Щукина</p>
                                    <Icon name='bars' size='large' className="bars" onClick={this.openHamburgerMenu} />
                                </header>
                                </Headroom>
                            <Switch >
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />

                            ))}
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}




