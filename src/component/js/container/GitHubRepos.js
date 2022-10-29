import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { CircularProgress } from '@mui/material';
// import { Box } from '@mui/material';
import axios from 'axios';

const GitHubRepos = () => {

    const { userId } = useParams();
    const [ loading, setLoading ] = useState(false);
    const [ repos, setRepos ] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://api.github.com/users/${userId}/repos`)
        .then(res => {
            setRepos(res.data);
            setLoading(false);
        })
        .catch(err => {
            setRepos([]);
            setLoading(false);
        })
    },[ userId ]);

    return (
        <div className='userInfomation'>
            <div className='main-heading-text'>GitHub Repositories</div>
            <div className='infoTableContainer'>
                <div className='heading'>{repos && repos.length >= 1 ? `Repositories of ${repos[0].owner.login}` : 'Repositories'}</div>
                <table className='infoTable'>
                    <thead>
                        <tr>
                            <th>Owner Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Stars</th>
                            <th>Open issue count</th>
                            <th>Watchers</th>
                        </tr>
                    </thead>
                    <tbody>
                        {repos.length >= 1 && !loading?
                            repos.map(list => (
                                <tr key={list.id}>
                                    <th><img src={list.owner.avatar_url} alt={list.name} /></th>
                                    <th>{list.name}</th>
                                    <th>{list.description}</th>
                                    <th>{list.stargazers_count}</th>
                                    <th>{list.open_issues_count}</th>
                                    <th>{list.watchers}</th>
                                </tr>
                            ))
                        : repos.length === 0 && loading ?
                            <tr>
                                <th colSpan={6} className="dataNotFound">
                                    {/* <Box>
                                        <CircularProgress />
                                    </Box> */}
                                    Loading...
                                </th>
                            </tr>
                        :
                            <tr>
                                <th colSpan={6} className="dataNotFound">No repositories found</th>  
                            </tr>}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GitHubRepos;