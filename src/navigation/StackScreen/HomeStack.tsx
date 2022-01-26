import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../Screen/Home/Home';
import HeaderBar from '../../Component/HeaderBar/HeaderBar';
import Setup from '../Screen/Setup/Setup';
import {LoginScreen} from '../Screen/Login/Login';
import Noti from '../Screen/Noti/Noti';
import Customer from '../Screen/Customer/Customer';
import DetailCustomer from '../Screen/Customer/Detail/DetailCutomer';
import Order from '../Screen/Order/Order';
import Quote from '../Screen/Quote/Quote';
import PriceLookUp from '../Screen/Quote/PriceLookUp/PriceLookUp';
import ListQuote from '../Screen/Quote/ListQuote/ListQuote';
import ListOrder from '../Screen/Order/ListOrder/ListOrder';
import Suggestions from '../Screen/Suggestions/Suggestions';
import Payment from '../Screen/Payment/Payment';
import CashFlow from '../Screen/CashFlow/CashFlow';
import KQKDDATE from '../Screen/KQKD/KQKD-Date/Kqkd-date';
import KQKDMONTH from '../Screen/KQKD/KQKD-Month/Kqkd-month';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation, route}: any) => {
  return (
    <HomeStack.Navigator
      screenOptions={
        {
          // headerShown: false,
          // header: () => {
          //   const title = getHeaderTitle(route.name);
          //   return <HeaderBar navigation={navigation} title={title} />
          // },
        }
      }>
      <HomeStack.Screen
        name="home"
        component={HomeScreen}
        options={() => ({
          header: () => <HeaderBar navigation={navigation} title={'Home'} />,
        })}
      />
      <HomeStack.Screen
        name="setup"
        component={Setup}
        options={() => ({
          header: () => (
            <HeaderBar navigation={navigation} title={'Thiết lập'} />
          ),
        })}
      />

      <HomeStack.Screen
        name="noti"
        component={Noti}
        options={() => ({
          header: () => (
            <HeaderBar navigation={navigation} title={'Thông báo'} />
          ),
        })}
      />

      <HomeStack.Screen
        name="customer"
        component={Customer}
        options={() => ({
          header: () => (
            <HeaderBar navigation={navigation} title={'Khách hàng'} />
          ),
        })}
      />

      <HomeStack.Screen
        name="detailcustomer"
        component={DetailCustomer}
        options={() => ({
          header: () => (
            <HeaderBar navigation={navigation} title={'Chi tiết khách hàng'} />
          ),
        })}
      />

      <HomeStack.Screen
        name="login"
        component={LoginScreen}
        options={() => ({
          header: () => <HeaderBar navigation={navigation} title={'Login'} />,
        })}
      />

      <HomeStack.Screen
        name="order"
        component={Order}
        options={() => ({
          header: () => <HeaderBar navigation={navigation} title={'Order'} />,
        })}
      />

      <HomeStack.Screen
        name="quote"
        component={Quote}
        options={() => ({
          header: () => <HeaderBar navigation={navigation} title={'Báo giá'} />,
        })}
      />

      <HomeStack.Screen
        name="listquote"
        component={ListQuote}
        options={() => ({
          header: () => (
            <HeaderBar navigation={navigation} title={'Danh sách báo giá'} />
          ),
        })}
      />

      <HomeStack.Screen
        name="listorder"
        component={ListOrder}
        options={() => ({
          header: () => (
            <HeaderBar navigation={navigation} title={'Danh sách order'} />
          ),
        })}
      />

      <HomeStack.Screen
        name="pricelookup"
        component={PriceLookUp}
        options={() => ({
          header: () => (
            <HeaderBar navigation={navigation} title={'Tra cứu giá'} />
          ),
        })}
      />

      <HomeStack.Screen
        name="suggestions"
        component={Suggestions}
        options={() => ({
          header: () => <HeaderBar navigation={navigation} title={'Đề nghị'} />,
        })}
      />

      <HomeStack.Screen
        name="payment"
        component={Payment}
        options={() => ({
          header: () => (
            <HeaderBar navigation={navigation} title={'Phiếu chi'} />
          ),
        })}
      />

      <HomeStack.Screen
        name="cashflow"
        component={CashFlow}
        options={() => ({
          header: () => (
            <HeaderBar navigation={navigation} title={'Luồng tiền'} />
          ),
        })}
      />

      <HomeStack.Screen
        name="kqkddate"
        component={KQKDDATE}
        options={() => ({
          header: () => (
            <HeaderBar navigation={navigation} title={'KQKD ngày'} />
          ),
        })}
      />

      <HomeStack.Screen
        name="kqkdmonth"
        component={KQKDMONTH}
        options={() => ({
          header: () => (
            <HeaderBar navigation={navigation} title={'KQKD tháng'} />
          ),
        })}
      />
    </HomeStack.Navigator>
  );
};
export default HomeStackScreen;
