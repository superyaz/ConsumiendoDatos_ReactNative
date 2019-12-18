/* eslint-disable prettier/prettier */
const React = require('react-native');
const { Dimensions } = React;
const deviceWidth = Dimensions.get('window').width;


export default {
    home: {
        fontSize: deviceWidth * 0.1,
        color: 'red',
        textAlign: 'center',
        marginVertical: 15,
    },
};
