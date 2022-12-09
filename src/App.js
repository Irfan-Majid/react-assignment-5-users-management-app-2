import React,{useState,useEffect} from 'react';

import Search from './components/Search';
import Users from './components/Users';
import useFetch from './hook/useFetch';

const App = () => {
  // Task 2: use custom hook
  // get data, error, isLoading states from custom hook here
  // use url: 'https://jsonplaceholder.typicode.com/users'

  // Task 3: delete user
  // get the id from User.js

  const url = 'https://jsonplaceholder.typicode.com/users';
  const [users,setUser] = useState([]); 
  const [filterusers,setFilteredUser] = useState(users); 
  const {data,isLoading,error} = useFetch(url);
  const handleDeleteUser = (id) => {
    const datas = users.filter((user) => user.id != id );
    setUser(datas);
    };
  useEffect(() => {
    setUser(data);
    }, [data])
    
  useEffect(() => {
    setFilteredUser(users);
    }, [users])

  

  // Task 4: search user
  // get the text from Search.js
  const handleSearch = (searchText) => {
    if(searchText==''){
      setFilteredUser(users)
      return true;
    }
    let value = searchText.toLowerCase();
    const newUsers = users.filter((user) => {
      const userName = user.name.toLowerCase();
      return userName.startsWith(value);
    });
    setFilteredUser(newUsers);
  };

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {/* Needs to pass functions from here for state lifting  */}
      <Search onHandleSearch={handleSearch} />
      {users.length && <Users users={filterusers} onHandleDeleteUser={handleDeleteUser} />}
    </div>
  );
};

export default App;
