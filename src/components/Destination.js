import Destinationdata from "./Destinationdata";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1> Points To Travel </h1>
      <p> “The journey of a thousand miles begins with a single step”</p>
      <Destinationdata
        className="first-des"
        heading="Ko Mook ,Thailand"
        text="Koh Mook is located at the western coast of Thailand in the
         Andaman Sea, but is pretty much unknown to many Thailand travelers.
          Who travels to the west side of Thailand, most probably visits places
           like the lively Phuket, the beautiful Krabi, the famous Phi Phi
            Islands or the quiet island Koh Lanta.Enclosed by towering limestone
             cliffs, washed by a Listerine-green.
        lagoon and reachable only at low tide by swimming or taking a small
        boat through a dark and dripping sea cave, the beach of Hat Morakot
        was a pirate lair until the early 20th century."
        img1="https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2022/05/9.-Aerial-view-of-Koh-Hong-island-in-Krabi-Thailand_Credit_GettyImages-1309583882.jpg?resize=2048,1365"
        img2="https://cf.bstatic.com/xdata/images/hotel/max1024x768/230490993.jpg?k=0d2c5ef319850c5987d70615b5f9a75f34e41b1f7ef84c821ebe9fae493b4d3c&o=&hp=1"
      />

      <Destinationdata
        className="first-des-reverse "
        heading="Eiffel Tower, Paris, France"
        text="The top of the Eiffel Tower seems like the perfect spot 
        to study stars and weather. No wonder Eiffel set up two 
        small laboratories on the third level where astonomers and 
        meteorologists could work. Eiffel conducted his own experiments
         as well. To learn more about how objects move against air, 
         he dropped items attached to cords from the second level of the tower 
         (about 380 feet aboveground) and observed how they fell."
        img1="https://i2-prod.mirror.co.uk/incoming/article21399979.ece/ALTERNATES/s615b/0_Paris-City-Views.jpg"
        img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW4EgXbgbkKUOiFRpTkvyNsIv6tc_VAkPqyw&usqp=CAU"
      />
    </div>
  );
};

export default Destination;
