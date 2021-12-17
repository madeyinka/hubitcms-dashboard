import React,{useState,useEffect} from 'react'
import useStyles from './styles'
import { Button} from '@material-ui/core'

import { userUpdatePassword } from '../../services/PostService'
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { useLocation, useHistory } from 'react-router'
import hubitlogo from '../../assets/hubit.png' ;

import { Icon } from '@iconify/react';



const NewPassword = () => {
    
    const [text, setText] = useState(true);
    const [pshow, setPshow] = useState(true);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showError, setShowError] = useState(false);
    const [showErrorPassword, setShowErrorPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handlePChange = (e) => {
        setPassword(e.target.value);
    }
    const handleCPChange = (e) => {
        setConfirmPassword(e.target.value);

    }
    const changeType = () => {
        setText(!text);
    }
     const  changePType = () => {
        setPshow(!pshow);
    }

    const history = useHistory();

    useEffect(() => {
        window.scroll(0,0)
}, [])
const checkPassword = (pass1, pass2) => {
    if(pass1 !== pass2) {
        setShowErrorPassword(true)
    }
    else {
        setShowErrorPassword(false)
    }
}

// function to collect key and identity from the link parameters using react-router-dom
// const {id} =  useParams();
const querry = new URLSearchParams(useLocation().search)
const key = querry.get('key')
const identity = querry.get('identity')





    const handleSubmit = (e) => {
        e.preventDefault();
        checkPassword(password,confirmPassword);
        if(password === confirmPassword){
            const data = {
                "identity": identity,
                "password": password,
                "key": key,
            }
            console.log(data)
            userUpdatePassword(data).then(res => {
                if(res.data.error === false){
                    setShowErrorPassword(false)
                    
                    history.push('/reset-password-success');
                } else {
                    setShowError(true)
                    setErrorMessage(res.data.message)
                }
            })
        }
    }
    // setTimeout(() => {
    //     setShowError(false);
    // }, 70000);
const classes = useStyles();

    
return (
        <>
        <div className="desktop">

            <div className={classes.root}>
                <img src={hubitlogo} alt="hubut logo" className={classes.logoImg} />
                <div className={classes.loginContainer}>
                     <div className={classes.loginForm}>
                        <p className={classes.loginTitle}> 
                        Reset Password
                        </p>
                              
                    <p className={classes.lText}> 
                   keep your password secured
                      </p>
                <div className={classes.formItem}>
           <div className={classes.errorMsg}>
                {showError ? `${errorMessage}` : ''}  
                </div> 
            <div className={classes.margin}>
            <Icon icon="gridicons:lock" className={classes.iconL} />

                <FormControl className={classes.margin}>
        
        <Input
          id="input-with-icon-adornment"
          className={classes.input}
          type={text ? "password" : "text"}
          placeholder="Password"
          onChange={handlePChange}
          value={password}
     
          endAdornment={
            <InputAdornment position="end">
            {text ? <Icon icon="fa-solid:eye-slash" onClick={changeType} className={classes.iconRight} /> : <Icon icon="fa-solid:eye" onClick={changeType} className={classes.iconRight} />}
                
              
            </InputAdornment>
          }
        />
      </FormControl>
      </div>
            <div className={classes.margi}>
            <Icon icon="gridicons:lock" className={classes.icon} />
            

                <FormControl className={classes.mar}>
        
        <Input
          id="input-with-icon-adornment"
          
          className={classes.input}
          type={pshow ? "password" : "text"}
          
          placeholder="Re-enter password"
          onChange={handleCPChange}
          value={confirmPassword}
          endAdornment={
            <InputAdornment position="end">
            
            {pshow ? <Icon icon="fa-solid:eye-slash" onClick={changePType} className={classes.iconRight} /> : <Icon icon="fa-solid:eye" onClick={changePType} className={classes.iconRight} />}
              
            </InputAdornment>
          }
        />
      </FormControl>
      </div>

                </div>
                </div> 
                
                <div className={classes.errorP}>
                {showErrorPassword ? 'Password do not match' : ''}  
                </div> 
                 <div className={classes.loginButton}>
                    <Button   onClick={handleSubmit} className={classes.btned}>
                        Reset Password
                    </Button>
                    </div> 
                    <div className={classes.extraSpace}>

                    </div>
                    <div className={classes.extraSpace}>

                    </div>

                

                 
             </div>
        </div>
        </div>
        </>
    )
}

export default NewPassword;
