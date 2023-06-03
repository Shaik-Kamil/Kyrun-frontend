import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../CSS/LandingNav.css';

const LandingPage = () => {
  const fadeProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const emojiProps = useSpring({
    transform: 'translateY(-20px)',
    from: { transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  return (
    <section className="landing-page">
      <div className="landingNav">
        <div className="landingNav-container">
          <h2>
            <a href="#more-info">More Info</a>
          </h2>
          <h2>
            <a href="#download">Download</a>
          </h2>
        </div>
      </div>
      <div className="info">
        <div className="top-content">
          {/* <h1>Welcome to Kyrun</h1> */}
          {/* <p>Your Running Companion</p> */}
        </div>
        <div className="logo-container">
          <img
            src="https://raw.githubusercontent.com/Shaik-Kamil/Kyrun-frontend/main/src/LOGO%20NO%20BG.png"
            alt="Kyrun Logo"
            className="landing-logo animated-logo"
          />
        </div>
        {/* <div className="content-container">
          <animated.h2 style={fadeProps}>Find your match made in running heaven with our custom filters</animated.h2>
          <p>
            With Kyrun, you can filter runners based on gender, age, location, and even running pace. Once you've
            selected your preferences, you can browse through the results and click on the profiles that share your
            common interests and start building your network.
          </p>
        </div>
        <section className="fade-in" id="more-info">
          <h2>Tie up your laces and start chatting with your running buddy</h2>
          <p>Easily plan jogging sessions, ask questions, and get to know your jogging partners better with our in-app chat feature.</p>
          <animated.span style={emojiProps} role="img" aria-label="emoji">
            🏃‍♀️
          </animated.span>
        </section> */}
        <section className="fade-in">
          <h2>One Extra Step of Security</h2>
          <p>One key feature of Kyrun is the SOS button, which you can use in case of an imminent threat during a jog with the person you matched with.</p>
          <div className="sos-gif-container">
            <img
              src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/3._Emergency_SOS_on_Wear_OS_a0ZSQ58.gif"
              alt="Emergency SOS"
              className="sos-gif"
            />
          </div>
          <animated.span style={emojiProps} role="img" aria-label="emoji">
            🚨
          </animated.span>
        </section>
        <p className="fade-in" id="download">Build your network today!</p>
        <div className="paragraph-boxes">
          <div className="box">
            <div className="box-inner">
              <div className="box-front">
                <p>Connect with local joggers in your area.</p>
                <animated.span style={emojiProps} role="img" aria-label="emoji">
                  🌍
                </animated.span>
              </div>
              <div className="box-back">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alamy.com%2Fstock-photo%2Fjoggers-park.html&psig=AOvVaw1dFhttps://cdn.create.vista.com/api/media/small/381818374/stock-photo-panoramic-shot-smiling-woman-joggingxbDWQqHoKesPhKzjH-t&ust=1685635325709000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJiYvY33n_8CFQAAAAAdAAAAABAD" alt="Image 1" />
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box-inner">
              <div className="box-front">
                <p>Find your match made in running heaven with our custom filters.</p>
                <animated.span style={emojiProps} role="img" aria-label="emoji">
                  💑
                </animated.span>
              </div>
              <div className="box-back">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alamy.com%2Fstock-photo%2Fjoggers-park.html&psig=AOvVaw1https://media.istockphoto.com/id/1366052585/photo/shot-of-a-group-of-friends-hanging-out-before-working-out-together.jpg?s=612x612&w=0&k=20&c=rj7LgjUuXde0eLWikS1rvDnsKDdBotgsy9eM5HDzko0=dFxbDWQqHoKesPhKzjH-t&ust=16856353257https://cdn.create.vista.com/api/media/small/381818374/stock-photo-panoramic-shot-smiling-woman-jogging09000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJiYvY33n_8CFQAAAAAdAAAAABAD" alt="Image 2" />
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box-inner">
              <div className="box-front">
                <p>Tie up your laces and start chatting with your running buddy.</p>
                <animated.span style={emojiProps} role="img" aria-label="emoji">
                  💬
                </animated.span>
              </div>
              <div className="box-back">
                <img src="https://www.google.com/url?sa=i&url=https%3A%https://cdn.create.vista.com/api/media/small/381818374/stock-photo-panoramic-shot-smiling-woman-jogging2F%2Fwww.alamy.com%2Fstock-photo%2Fjoggers-park.html&psig=AOvVaw1dFxbDWQqHoKesPhKzjH-t&ust=1685635325709000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJiYvY33n_8CFQAAAAAdAAAAABAD" alt="Image 3" />
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box-inner">
              <div className="box-front">
                <p>One Extra Step of Security.</p>
                <animated.span style={emojiProps} role="img" aria-label="emoji">
                  🔒
                </animated.span>
              </div>
              <div className="box-back">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alamy.com%2Fstock-photo%https://cdn.create.vista.com/api/media/small/381818374/stock-photo-panoramic-shot-smiling-woman-jogging2Fjoggers-park.html&psig=AOvVaw1dFxbDWQqHoKesPhKzjH-t&ust=1685635325709000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJiYvY33n_8CFQAAAAAdAAAAABAD" alt="Image 4" />
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box-inner">
              <div className="box-front">
                <p>Build your network today!</p>
                <animated.span style={emojiProps} role="img" aria-label="emoji">
                  🌐
                </animated.span>
              </div>
              <div className="box-back">
                <img src="https://media.istockphoto.com/id/1155292115/photo/training-in-bad-weather-conditions.jpg?s=612x612&w=0&k=20&c=FXAjp24JiDPp5OcsHRjLzQYP2ZtsK95BEIauDj0vvLc=://media.mlive.com/flint-journal/photo/2012/09/11597238-lhttps://cdn.create.vista.com/api/media/small/381818374/stock-photo-panoramic-shot-smiling-woman-joggingarge.jpgttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alamy.com%2Fstock-photo%2Fjoggers-park.html&psig=AOvVaw1dFxbDWQqHoKesPhKzjH-t&ust=1685635325709000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJiYvY33n_8CFQAAAAAdAAAAABAD" alt="Image 5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
