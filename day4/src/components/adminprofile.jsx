
import '../assets/css/userprofile.css';
import CustomNavbar from '../components/Navbarcus';

const UserProfile = () => {
  return (
    <div>
      <header>
        <CustomNavbar/>
      </header>
      <main>
        <div className="wrapper">
          <div className="left">
            <img src="https://i.imgur.com/cMy8V5j.png" alt="user" width={100} />
            <h4>Tom Hiddleston</h4>
            <p>User@ZeninEvents</p>
          </div>
          <div className="right">
            <div className="info">
              <h3>Information</h3>
              <div className="info_data">
                <div className="data">
                  <h4>Email</h4>
                  <p>tom@gmail.com</p>
                </div>
                <div className="data">
                  <h4>Phone</h4>
                  <p>678923456</p>
                </div>
              </div>
            </div>

            <div className="info">
            
              <div className="info_data">
                <div className="data">
                  <h4>Age</h4>
                  <p>24</p>
                </div>
                <div className="data">
                  <h4>Location</h4>
                  <p>London</p>
                </div>
              </div>
            </div>

            <div className="projects">
             
              <div className="projects_data">
                <div className="data">
                  <h4>Recent Events</h4>
                  <p>Birthday Party</p>
                </div>
                {/* Add more project information as needed */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;