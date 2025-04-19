import React from 'react';
import './css/newAccount.css';
import { generateDays, generateMonths, generateYears } from '../utils/NewAccount';
import { Link } from 'react-router-dom';


const NewAccount: React.FC = () => {

    return (
        <div className="newAccount">
            <h1>Mi portal</h1>
            <form>
                <h2>Crea una cuenta</h2>
                <hr />
                <label className='username'>
                    <input className='username1' type="text" name="username" placeholder='Nombre' />
                    <input className='lastname1'  type="text" name="lastname" placeholder='Apellido' />
                </label>
                <label className='fecha'>
                    <span className='fecha-letra'>Fecha de Nacimiento: </span>
                    <div className="fecha-grid">
                        <select name="day"> {generateDays()} </select>
                        <select name="month"> {generateMonths()} </select>
                        <select name="years"> {generateYears()} </select>
                    </div>
                </label>
                <label className='genero'>
                    <span>Género:</span>
                    <div className="genero-grid">
                        <div className="genero_woman">
                            <span>Mujer</span>
                            <input type="radio" />
                        </div>
                        <div className="genero_men">
                            <span>Hombre</span>
                            <input type="radio" />
                        </div>
                        <div className="genero_x">
                            <span>Personalizado</span>
                            <input type="radio" />
                        </div>
                    </div>
                </label>
                <label> 
                    <input type="text" name="email" placeholder='Correo electrónico' />
                </label>
               <label> 
                 <input type="password" name="password" placeholder='Contraseña nueva' />

               </label>
                <button type="submit">Registrarte</button>
                <Link to="/login">¿Ya tienes una cuenta?</Link>
            </form>
        </div>
    );
}

export default NewAccount;
