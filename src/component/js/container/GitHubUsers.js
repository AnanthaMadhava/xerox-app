import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Search as SearchIcon } from '@mui/icons-material';
import axios from 'axios';

const GitHubUsers = () => {

    const [ userName, setUserName ] = useState('');
    const [ usersList, setUsersList ] = useState([]);
    const navigate = useNavigate();

    const onChange = e => setUserName(e.target.value);

    useEffect(() => {
        if(userName) {
            axios.get(`https://api.github.com/search/users?q=${userName}+in:user`)
            .then(res => {
                let result = res.data.items;
                setUsersList(result);
            })
            .catch(err => {
                setUsersList([]);
            })
        }
    }, [ userName ]);

    const onSubmit = () => setUserName('');

    const onSelect = data => {
        navigate(`/repo/${data.login}`)
    }

    return (
        <div className='usersContainer'>
            <div className='main-heading-text'>Search GitHub Users</div>
            <div className='usersSearchContainer'>
                {/* <div className='heading'>Search GitHub Users</div> */}
                <div className='typeahedSearchBarContainer'>
                    <div className='typeahedSearchBar'>
                        <input 
                            type='text' 
                            placeholder='Search git username..' 
                            value={userName}
                            onChange={onChange}
                        />
                        <div className='searchbarBox'>
                            {usersList.length >= 1 && userName ?
                                usersList.map(list => (
                                    <li key={list.id} className='searchbarBoxImage' onClick={() => onSelect(list)}>
                                        <img src={list.avatar_url} alt={list.login} />
                                        {list.login
                                    }</li>
                                ))
                            : usersList.length === 0 && userName ?
                                <li>User not found</li>
                            : null}
                        </div>
                        <div className='searchIcon' onClick={onSubmit}>Search</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GitHubUsers;