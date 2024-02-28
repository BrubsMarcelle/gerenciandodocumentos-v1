import React,{FC } from 'react';
import { Menu, Input, Button } from 'antd';
import {LogoutOutlined, FilePdfOutlined} from '@ant-design/icons';

const HeaderApp: FC =() =>{
    const onSair = () => (
        console.log("Você saiu xD")
    );
    return (
        <Menu mode="horizontal" style={{ backgroundColor: '#1628ca'}} >
            <Menu.Item key="logo">
                <FilePdfOutlined />
            </Menu.Item>
            <Menu.Item key="search" >
                <Input.Search placeholder="Pesquisar..." style={{ width: 200 }} />
            </Menu.Item>
            <Menu.Item key="profile" style={{flex: 100, justifyContent: "flex-end"}}>
                <Button icon={<LogoutOutlined/>} onClick={onSair}>Sair</Button>
            </Menu.Item>
        </Menu>
    );
}
export {HeaderApp};