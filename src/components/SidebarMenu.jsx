import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from "react-router-dom";
import './css/sidebar-menu.css'


export default class SidebarMenu extends Component {

    render () {
        const { activeItem } = this.props;
    return (
        <div className={this.props.isOpen ? 'sidebar-fixed sidebar-fixed-open' : 'sidebar-fixed'}>
            <Menu text vertical className="menu" >
                {/*<Menu.Item className="menu-header" header>Наталья<br/>Щукина</Menu.Item>*/}
                <h2 className="menu-header">Наталья<br/>Щукина</h2>
                <p className="menu-sub-header">Художник-скульптор</p>
                <Menu.Item  className="menu-item"
                            as={Link}
                            to="/about"
                            name='about'
                            active={activeItem === 'about'}
                            onClick={this.props.onItemClick}>
                    Обо мне
                </Menu.Item>
                <Menu.Item className="menu-item"
                           as={Link}
                           to="/sculptures"
                           name='sculptures'
                           active={activeItem === 'sculptures'}
                           onClick={this.props.onItemClick}>
                    Скульптуры
                </Menu.Item>
                <Menu.Item className="menu-item"
                           as={Link}
                           to="/interior"
                           name='interior'
                           active={activeItem === 'interior'}
                           onClick={this.props.onItemClick}>
                    Интерьер <span style={{marginLeft: "0", marginRight: "3px"}}>/</span>Утварь
                </Menu.Item>
                <Menu.Item  className="menu-item"
                            as={Link}
                            to='/contacts'
                            name='contacts'
                            active={activeItem === 'contacts'}
                            onClick={this.props.onItemClick}>
                    Контакты
                </Menu.Item>
            </Menu>

            <div className="sidebar-contacts">
                <p className='sidebar-contacts_mail'><a href="mailto:shchukina.faience@gmail.com">shchukina.faience@gmail.com</a></p>
                <p className='sidebar-contacts_phone'>+7 904 358 15 59</p>
                <p className='sidebar-contacts_terms'><span>©</span> 2016-2018</p>
            </div>
        </div>
    )}
}