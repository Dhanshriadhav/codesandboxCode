import "./Trip1Styles.css";
import TripData from "./Tripdata";

function Trip() {
  return (
    <div className="trip">
      <h1> Recent Journey</h1>
      <p> “TRAVEL IS THE ONLY THING YOU BUY THAT MAKES YOU RICHER.” </p>
      <div className="tripcard">
        <TripData
          image="https://wallpapercave.com/wp/wp11476007.gif"
          heading=" To Kedarnath ,India"
          text=" Kedarnath is a town and Nagar Panchayat in 
          Rudraprayag district of Uttarakhand, India, known 
          primarily for the Kedarnath Temple. It is approximately 
          86 kilometres from Rudraprayag, the district headquarter.
           Kedarnath is the most remote of the 
          four Chota Char Dham pilgrimage sites."
        />
        <TripData
          image="https://www.go2india.in/maharashtra/images/pratapgad2.JPG"
          heading=" To Pratapgad ,Maharashtra"
          text=" Pratapgad is 21 kms from Mahabaleshwar on Mahad 
          Road. It is very important fort as the major fight with 
          Afzal Khan took place here on 10’th November 1659. In 1656
           Ch. Shivaji Maharaj built this fort. The height of this 
           fort is 3543 feet above sea level. Also temple of Tulja Bhavani has been built here by Ch. Shivaji Maharaj. You can have vast look out of Hundreds 
          of kilometer area right from Konkan."
        />
        <TripData
          image="https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416136_1280.jpg"
          heading=" To Santorini, Greece"
          text=" Santorini is the world-famous volcanic island located 
          in the most southern part of the Cyclades group of islands
           in the Aegean Sea, in Greece. Great poets have sung its praises, 
           a 4.000 year old history. The eternal rock continues to stand,
            strong and majestic rising proudly from the sea and
           guarding well the secrets of Atlantis."
        />
      </div>
    </div>
  );
}

export default Trip;
