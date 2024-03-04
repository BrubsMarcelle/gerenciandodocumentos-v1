import React,{FC } from 'react';
import { Menu, Input, Typography } from 'antd';
import {LogoutOutlined} from '@ant-design/icons';
import logo from '../assets/logo.svg';

const HeaderApp: FC =() =>{
    const onSair = () => (
        console.log("Você saiu xD")
    );
    return (
        <Menu mode="horizontal" style={{ backgroundColor: '#1628ca', justifyContent: 'flex-start', alignItems: 'center'}} >
            <Menu.Item key="logo">
                <img src={logo} alt='Imagem do logo de Gerenciador de Documentos' style={{ paddingTop: '5px' }}/>
            </Menu.Item>
            <Menu.Item key="search" >
                <Input.Search placeholder="Pesquisar..." style={{ paddingTop: '5px' }} />
            </Menu.Item>
            <Menu.Item  key="profile" style={{ marginLeft: 'auto' }}>
                <Menu.SubMenu title={'Perfil'}>
                    <Typography.Text>Usuario</Typography.Text>
                    <Menu.Item key="configuracoes">Configurações</Menu.Item>
                    <Menu.Item key="solicitar-acesso">Solicitar acesso</Menu.Item>
                    <Menu.Item key="sair" icon={<LogoutOutlined/>} onClick={onSair}>Sair</Menu.Item>
                </Menu.SubMenu>
            </Menu.Item>
        </Menu>
    );
}
export {HeaderApp};