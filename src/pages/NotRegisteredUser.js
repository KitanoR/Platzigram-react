import React, { useContext } from 'react';
import { Context } from '../Context';
import { UserForm } from '../components/UserForm';

import { RegisterMutation } from '../container/RegisterMutation';
import { LoginMutation } from '../container/LoginMutation';

export default () => {
    const { activateAuth } = useContext(Context);
    return <>
               <RegisterMutation>
                    {
                        (register, { data, loading, error }) => {
                            const onSubmit = ({ email, password }) => {
                                const input = { email, password };
                                const variables = { input };
                                register({ variables }).then(({ data }) => {
                                    const { signup } = data;
                                    activateAuth(signup);
                                })
                            }
                            const errorMessage = error && 'El usuario ya existe o hay algún problema.';
                            return (
                                <UserForm error={errorMessage} disabled={loading} title={'Registrarse'} onSubmit={onSubmit} />
                            )
                        }
                    }
               </RegisterMutation>
               <LoginMutation>
                   {
                       (login, { data,loading, error }) => {
                           const onSubmit = ({ email, password }) => {
                                const input = { email, password};
                                const variables = { input };
                                login({ variables }).then(({ data }) => {
                                    const { login } = data;
                                    activateAuth(login);
                                });
                           }
                           const errorMessage = error && 'Los datos no son correctos';
                           return(
                               <UserForm error={errorMessage} disabled={loading} title={'Iniciar sesión'} onSubmit={onSubmit} />
                           );
                       }
                   }
               </LoginMutation>
               </>
}