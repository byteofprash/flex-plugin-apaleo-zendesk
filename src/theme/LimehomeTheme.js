import { urlencoded } from 'body-parser'

export default {
  overrides: {
    SideNav: {
      Container: {
        backgroundColor: '#FAE2CF',
        background: '#FAE2CF',
      },
      Button: {
        backgroundColor: '#FAE2CF',
        background: '#B26323',
        color: 'black',
        lightHover: true,
      },
    },
    MainHeader: {
      Container: {
        background: '#C9CBAA',
        backgroundColor: '#C9CBAA',
        color: '#000',
      },
      Button: {
        color: '#000',
        lightHover: true,
      },
    },
    NoTasksCanvas:{
      Container:{
        background: '#f7f1e9',
        backgroundColor: '#f7f1e9',
        color: '#000',
      }
    },
    TaskListContainer:{
      Container:{
        background: '#f7f1e9',
        backgroundColor: '#f7f1e9',
        color: '#000',
      }
    },
  },
  TextField: {
    root: {
      borderColor: 'red',
    },
    focused: {
      borderColor: 'green',
    },
    outlined: {
      root: {
        borderColor: 'red',
      },
    },
    notchedOutline: {
      borderColor: 'red',
      root: {
        borderColor: 'red',
      },
    },
  },
}
