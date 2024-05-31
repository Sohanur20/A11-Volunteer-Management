

import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import VolunteerNeedsPost from "./VolunteerNeedsPost/VolunteerNeedsPost";
import Features from "../../Shared/Features/Features";
import Work from "../../Shared/Work/Work";
import NewFeatured from "../NewFeatured/NewFeatured";
import AllFeedback from '../NewFeatured/AllFeedback/AllFeedback'


const Home = () => {


  return (

    <div>
      <Helmet>
        <title>volunteer management Home</title>
      </Helmet>
    <div className="mt-10">
      <Banner></Banner>
      <Features></Features>
    
      {/* Volunteer Needs Now Section:*/}
      <VolunteerNeedsPost></VolunteerNeedsPost>
  
<Work></Work>

      {/* show volenteer route */}

<NewFeatured></NewFeatured>
      <AllFeedback></AllFeedback>
    </div>
    </div>

  );
};

export default Home;
