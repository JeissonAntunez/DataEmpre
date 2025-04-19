import React from 'react';
import './css/newAccount.css';
import { generateDays, generateMonths, generateYears } from '../utils/NewAccount';

const NewAccount: React.FC = () => {

    return (
        <div className="newAccount">
            <h1>Mi portal</h1>
            <form>
                <span>Crea una cuenta</span>
                <hr />
                <label>
                    <input type="text" name="username" placeholder='Nombre' />
                    <input type="text" name="lastname" placeholder='Apellido' />
                </label>
                <label>
                    Fecha de Nacimiento:
                    <select name="day"> {generateDays()} </select>
                    <select name="month"> {generateMonths()} </select>
                    <select name="years"> {generateYears()} </select>
                </label>
                <label>
                    Confirmar Contraseña:
                    <input type="password" name="confirmPassword" />
                </label>
                <button type="submit">Crear Cuenta</button>
            </form>
        </div>
    );
}

export default NewAccount;
