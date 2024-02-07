
import ditto from "../../logo/ditto.png";
import { Button, Typography } from "@mui/material";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { useEffect } from "react";
import { clientId } from "../../../Services/Vars/Vars";

const Landing = () => {
  const idGoogle = clientId;
  console.log("idGoogle", idGoogle);

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: idGoogle,
      })
    }
    gapi.load('client:auth2', start)
  },[])

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
  }
  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  }
  return (
    <div className="flex flex-col my-36">
     
      <div className="flex my-16 justify-center  gap-20 h-1/2">
        <div className="flex flex-col justify-center items-center gap-20">
          <h1 className="text-7xl  font-bold text-center m-5 ">
            JOIN THE COMMUNITY
          </h1>
          <div className="flex gap-5   ">
            <Button
              className="w-40 "
              variant="contained"
              color="primary"
              size="large"
            >
              <Typography variant="button" style={{ fontWeight: "bold" }}>
                Sign Up
              </Typography>
            </Button>
            <Button
              className="w-40 "
              variant="contained"
              color="primary"
              size="large"
            >
              <Typography variant="button" style={{ fontWeight: "bold" }}>
                Login
              </Typography>
            </Button>
            <GoogleLogin 
              clientId={idGoogle}
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy="single_host_policy"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={ditto} alt="ditto" className="h-max bg-contain max-h-96" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
