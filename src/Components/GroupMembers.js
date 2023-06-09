
import axios from "axios";
import { useState, useEffect } from "react";
import Modal from 'react-modal';
import Members from "./Members";

const API = process.env.REACT_APP_API_URL


const GroupMembers = ({ group, id }) => {

    const [profileCount, setProfileCount] = useState(0)
    const [profileByGroup, setProfileByGroup] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        axios
      .get(`${API}/usergroups/${id}/profiles/count`)
      .then((res) => {
        console.log(res.data)
        setProfileCount(res.data)
      })
      .catch((c) => {
        console.warn("catch", c)
      })
      axios
      .get(`${API}/usergroups/groups/${id}`)
      .then((res) => {
        console.log(res.data)
        setProfileByGroup(res.data)
      })
      .catch((c) => {
        console.warn("catch", c)
      })
    }, [id])






    return (
        <div>
            <h3>Number of members in this group:</h3> <button onClick={() => setIsModalOpen(true)} className='borderman btn-border' style={{border: 'none', outline: 'none', padding: '10px', backgroundColor: '#F18701', borderRadius: '5px', width: '200px', height: '50px', fontSize: '20px', color: '#FFFFFF'}}>{profileCount}</button> 
            <Modal 
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            contentLabel="Member Modal" >
            {profileByGroup.map((member) => {
        console.log(member)
              return <Members key={member.id} member={member} />;
            })}
            <button onClick={() => setIsModalOpen(false)} className='borderman btn-border' style={{border: 'none', outline: 'none', padding: '10px', backgroundColor: '#F18701', borderRadius: '5px', width: '200px', height: '50px', fontSize: '20px', color: '#FFFFFF'}}>Cancel</button>
            </Modal>
        </div>
    );
};

export default GroupMembers;