/**
 * Created by griga on 11/24/15.
 */

import React from 'react'

import NavMenu from './menu'

import MinifyMenu from './minify_menu'

import LoginInfo from './login_info'


export default class Navigation extends React.Component {
    render() {
        return (
            <aside id="left-panel">
                <LoginInfo/>
                <nav>
                    <NavMenu
                        openedSign={'<i class="fa fa-minus-square-o"></i>'}
                        closedSign={'<i class="fa fa-plus-square-o"></i>'}
                        items={this.props.items}
                    >
                        Nhà thuốc
                    </NavMenu>
                </nav>
                <MinifyMenu/>
            </aside>
        )
    }
}