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

interface Props {}
interface State {
  db: SQLite.SQLiteDatabase;
  users: Array<IUser>;
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
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

  componentDidMount() {
    console.log("comonentDIdMount");
    const { db } = this.state;

    db.transaction(tx => {
      tx.executeSql('SELECT * FROM COLORLIST;', [], (tx, results) => {
        const rows = results.rows;
        console.log(rows);
        let users = [];

        for (let i = 0; i < rows.length; i++) {
            console.log(i);
        //   users.push({
        //     ...rows.item(i),
        //   });
        }

        this.setState({ users });
      });
      console.log("함수 끝");
    });
  }

  componentWillUnmount() {
    const { db } = this.state;

    db.close();
  }
}