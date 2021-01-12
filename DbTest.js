import * as React from 'react';
// import Styled from 'styled-components/native';
import { Text } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

// const Container = Styled.View`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   background-color: #F5FCFF;
// `;
// const UserContainer = Styled.View`
//   flex-direction: row;
// `;
// const UserInfo = Styled.Text`
//   padding: 8px;
// `;


export default class App extends React.Component{
  constructor(props) {
    super(props);

    const db = SQLite.openDatabase(
      {
        name: 'Pastel.db',
        location: 'default',
        createFromLocation: '~www/Pastel.db',
      },
      () => {},
      error => {
        console.log(error);
      }
    );

    this.state = {
        db,
        users: [],
    };
  }
  

  render() {
    const { users } = this.state;
    // console.log(this.state);
    return (
        <Text>DB</Text>
    //   <Container>
    //     {users.map((user: IUser, index: number) => (
    //       <UserContainer key={`user-info${index}`}>
    //         <UserInfo>{user.id}</UserInfo>
    //         <UserInfo>{user.name}</UserInfo>
    //         <UserInfo>{user.age}</UserInfo>
    //         <UserInfo>{user.email}</UserInfo>
    //       </UserContainer>
    //     ))}
    //   </Container>
    );
  }


  /*
  componentDidMount() {
      const { db } = this.state;

    db.transaction(tx => {
      tx.executeSql('SELECT * FROM COLORLIST;', [], (tx, results) => {
        const rows = results.rows;
        let users = [];

        for (let i = 0; i < rows.length; i++) {
            console.log(i);
          users.push({
            ...rows.item(i),
          });
        }

        this.setState({ users });
      });
    });
  }
  */

  componentDidMount(){
    errorCB = (err) => {
        console.log("SQL Error: " + err);
      }
       
      successCB = () => {
        console.log("SQL executed fine");
      }
       
      openCB = () => {
        console.log("Database OPENED");
      }

    //   var db = SQLite.openDatabase({name: 'Pastel.db', location: 'default', createFromLocation: '~www/Pastel.db'}, successCB, openCB);
       
    //   var db = SQLite.openDatabase("Pastel.db", openCB, errorCB);
    const { db } = this.state;
      db.transaction((tx) => {
          console.log("test~~");
        tx.executeSql('SELECT * FROM COLORLIST', [], (tx, results) => {
            console.log("Query completed");
       
            // Get rows with Web SQL Database spec compliance.
       
            var len = results.rows.length;
            for (let i = 0; i < len; i++) {
                console.log(i);
                
            //   let row = results.rows.item(i);
            //   console.log(`Employee name: ${row.id}, Dept Name: ${row.index}`);
            }
       
            // Alternatively, you can use the non-standard raw method.
       
            /*
              let rows = results.rows.raw(); // shallow copy of rows Array
       
              rows.map(row => console.log(`Employee name: ${row.name}, Dept Name: ${row.deptName}`));
            */
          });
      });

  }

  componentWillUnmount() {
    const { db } = this.state;

    db.close();
  }
}



