import { FC } from 'react';
import { Layout, Menu, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import { RouteNames } from '../routes';

export const Navbar: FC = () => {
  const router = useHistory();
  const auth = false;
  return (
    <Layout.Header>
      <Row justify="end">
        {auth ? (
          <>
            <div style={{ color: 'white' }}>Jaslan D</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => console.log('logout')} key="1">
                Logout
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false} style={{ minWidth: '80px' }}>
            <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key="1">
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};
