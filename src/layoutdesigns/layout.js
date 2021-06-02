import react from 'react';
import { Layout } from 'antd';
import Logoimage from './image/imagess.jpg';
import Profile from './image/prince.jpg'
import './layout.css';
import { Input, Space, Switch } from 'antd';
import { AudioOutlined, DownOutlined, CalendarOutlined, BellOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
function Layouts() {
    const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 10,
        color: 'gray'

      }}
    />
  );
  const onSearch = value => console.log(value);
    return (
        <div>
            <Layout>
                {/* <Sider>Sider</Sider> */}
                <Layout>
                    <Header className="header">
                        <div className="headermenus">
                            <div className="logo"><img src={Logoimage} className="logodesign" /></div>
                            <div className="homestyle">Home</div>
                            <div className="shopstyle">Shopping</div>
                        </div>
                        <div className="searchbar">
                            <Space direction="vertical">
                                <div className="Searchbarsize"><Search placeholder="Doctor or speciality,clinic" enterButton style={{ width: '200%', height: '20px' }} /></div>
                                </Space>
                        </div>
                        <div className="icons">
                            <div className="calender"> <CalendarOutlined /> </div>
                            <div className="bellsymbol"><BellOutlined /></div>
                            <div><img src={Profile} className="profileimage" /></div>
                        </div>
                    </Header>
                {/* <Content>
                    <div className="content">welcome</div>
                </Content> */}

            </Layout>
            </Layout>

        </div >
    )
}
export default Layouts;