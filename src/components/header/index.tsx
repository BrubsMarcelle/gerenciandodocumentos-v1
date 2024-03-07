import React,{FC, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { Menu, Input, Typography } from 'antd';
import {LogoutOutlined, BulbOutlined, MoonOutlined} from '@ant-design/icons';
import logo from '../assets/logo.svg';

const HeaderApp: FC =() =>{
    const [tema, setTema] = useState<string> ('light');

    //const navigate = useNavigate();

    const usuario = 'Bruna Marcelle'
    const iconTema = tema === 'light' ? <BulbOutlined /> : <MoonOutlined />;

    const onSair = () => (
        console.log("Você saiu xD")
    );
    const onMudarTheme = () =>
    {
        const novoTema = tema === 'light' ? 'dark' : 'light'; 
        setTema(novoTema);
        console.log('Você tentou mudar o theme da aplicação')
    };

    // const handleSearch = async (value: string) => {
    //     try {
    //         // Realizar a busca de documentos na API
    //         const response = await fetch(`https://sua-api.com/documentos?termo=${value}`);
    //         if (response.ok) {
    //             const data = await response.json();
    //             // Atualizar a interface do usuário com os documentos encontrados
    //             console.log('Documentos encontrados:', data);
    //         } else {
    //             // Lidar com erros
    //             console.error('Erro ao buscar documentos:', response.statusText);
    //         }
    //     } catch (error) {
    //         console.error('Erro ao buscar documentos:', error);
    //     }
    // };

    // const navigateToConfiguracoes = () => {
    //     console.log("funciona o botão")
    //     navigate('/configuracoes');
    // };

    // const navigateToSolicitarAcesso = () => {
    //     navigate('/solicitar-acesso');
    // };

    return (
        <Menu mode="horizontal" style={{ backgroundColor: tema === 'light' ? '#1628ca' : '#000', justifyContent: 'flex-start', alignItems: 'center', color: tema === 'light' ? '#000' : '#fff'}} >
            <Menu.Item key="logo">
                <img src={logo} alt='Imagem do logo de Gerenciador de Documentos' style={{ paddingTop: '5px' }}/>
            </Menu.Item>
            <Menu.Item key="search" >
                <Input.Search placeholder="Pesquisar..." style={{ paddingTop: '5px' }}/>
            </Menu.Item>
            <Menu.Item  key="profile" style={{ marginLeft: 'auto' }}>
                <Menu.SubMenu title={<span style={{ color: '#FFFFFF' }}>{'Perfil'}</span>} style={{ display: 'flex', justifyContent: 'center' }} >
                    <Typography.Text style={{ textAlign: 'center' }}>{usuario}</Typography.Text>
                    <Menu.Item key="configuracoes">Configurações</Menu.Item>
                    <Menu.Item key="solicitar-acesso">Solicitar acesso</Menu.Item>
                    <Menu.Item key="selecionar-modo" onClick={onMudarTheme} icon={iconTema}>{tema === 'light' ? 'Light' : 'Dark'}</Menu.Item>
                    <Menu.Item key="sair" icon={<LogoutOutlined/>} onClick={onSair}>Sair</Menu.Item>
                </Menu.SubMenu>
            </Menu.Item>
        </Menu>
    );
}
export {HeaderApp};