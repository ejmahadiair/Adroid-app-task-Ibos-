import React from 'react';
import {Text, ScrollView, View, Image, TextInput} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import ej from './images/ej.jpg';
import bag from './images/bag.jpg';
import cacke from './images/cacke.jpg';
import profile from './images/profile.jpg';
import icon1 from './images/1.jpg';
import icon2 from './images/2.jpg';
import icon3 from './images/3.jpg';
import icon4 from './images/4.jpg';
import icon5 from './images/5.jpg';
import icon6 from './images/6.jpg';
import calan from './images/calan.jpg';

const HelloWorldApp = () => {
  const data = [
    'Intern',
    'Front End Developer',
    'Backend Developer',
    'Full-Stack Developer',
  ];
  return (
    <ScrollView>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#299647',
            width: '100%',
            height: 60,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            shadowOffset: {width: -2, height: 4},
            shadowColor: '#171717',
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}>
          <View
            style={{shadowColor: 'Black', shadowOpacity: 0.4, shadowOffset: 0}}>
            <View
              style={{
                backgroundColor: 'white',
                width: 30,
                height: 3,
              }}></View>
            <View
              style={{
                backgroundColor: 'white',
                width: 30,
                height: 3,
                marginTop: 5,
                marginBottom: 5,
              }}></View>
            <View
              style={{
                backgroundColor: 'white',
                width: 30,
                height: 3,
              }}></View>
          </View>
          <Text style={{color: 'white', fontSize: 20, marginLeft: 30}}>
            Employee Profile
          </Text>
        </View>
        {/* profile box*/}
        <View>
          {/* profile */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: 20,
              justifyContent: 'space-around',
            }}>
            {/* image */}

            <Image
              source={ej}
              style={{
                width: 80,
                height: 80,
                borderRadius: 50,
              }}
            />

            {/* profile detail */}
            <View style={{display: 'flex', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 20, color: '#344054'}}>
                Eftakhar Jaman
              </Text>
              <Text>Senior UX Designer</Text>
              <Text>ID43178</Text>
            </View>
            {/* active */}
            <View
              style={{
                backgroundColor: '#e6f9e9',
                height: 30,
                padding: 5,
                alignSelf: 'flex-end',
                borderRadius: 15,
              }}>
              <Text style={{color: '#299647'}}>Active</Text>
            </View>
          </View>
          {/* hr line1 */}
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: '#f2f2f7',
              marginTop: 10,
              marginBottom: 10,
            }}></View>
          {/* other details1 */}
          <View style={{display: 'flex', flexDirection: 'row', padding: 10}}>
            {/* icon */}
            <Image
              source={bag}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}
            />
            {/* texts */}
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginLeft: 20,
              }}>
              <Text style={{color: '#344054', fontSize: 18}}>
                Human Resource
              </Text>
              <Text>Department</Text>
            </View>
          </View>
          {/* hr line2 */}
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: '#f2f2f7',
              marginTop: 10,
              marginBottom: 10,
            }}></View>
          {/* other details2 */}
          <View style={{display: 'flex', flexDirection: 'row', padding: 10}}>
            {/* icon */}
            <Image
              source={cacke}
              style={{
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            {/* texts */}
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginLeft: 20,
              }}>
              <Text style={{color: '#344054', fontSize: 18}}>
                28 September, 1990
              </Text>
              <Text>Date of Birth</Text>
            </View>
          </View>
          {/* other details3 */}
          <View style={{display: 'flex', flexDirection: 'row', padding: 10}}>
            {/* icon */}
            <Image
              source={profile}
              style={{
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            {/* texts */}
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginLeft: 20,
              }}>
              <Text style={{color: '#344054', fontSize: 18}}>Male</Text>
              <Text>Gender</Text>
            </View>
            {/* vartical hr */}
            <View
              style={{
                width: 1,
                height: '100%',
                backgroundColor: '#f2f2f7',
                marginLeft: 10,
                marginRight: 10,
              }}></View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginLeft: 20,
              }}>
              <Text style={{color: '#344054', fontSize: 18}}>Islam</Text>
              <Text>Religion</Text>
            </View>
          </View>
        </View>
        {/* Employ app */}
        <View style={{padding: 20, marginTop: 10, marginBottom: 10}}>
          <Text style={{fontSize: 18, color: 'black'}}>
            Employee Application
          </Text>
          {/* item box */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {/* item1 */}
            <View
              style={{
                marginTop: 10,
                marginBottom: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={icon1} style={{borderRadius: 50}} />
              <Text>Leave</Text>
            </View>
            {/* item2 */}
            <View
              style={{
                marginTop: 10,
                marginBottom: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={icon2} style={{borderRadius: 50}} />
              <Text>Movement</Text>
            </View>
            {/* item3 */}
            <View
              style={{
                marginTop: 10,
                marginBottom: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={icon3} style={{borderRadius: 50}} />
              <Text>Remote Attendance</Text>
            </View>
            {/* item4 */}
            <View
              style={{
                marginTop: 10,
                marginBottom: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={icon4} style={{borderRadius: 50}} />
              <Text>IOU</Text>
            </View>
            {/* item5 */}
            <View
              style={{
                marginTop: 10,
                marginBottom: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={icon5} style={{borderRadius: 50}} />
              <Text>Loan</Text>
            </View>
            {/* item6 */}
            <View
              style={{
                marginTop: 10,
                marginBottom: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={icon6} style={{borderRadius: 50}} />
              <Text>Overtime</Text>
            </View>
          </View>
        </View>
        {/* contact form */}
        <View
          style={{
            padding: 20,
            shadowOffset: {width: -2, height: 4},
            shadowColor: '#171717',
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 20,
            margin: 10,
          }}>
          <Text style={{fontSize: 22, color: '#344054'}}>
            Please input your information
          </Text>
          {/* input filds */}
          <View>
            <View style={{marginTop: 10, marginBottom: 10}}>
              <Text style={{color: '#299647'}}>Leave type</Text>

              <SelectDropdown
                data={data}
                searchPlaceHolder="Leave type"
                searchPlaceHolderColor="#299647"
                onSelect={(selectedItem, index) => {}}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
                defaultButtonText="  "
                buttonTextStyle={{
                  color: '#299647',
                  justifyContent: 'flex-end',
                  textAlign: 'left',
                }}
                buttonStyle={{
                  backgroundColor: 'transparent',
                  borderBottomWidth: 1,
                  borderColor: '#d0d5dd',
                  width: '100%',
                  padding: 10,
                }}
              />
            </View>
            {/* date datas */}
            <View style={{display: 'flex', flexDirection: 'row'}}>
              {/* date from */}
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: '#d0d5dd',
                  marginTop: 10,
                  marginBottom: 10,
                  width: '48%',
                }}>
                <Text style={{color: '#299647'}}>From Date</Text>
                <TextInput />
                <Image source={calan} style={{alignSelf: 'flex-end'}} />
              </View>
              {/* date to */}
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: '#d0d5dd',
                  marginTop: 10,
                  marginBottom: 10,
                  width: '48%',
                  marginLeft: 20,
                }}>
                <Text style={{color: '#299647'}}>To Date</Text>
                <TextInput />
                <Image source={calan} style={{alignSelf: 'flex-end'}} />
              </View>
            </View>
            {/* loctaion */}
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: '#d0d5dd',
                marginTop: 10,
                marginBottom: 10,
                width: '100%',
              }}>
              <Text style={{color: '#299647'}}>Location</Text>
              <TextInput />
            </View>
            {/* file upload */}
            <View>
              <TextInput
                textContentType="file"
                placeholder="File Upload"
                placeholderTextColor="#299647"
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default HelloWorldApp;
