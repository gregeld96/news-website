import React, { useEffect, useState } from 'react';
import GeneralField from '../../../components/Fields/GeneralField';
import PasswordField from '../../../components/Fields/PasswordField';
import Logo from "../../../assets/image/logo-horiz.png";
import BaseButton from '../../../components/Buttons/BaseButton';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import CustomAlert from '../../../components/Alerts/CustomAlert';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { BaseUrl, Prefix, UserEndPoint } from '../../../utils/constants';
import api, { HttpPost } from '../../../config/axios';
import { profileSave } from '../../../store/global/actions';
// import { initiateGlobal } from '../../../store/global/actions';

function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [submitOnProgress, setSubmitOnProgress] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState("");
  const { user, finishInitiate } = useSelector(state => state.global);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function
  function resetError() {
    setEmailError("");
    setPasswordError("");
    setErrorSubmit("");
  }
  
  async function submit({email, password}) {
    resetError();
    setSubmitOnProgress(true);

    try {
      let reject = false;
  
      if(!email) {
        reject = true;
        setEmailError("Email required");
      }
  
      if(!password) {
        reject = true;
        setPasswordError("Password required");
      }
  
      if(reject) {
        setSubmitOnProgress(false);
        return;
      };
      
      let res = await HttpPost(`users/login`, {
        email: email,
        password: password
      });

      dispatch(profileSave(res.access_token))
    } catch (error) {
      console.log(error);
      setErrorSubmit(error.response.data.message);
      setSubmitOnProgress(false);
    }
  }

  useEffect(() => {
    if(user && finishInitiate) navigate('/')
  }, [user])

  return (
    <div>
      <Container>
        <Row className='login-row justify-content-center align-content-center'>
          <Col md={6}>
            <div className='login__container'>
                <img src={Logo} className="logo" onClick={() => navigate('/')} />
            </div>
            {
              errorSubmit ? <CustomAlert message={errorSubmit} open={errorSubmit ? true : false} toggle={() => setErrorSubmit("")}  /> : null
            }
            <div className='field__container'>
                <GeneralField title="Email" value={email} errorMessage={emailError} type={'email'} onChange={(e) => setEmail(e.target.value)} disabled={submitOnProgress} />
            </div>
            <div className='field__container'>
                <PasswordField title="Password" value={password} errorMessage={passwordError} onChange={(e) => setPassword(e.target.value)} disabled={submitOnProgress} />
            </div>
            <p className="d-flex text-white justify-content-end pb-5" style={{ cursor: "pointer" }} onClick={() => null}>
                Forgot Password?
            </p>
            <BaseButton title="Login" onClick={() => submit({
              email: email,
              password: password
            })} disabled={submitOnProgress} submitting={submitOnProgress} />
            <p className="d-flex justify-content-center text-white" style={{ cursor: "pointer" }} onClick={() => null}>
                Want to join with our community? <span style={{ fontWeight: "bold", color: "#C58C49", paddingLeft: "5px" }} onClick={() => navigate('/auths/register')}>Register</span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginView;
