import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
  FlatList
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderMin from '../../components/header/headerMin';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import color from '../../constants/color';
import scale from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';
import { LineChart } from 'react-native-chart-kit';
import {getMonth, getYear} from '../../config/displayDateTime';
import {IC_Dollar, IC_Order, IC_Product} from '../../assets/icons';
import {dollarType} from '../../config/currency';
import Item from './components/item';

const Statistics = props => {
  const [month, setMonth] = useState([
    {
      name: 'Jan',
      day: 31,
      index: 1,
    },
    {
      name: 'Mar',
      day: 31,
      index: 3,
    },
    {
      name: 'Apr',
      day: 30,
      index: 4,
    },
    {
      name: 'May',
      day: 31,
      index: 5,
    },
    {
      name: 'Jun',
      day: 30,
      index: 6,
    },
    {
      name: 'Jul',
      day: 31,
      index: 7,
    },
    {
      name: 'Aug',
      day: 31,
      index: 8,
    },
    {
      name: 'Sep',
      day: 30,
      index: 9,
    },
    {
      name: 'Oct',
      day: 31,
      index: 10,
    },
    {
      name: 'Nov',
      day: 30,
      index: 11,
    },
    {
      name: 'Dec',
      day: 31,
      index: 12,
    },
  ]);
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState();
  const [data, setData] = useState([]);

  const [revenue, setRevenue] = useState([]);


  const moveItemDetail = async (item) => {
    const dataArray = [];
    const size = [];
    const controller = new AbortController();
    const getDetailByProductId = async () => {
      try {
        const response = await axiosPrivate.get(
          `/get-detail-by-productId/${item._id}`,
          {
            signal: controller.signal,
          },
        );
        // console.log(productDetail);


        response.data.map(item => {
          let sizeObj = size.find(size => size === item.sizeName);
          // console.log({dataArray, })
          // console.log(sizeObj);
          if (!sizeObj) {
            size.push(item.sizeName);
          }
        });
        response.data.map(item => {
          let colorObj = dataArray.find(q => q.color === item.colorName);
          if (!colorObj) {
            colorObj = {color: item.colorName};
            size.map(itemSize => {
              colorObj = {...colorObj, [itemSize]: 0};
            });
            console.log(colorObj);
            dataArray.push(colorObj);
          }

          size.map(itemSize => {
            if (itemSize === item.sizeName) {
              colorObj[itemSize] = item.quantity;
            }
            console.log(colorObj[itemSize]);
          });
        });
      } catch (err) {
        console.log(err);
      }
    };
    await getDetailByProductId();
    props.navigation.navigate("ItemDetail",{data: item, size, productDetail: dataArray})
  }


  useEffect(() => {
    // revenue
    console.log('revenue', {order});
    const currentYear = new Date().getFullYear();
    console.log({currentYear});
    let newRevenue = [];
    for (let i = 1; i <= 12; i++) {
      let total = 0;
      order.map(item => {
        if (getYear(item.orderDate) === currentYear) {
          if (getMonth(item.orderDate) === i)
            total += item.orderTotalPrice * 0.7;
        }
      });
      newRevenue.push(total);
    }
    setRevenue(newRevenue);

    // sale
    let totalSale = 0;
    let totalOrder = 0;
    let totalProduct = 0;
    order.map(item => {
      totalSale += item.orderTotalPrice;
      totalOrder += 1;
      item.productDetails.map(prodItem => (totalProduct += prodItem.quantity));
    });
    setTotal({
      totalSale,
      totalOrder,
      totalProduct,
    });
  }, [order]);
  useEffect(() => {
    function checkLeapYear(year) {
      if (year % 4 !== 0) {
        return false;
      } else if (year % 100 !== 0) {
        return true;
      } else if (year % 400 !== 0) {
        return false;
      } else {
        return true;
      }
    }

    const currentYear = new Date().getFullYear();

    if (checkLeapYear(currentYear)) {
      setMonth([
        ...month,
        {
          name: 'Feb',
          day: 29,
          index: 2,
        },
      ]);
    } else {
      setMonth([
        ...month,
        {
          name: 'Feb',
          day: 28,
          index: 2,
        },
      ]);
    }
    //console.log(month);
  }, []);

  const axiosPrivate = useAxiosPrivate();
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getOrders = async () => {
      try {
        const response = await axiosPrivate.get('/get-all-order', {
          signal: controller.signal,
        });
        const CompleteOrders = [];
        response.data.orders.map(order => {
          if (order.orderStatus === 'complete') CompleteOrders.push(order);
        });
        setOrder(CompleteOrders);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    const getProducts = async () => {
        try {
            const response = await axiosPrivate.get('/get-all-product',{signal: controller.signal})
            const sortedProducts = response.data.sort((a, b) => b.sale - a.sale);

            // Lấy 5 sản phẩm đầu tiên
            const top5Products = sortedProducts.slice(0, 5);

            console.log(response.data);
            console.log({top5Products})
            isMounted && setData(top5Products);
        } 
        catch (err) {
            console.log(err.response.data);
        }
    }

    getOrders();
    getProducts();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderMin
        text={'Statistics'}
        onPress={() => props.navigation.goBack()}
      />
      <View style={styles.body}>
        <ScrollView>
          <Text style={styles.bodyText}>Revenue</Text>
          <Table revenue={revenue} />
          <Text style={styles.bodyText}>Total</Text>
          <View
            style={{
              gap: scale(15),
              alignItems: 'center',
              marginTop: scale(10),
            }}>
            <View style={styles.totalHugeBox}>
              <View style={styles.iconBox}>
                <View style={styles.iconInsideBox}>
                  <IC_Dollar />
                </View>
              </View>
              <View style={styles.info}>
                <Text style={styles.boxText}>Total sales</Text>
                <Text style={styles.numText}>
                  {total ? dollarType(total.totalSale) : ''}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '100%',
              }}>
              <View style={styles.totalBox}>
                <View
                  style={[
                    styles.iconBox,
                    {backgroundColor: 'rgba(4, 204, 108, 0.1)'},
                  ]}>
                  <View
                    style={[
                      styles.iconInsideBox,
                      {backgroundColor: 'rgb(4, 204, 108)'},
                    ]}>
                    <IC_Order />
                  </View>
                </View>
                <View style={styles.info}>
                  <Text style={styles.boxText}>Total orders</Text>
                  <Text style={styles.numText}>
                    {total ? total.totalOrder : ''}
                  </Text>
                </View>
              </View>
              <View style={styles.totalBox}>
                <View
                  style={[
                    styles.iconBox,
                    {backgroundColor: 'rgba(4, 144, 204 0.1)'},
                  ]}>
                  <View
                    style={[
                      styles.iconInsideBox,
                      {backgroundColor: 'rgb(4, 144, 204)'},
                    ]}>
                    <IC_Product />
                  </View>
                </View>
                <View style={styles.info}>
                  <Text style={styles.boxText}>Total product</Text>
                  <Text style={styles.numText}>
                    {total ? total.totalProduct : ''}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Text style={[styles.bodyText,{marginVertical: scale(10)}]}>Best seller</Text>
          <View style={{borderRadius: 5, backgroundColor: color.White, marginHorizontal: scale(17), marginBottom: scale(10)}}>
          <ScrollView style={{borderTopStartRadius: 30}}>
            {data.map((item,index)=>(
                <Item key={item._id}
                number={index+1}                
                name={item.name}
                description={item.description}
                price={item.price}
                sale={item.sale}
                source = {item.posterImage.url}
                onPress={() => moveItemDetail(item)}
                ></Item>
            ))}
          </ScrollView>
        </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const Table = ({revenue}) => {
  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data:
          revenue.length > 0 ? revenue : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        color: (opacity = 1) => `rgba(168, 113, 90, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Revenue'], // optional
  };

  const chartConfig = {
    //backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    //backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: true, // optional
  };
  return (
    <LineChart
      data={data}
      width={Dimensions.get('window').width}
      height={256}
      verticalLabelRotation={0}
      chartConfig={chartConfig}
      bezier
    />
  );
};
export default Statistics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: color.AthensGray,
    paddingTop: scale(10),
  },
  bodyText: {
    color: color.Body,
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 23,
    fontWeight: '600',
    marginLeft: scale(13),
  },
  numText: {
    color: color.Body,
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: scale(13),
  },
  boxText: {
    color: color.Body,
    fontFamily: FONT_FAMILY.Italic,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: scale(13),
  },
  totalBox: {
    width: '40%',
    height: scale(90),
    backgroundColor: color.White,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
  totalHugeBox: {
    width: '90%',
    height: scale(90),
    backgroundColor: color.White,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
  iconBox: {
    width: scale(55),
    height: scale(55),
    borderRadius: 1000,
    justifyContent: 'center',
    alignItem: 'center',
    backgroundColor: 'rgba(252, 136, 3, 0.1)',
    marginLeft: scale(10),
  },
  iconInsideBox: {
    width: scale(40),
    height: scale(40),
    borderRadius: 1000,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fc8803',
  },
  info: {
    flex: 1,
  },
});
