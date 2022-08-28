import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import AvatarImage from '../Images/profilepicture.jpg';
import OuLogo from '../Images/oulogo.png';
import KuLogo from '../Images/kulogo.png';
import AbfLogo from '../Images/abf.png';
import GarminLogo from '../Images/garmin.svg';
import CpLogo from '../Images/cplogo.png';
import TmLogo from '../Images/tmlogo.jpg';
import WesLogo from '../Images/icon.png';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';
import {aboutMe} from '../Content/AboutMe';
import ExperienceIconPanel from './ExperienceIconPanel';

export default function Album() {
  const returnLogo = (item) => {
    if (item.logo === 'OuLogo') {
      return (
        <div style={{width: '50px'}}>
          <img src={OuLogo} alt="" width="100%" />
        </div>
      );
    }
    if (item.logo === 'KuLogo') {
      return (
        <div style={{width: '50px'}}>
          <img src={KuLogo} alt="" width="100%" />
        </div>
      );
    }
    if (item.logo === 'ArcBLogo') {
      return (
        <div style={{width: '80px'}}>
          <img src={AbfLogo} alt="" width="100%" />
        </div>
      );
    }
    if (item.logo === 'GarminLogo') {
      return (
        <div style={{width: '75px'}}>
          <img src={GarminLogo} alt="" width="100%" />
        </div>
      );
    }
    if (item.logo === 'CpLogo') {
      return (
        <div style={{width: '50px'}}>
          <img src={CpLogo} alt="" width="100%" />
        </div>
      );
    }
    if (item.logo === 'TmLogo') {
      return (
        <div style={{width: '50px'}}>
          <img src={TmLogo} alt="" width="100%" />
        </div>
      );
    }
    return (
      <div style={{width: '50px'}}>
        <img src={WesLogo} alt="" width="100%" />
      </div>
    );
  };
  const renderWebHistoryItem = (item) => {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{background: 'slategrey', color: '#fff'}}
        contentArrowStyle={{
          borderRight: '7px solid  slategrey',
        }}
        iconStyle={{background: 'steelblue', color: '#fff'}}
        icon={<WebIcon />}
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
          </Grid>
          <Grid item xs={4}>
            {returnLogo(item)}
          </Grid>
          <Grid item xs={12}>
            <h4 className="vertical-timeline-element-subtitle">
              {item.subTitle}
            </h4>
          </Grid>
        </Grid>

        <p>{item.role}</p>
        <p>{item.date}</p>
        <p>{item.description}</p>
      </VerticalTimelineElement>
    );
  };

  const renderCurrentWorkItem = (item) => {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{background: 'slategrey', color: '#fff'}}
        contentArrowStyle={{
          borderRight: '7px solid  slategrey',
        }}
        iconStyle={{background: 'slategrey', color: '#fff'}}
        icon={<WorkIcon />}
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
          </Grid>
          <Grid item xs={4}>
            {returnLogo(item)}
          </Grid>
          <Grid item xs={12}>
            <h4 className="vertical-timeline-element-subtitle">
              {item.subTitle}
            </h4>
          </Grid>
        </Grid>
        <p>{item.role}</p>
        <p>{item.date}</p>
        <p>{item.description}</p>
      </VerticalTimelineElement>
    );
  };

  const renderWorkHistoryItem = (item) => {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{background: 'slategrey', color: '#fff'}}
        icon={<WorkIcon />}
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
          </Grid>
          <Grid item xs={4}>
            {returnLogo(item)}
          </Grid>
          <Grid item xs={12}>
            <h4 className="vertical-timeline-element-subtitle">
              {item.subTitle}
            </h4>
          </Grid>
        </Grid>
        <p>{item.role}</p>
        <p>{item.date}</p>
        <p>{item.description}</p>
      </VerticalTimelineElement>
    );
  };

  const renderSchoolItem = (item) => {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{background: 'darkred', color: '#fff'}}
        icon={<SchoolIcon />}
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
          </Grid>
          <Grid item xs={4}>
            {returnLogo(item)}
          </Grid>
          <Grid item xs={12}>
            <h4 className="vertical-timeline-element-subtitle">
              {item.subTitle}
            </h4>
          </Grid>
        </Grid>
        <p>{item.role}</p>
        <p>{item.date}</p>
      </VerticalTimelineElement>
    );
  };

  const renderTimelineHistory = (items) => {
    return aboutMe.history.map((item) => {
      if (item.type === 'web') {
        return renderWebHistoryItem(item);
      } else if (item.type === 'work' && item.current) {
        return renderCurrentWorkItem(item);
      } else if (item.type === 'work' && !item.current) {
        return renderWorkHistoryItem(item);
      } else if (item.type === 'school') {
        return renderSchoolItem(item);
      } else {
        return <React.Fragment />;
      }
    });
  };

  const renderAboutMeText = () => {
    return aboutMe.about.map((section) => {
      return (
        <Typography variant="body1" paragraph>
          {section}
        </Typography>
      );
    });
  };

  return (
    <React.Fragment>
      <Grid container spacing={2} alignContent="center">
        <Grid item xs={12} sm={5}>
          <Typography
            component="h2"
            variant="h3"
            color="textPrimary"
            align="center"
            gutterBottom
          >
            <img
              align="center"
              src={AvatarImage}
              alt=""
              width="40%"
              style={{borderRadius: '50%', border: '5px solid #fff'}}
            />
            <p></p>About Me
          </Typography>
          {renderAboutMeText()}
          <div>
            <Typography variant="h5" paragraph>
              Contact Me:
            </Typography>
            <Typography variant="h6" paragraph>
              email: {aboutMe.contact.email}
            </Typography>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  target="_blank"
                  href={aboutMe.contact.linkedIn}
                  style={{backgroundColor: 'slategrey'}}
                >
                  <LinkedInIcon />
                  &nbsp;LinkedIn
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  target="_blank"
                  href={aboutMe.contact.github}
                  style={{backgroundColor: 'slategrey'}}
                >
                  <GitHubIcon />
                  &nbsp;GitHub
                </Button>
              </Grid>
            </Grid>
          </div>
          <ExperienceIconPanel />
        </Grid>

        <Grid item xs={12} sm={7}>
          <VerticalTimeline>
            {renderTimelineHistory()}
            <VerticalTimelineElement
              iconStyle={{background: 'steelblue', color: '#fff'}}
              icon={<StarIcon />}
            />
          </VerticalTimeline>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
