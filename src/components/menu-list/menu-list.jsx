import React from 'react';
import MenuListItem from '../menu-list-item';
import './menu-list.scss';

const MenuListPresentation = ({carts,onAddOrder}) => {
    return (
        <ul className="menu__list">
            {
                carts.map(value => {
                    const { id } = value
                    return (
                        <MenuListItem 
                        key = {id} 
                        {...value}
                        onAddOrders = {() => onAddOrder(id)}/>
                    )
                })
            }
        </ul>
    )
}

export default MenuListPresentation

