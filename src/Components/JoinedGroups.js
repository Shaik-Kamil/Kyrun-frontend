import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GroupDetails from './GroupDetails';
import '../CSS/Groups.css'
import { Link } from 'react-router-dom';
const API = process.env.REACT_APP_API_URL

const JoinedGroups = ({ userId }) => {

    const [joinedGroup, setJoinedGroup] = useState([]);
    const [numJoinedGroups, setNumJoinedGroups] = useState(0)

    useEffect(() => {
        axios.get(`${API}/usergroups/${userId}`)
          .then(res => {
            setJoinedGroup(res.data);
            setNumJoinedGroups(res.data.length)
          })
          .catch(err => {
            console.log(err);
          });
      }, []);


    return (
        <div>
     <h1>Joined Groups</h1>
     <p>Number of groups joined: {numJoinedGroups}</p>
      
      {joinedGroup.map((group) => {
        console.log(group)
              return <GroupDetails key={group.id} group={group} />;
            })}
            
        </div>
    );
};


export default JoinedGroups;