import React, { useState } from "react";
import style from "./styles/main.module.css";
import { BrowserRouter, useNavigate } from "react-router-dom";


function checkPasswordStrength(password) {
    if (password.length < 8) return 0;
    const regexes = [
        /[a-z]/,
        /[A-Z]/,
        /[0-9]/,
        /[~!@#$%^&*)(+=._-]/
    ]
    console.log(regexes
        .map(re => re.test(password))
        )
    return regexes
    .map(re => re.test(password))  // return true ou false
    .reduce((score, t) => t ? score + 1 : score, 0) //vê se é true, se sim, adiciona1 ao score. O score começa a 0
}

function validateEmail(email) {
    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return EMAIL_REGEX.test(email)
}
function UserLogin(values, InfoId) {
    const [err, setErr] = useState({})
    const [email, setEmail] = useState('')
    // const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    function HandleErr(values) {
        setErr( e => {
            let erros = {}
            if (!validateEmail(values.email)) {
                erros.errMessageMail = 'O email inserido não é válido.'
                console.log('erro em mail')
            }

            if(checkPasswordStrength(values.pass) < 3) {
                erros.errMessagePass = 'A password inserida não é válida.'
                console.log('erro em pass')
            }

            if (pass !== values.confirm) {
                erros.errMessageConfirm = 'As passwords não coincidem.'
                console.log('erro em confirm')
            }

            return erros;

        })
        
    }

    function HandleUserInfo(values, InfoId) {
        HandleErr(values)
        if (InfoId === 'email') return setEmail(values.email)
        if (InfoId === 'password') return setPass(values.pass)
    }


    // if (InfoId === 'email') return setEmail(values.email)
    // if (InfoId === 'password') return setPass(values.pass)
          
    return (
          <div >
            <header >

              <form  onSubmit={async e =>{
                  e.preventDefault();
                  //console.log('trying to log in')
                  const res = await fetch('/api/login', {
                      method: 'POST',
                      headers:{
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({ email, password:pass})
                  })
                  //console.log('got answer')
                  if(res.status===400){
                      const json = await res.json()
                     // console.log('fds again')
                  }
                  if(res.status===200){
                      console.log('YES BABYYY')
                      // const json = await res.json() 
                      // localstorage.setitem('token', json.token)
                    //   navigate('/api/game1')
                  }
              }}> 

                    <p >LOGIN</p>
                      <div >
                        <p >EMAIL</p>
                        <input type="email"  onChange={(e) => HandleUserInfo({email:e.target.value, pass: pass}, 'email')}/>
                        {/* <p className={logstyles.Invalida}>EMAIL INVÁLIDO</p> */}
                      </div>
    
                    <div >
                        <p >PASSWORD</p>
                        <input type="password"  onChange={(e) => HandleUserInfo({email:email, pass: e.target.value}, 'password')}/>
                        <p ><a href="ERROR 404, PAG NOT FOUND">ESQUECI-ME DA PASSWORD</a></p>
                        {(err.errMessageMail || err.errMessagePass) ? <p >EMAIL E/OU PASSWORD INVÁLIDA</p> : <p></p>}
                    </div>
    
                  <button >VAMOS JOGAR!!</button>
                  <p >NÃO TENS CONTA? <a href="ALGUMA CENA">CRIA UMA!</a></p>
                    
                    
                </form>
                    
      
              
              
            </header>
          </div>
        );
      
}
function UserCreation({changeState}) {



    function HandleErr(values) {
        setErr( e => {
            let erros = {}
            if (!validateEmail(values.email)) {
                erros.errMessageMail = 'O email inserido não é válido.'
                console.log('erro em mail')
            }

            if(checkPasswordStrength(values.pass) < 3) {
                erros.errMessagePass = 'A password inserida não é válida.'
                console.log('erro em pass')
            }

            if (pass !== values.confirm) {
                erros.errMessageConfirm = 'As passwords não coincidem.'
                console.log('erro em confirm')
            }

            return erros;

        })
        
    }

    function HandleUserInfo(values, InfoId) {
        HandleErr(values)
        if (InfoId === 'email') return setEmail(values.email)
        if (InfoId === 'password') return setPass(values.pass)
        if (InfoId === 'confirm') return setConfirm(values.confirm)

        if (validateEmail && checkPasswordStrength >= 3) {
            setUser()
        }
    }

    const [err, setErr] = useState({})
    const [email, setEmail] = useState('')
    
    const [pass, setPass] = useState('')
    const [confirm , setConfirm] = useState('')
    // let navigate = useNavigate();
    const [user, setUser] = useState({email: email, pass:pass})
    console.log(email, pass, confirm, user)

    return (
        <div >
          <header >
            
           
            <form  onSubmit={async e =>  {
            e.preventDefault();

            const res = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password: pass, passwordConfirmation: confirm })
            })
            if(res.status===400){
                const json = await res.json()
               // console.log(json())
            }
             if (res.status === 200) {
            //     navigate()
                console.log('YES BABY')
            } 
        }}> {/* era uma div */}
  
                <p >CREATE AN ACCOUNT</p>
  
                    <div >
                      <p >EMAIL</p>
                      <input type="email"  onChange={(e) => HandleUserInfo({email:e.target.value, pass:pass, confirm:confirm}, 'email')}/>
                      {err.errMessageMail ? <p >INVALID EMAIL</p> : <p></p>}
                    </div>
  
                  <div >
                      <p >PASSWORD</p>
                      <input type="password"  onChange={(e) => HandleUserInfo({email:email, pass: e.target.value, confirm: confirm}, 'password')}/>
                      {err.errMessagePass ? <p >INVALID PASSWORD</p> : <p></p>}
                  </div>
  
                  <div >
                      <p >CONFIRM PASSWORD</p>
                      <input type="password" onChange={(e) => HandleUserInfo({email: email, pass: pass, confirm: e.target.value}, 'confirm')}/>
                      {err.errMessageConfirm ? <p >INVALID PASSWORD</p> : <p></p>}
                  </div>
              
                <button >Create Account</button>
                <button onClick={() => changeState()}>Allready have an Account</button>
            </form>  {/* era uma div */}
    
    
            
            
          </header>
        </div>
      );
    
}

export function UserEnter(){
    const [acount, setAcount] = useState(false)
    return (
        <div>
            {!acount ? <UserCreation changeState={() => setAcount(!acount)} /> : <UserLogin />}
        </div>
    )
}
