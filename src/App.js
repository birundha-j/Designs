import './App.css';
import Logoimage from './image/imagess.jpg';
import { Input, Space, Switch } from 'antd';
import { AudioOutlined, DownOutlined, CalendarOutlined, BellOutlined } from '@ant-design/icons';
import Nurse1 from './image/nuese1.jpg';
import Nurse2 from './image/nurse2.jpg';
import Nurse3 from './image/nurse3.jpg';
import Nurse4 from './image/nurse4.jpg';
import offer from './image/offer.jpg';
import calender from './image/calender.png';
import Profile from './image/prince.jpg'
const photos = [
  { img: Nurse1, Name: "Rose", symbol: offer, title: "27 years/5 years Exp ", rating: "4.0", reviews: "161 Reviews", position: "Baby care", Description: "480 KWD / Month" },
  { img: Nurse2, Name: "Joy", symbol: offer, title: "24 years/4 years Exp", rating: "4.5", reviews: "150 Reviews", position: "Elderly care", Description: "440 KWD / Month" },
  { img: Nurse3, Name: "Reemy", symbol: offer, title: "29 years/6 years Exp", rating: "4.2", reviews: "170 Reviews", position: "Baby care", Description: "430 KWD / Month" },
  { img: Nurse4, Name: "Cherry", symbol: offer, title: "29 years/6 years Exp", rating: "4.0", reviews: "131 Reviews", position: "Baby care", Description: "450 KWD / Month" }]
function App() {
  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 10,
        color: 'gray'

      }}
    />
  );
  const onSearch = value => console.log(value);
  return (
    <div>
      <div className="container">
        <div className="header">

          <div className="headermenus">
            <div className="logo"><img src={Logoimage} className="logodesign" /></div>
            <div className="homestyle">Home</div>
            <div className="shopstyle">Shopping</div>
          </div>
          <div className="searchbar">
            <Space direction="vertical">
              <Search placeholder="Doctor or speciality,clinic" enterButton /></Space>
          </div>
          <div className="icons">
            <div className="calender"> <CalendarOutlined /> </div>
            <div className="bellsymbol"><BellOutlined /></div>
            <div><img src={Profile} className="profileimage"/></div>
          </div>
        </div>
        <div className="mainmaster">
          <div className="leftside">
            <div className="lefttop">
              <div className="filtterbox">
                <div className="fill">Filter</div>
                <div>
                  <div className="line1">
                    <div className="monthly">Monthly Cost Range</div>
                    <div className="kwd500">500 kwd</div>
                  </div>
                  <div className="progress"></div>
                  <div className="line2">
                    <div className="kwds">200 KWD</div>
                    <div className="kwds">600 KWD</div>
                  </div>
                </div>
                <div>
                  <div className="line1">
                    <div className="monthly">Experience</div>
                    <div className="kwd500">5 years</div>
                  </div>
                  <div className="progress"></div>
                  <div className="line2">
                    <div className="kwds">1 year</div>
                    <div className="kwds">25 year</div>
                  </div>
                </div>
                <div className="nation">
                  <div className="Nationality">Nationality</div>
                  <div><Input style={{ width: '80%', height: '20px' }} /></div>
                </div>
                <div className="GenderHours">
                  <div className="genderfemale">
                    <div className="gender">Gender</div>
                    <div className="femalearrow">
                      <div className="Female">Female</div>
                      <div><DownOutlined /></div>
                    </div>
                  </div>
                  <div className="genderfemale">
                    <div className="Nationality">Duty Hours</div>
                    <Switch defaultChecked />

                  </div>
                </div>
              </div>
            </div>
            <div className="leftbottom">
              <div className="calenderbox">
                <div className="Choosetext">Choose Date</div>
                <img src={calender} className="calenderimage" />
                <button >Apply</button>
              </div>
            </div>

          </div>
          <div className="rightside">
            <div className="experiencerating">

            </div>
            <div>
              {photos.map((data) => {
                return (
                  <div className="imageContainer" >
                    <img className="imageSize" src={data.img} />
                    <div className="aligntext">
                      <div className="lefttitles">
                        <div className="Namestyle">{data.Name}</div>
                        <div className="titlestyle">{data.title}</div>
                        <div className="titlestyle">{data.position}</div>
                      </div>
                      <div className="righttitls">
                        <div className="discriptionstyle">{data.Description}</div>
                        <div className="ratingimages">
                          <div>
                            <div className="ratingstyle">{data.rating}</div>
                            <div className="reviewstyle">{data.reviews}</div>
                          </div>
                          <img src={data.symbol} className="offerimage" />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App;