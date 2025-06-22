// import React from 'react';
import '../css/home.css';
import profileImage from '../assets/sc.png';
// import emailIcon from '../assets/email.jpg';
import githubIcon from '../assets/gh.png';
import linkedinIcon from '../assets/linked.png';
const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-text">
        <h1>About Me</h1>
        <p>
          I'm a rising senior at Vanderbilt University pursuing a B.S. in Applied Mathematics and Computer Science, along with an M.S. in Computer Science through a 3+1 program. I'll graduate in Spring 2026.
        </p>
        <p>
          My interests lie at the intersection of machine learning and distributed systems. I enjoy building practical solutions to real-world problems.
        </p>
        <p>
          I'm currently working in Professor Gokhale's lab on my master's thesis, focusing on lightweight consensus algorithms in machine learning.
        </p>
        <p>
          Outside of academics, I'm a poker player, tennis and golf enthusiast, reader, and Formula 1 fan. I also follow soccer, crypto, and enjoy diving into advanced topics in ML and distributed systems.
        </p>
         <div className="coursework">
  <h2>Coursework</h2>
  <p>
    <strong>Graduate:</strong> Advanced ML, Advanced Deep Learning, Advanced Algorithms, Distributed Systems, Advanced Software Engineering<br />
    <strong>Systems:</strong> Operating Systems, Software Design, Data Structures, Databases, Computer Architecture<br />
    <strong>Math:</strong> Combinatorics, Cryptography, Linear Algebra, Multivariable Calculus, Probability & Statistics, Discrete Math
  </p>
</div>
 </div>

     
      <div className="home-image-container">
        <img
          src={profileImage}
          alt="Profile"
          className="profile-image"
        />
          <div className="contact-links">
        <div className="contact-icons">
          <a href="mailto:chahalarnav123@gmail.com" target="_blank" rel="noopener noreferrer">
           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACkUlEQVR4nO2YPYgTQRTHx/NbwUMUFUVFDtRCCy1EEDlFkEhyyfzfMiB4mEJIa2klkatsLS1EEMFGEBsLLRRBBEXERgtFC0XxA7+T7Jv1HJnLqLkzZ9DbJLvL/GAgkNmd95837817K4TH4/F4+oEmMlkYInNCRErRmRXSkHJIpIyGlEN/CGHgU0gkRUqIpDzARO/bBjsTfWeik6ZaHRAJxQgxSwPHGBhvn7WA4y1/XjZKDYqEYZQatLa5EzRubW4b7JPcBTxmYItICKFSmzTRw6lhMG3Wqiu1joG77oEvDKi+iwCKDHx0G/ygNTH9Nf2acnmBBs62HLvTplKZ22sBRqnZNmZt7DpbLpjR0cX/fI9oogoD2iWCG2ZkZGXPREi5jImuurUjG+AzuhB1EOxm4JWb91xLuaOrCoQQHATbNPDUiXgbBcG+WG72mlJrmOi2e3HIREe6JgI4xEQ1Z9e9OtH6WEsUk8vNZ6JTk+JGqXlxCTDDw3NsPLS8/5xRamHXai0GDjNQd1ntVq1YXD1jEcAKBq7/9LiNzZ4UjQxs10TPnJg3EdHe/1LQNGQXE710XnihgZ09rX5NobCcgWudskoHI2xWZLchN41Sq/pSxrfJ8+dNobCo43PNe+pMHPeUjrMfYeAgA1/du+43lNow3dx6qbSWie44LzQ4CMqJaqxCos0aeOSO2rsoCPZPnRMFwR4meu3WfMKl0tZEdogml1uigUtut78xcMK2BBOlN9HRiVhqCr1i8vmliW51TbU6wERjv+IGuDgxfvc7Y3H2O7rbPXsE5JnoQ0vT9jmUklL58SGUcqNtCeywv7uxhs7sVxSRUrQXkjC090jC0N4jCUNn1iM65UNkRojH4/F4RB/4AfNjBQkNj72FAAAAAElFTkSuQmCC" alt="new-post--v1"/>
          </a>
          <a href="https://github.com/arvchahal" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/arnavchahal" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
  </div>
        {/* <p className="location-text">Vanderbilt University<br />Nashville, TN 37235</p> */}
      </div>
    </div>
  );
};

export default Home;
