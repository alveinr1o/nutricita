import askCitaRobot from "../assets/askcita.png";

const AskCitaButton = () => {
  return (
    <button
      className="fixed bottom-6 right-2 p-0 bg-transparent z-50"
      style={{ border: "none" }}
      onClick={() => {
        console.log("AskCita Bot clicked!");
      }}
    >
      <img
        src={askCitaRobot}
        alt="AskCita Bot"
        className="w-48 h-48 object-contain"
      />
    </button>
  );
};

export default AskCitaButton;
