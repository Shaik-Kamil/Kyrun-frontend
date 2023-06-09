import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  TumblrShareButton,
  FacebookShareButton,
  EmailShareButton,
  TumblrIcon,
  FacebookIcon,
  EmailIcon
} from 'react-share';


function Invite() {
  const { id } = useParams();
  const URL = `https://kyrun.netlify.app/groups/${id}`;
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal} className='borderman btn-border' style={{ border: 'none', outline: 'none', padding: '10px', backgroundColor: '#F18701', borderRadius: '5px', width: '200px', height: '50px', fontSize: '20px', color: '#FFFFFF'}}>Invite</button>
      {isOpen && (
        <div className='modalOverlay'>
          <div className='modalInside'>
            <div className='title' style={{paddingTop: '20px'}}>
              <b>Share with friends and family!</b>
            </div>
            <div className='body'>
              <EmailShareButton url={URL}>
                <EmailIcon size={40} round={true} />
              </EmailShareButton>
              <FacebookShareButton url={URL}>
                <FacebookIcon size={40} round={true} />
              </FacebookShareButton>
              <TumblrShareButton url={URL}>
                <TumblrIcon size={40} round={true} />
              </TumblrShareButton>
              <br />
              <br />
              <p className='link' style={{marginLeft: '200px'}}>
                <b>Copy Url:</b> <Link to={`/groups/${id}`}>{URL}</Link>
              </p>
            </div>
            <div className='footer'>
              <button onClick={closeModal} className='borderman btn-border' style={{ border: 'none', outline: 'none', padding: '10px', backgroundColor: '#F18701', borderRadius: '5px', width: '200px', height: '50px', fontSize: '20px', color: '#FFFFFF', marginLeft: '200px'}}>Done</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Invite;
