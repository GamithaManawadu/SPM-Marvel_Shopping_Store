import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    
    <SubMenu title={<span>Actions</span>}>
      <MenuItemGroup title="Store Management">
        <Menu.Item key="setting:1"><a href="/product/upload">Upload a Product</a></Menu.Item>
        <Menu.Item key="setting:2"><a href="/products">Manage Products</a></Menu.Item>
        <Menu.Item key="setting:2"><a href="/">View Current Store</a></Menu.Item>
      </MenuItemGroup>
      
    </SubMenu>
  </Menu>
  )
}

export default LeftMenu