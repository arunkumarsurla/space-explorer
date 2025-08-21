import img404 from "../../assets/404.jpg";

const notFound = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "75%",
  marginLeft: "25%",
  textAlign: "center",
};

const NotFound = () => {
  return (
    <div style={notFound}>
      <img style={{ width: "50%", height: "50%" }} src={img404} alt="404" />
    </div>
  );
};

export default NotFound;
