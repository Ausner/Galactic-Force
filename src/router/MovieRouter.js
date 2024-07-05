import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "../views/Home";
import { Checkout } from "../views/Checkout";
import { Header } from '../components/Header';

/**
 * MovieRouter
 * Enrutador de la aplicacion
 * Definimos dentro de él las rutas que nuestra aplicacion va a manejar.
 * @returns
 */
export const MovieRouter = () => {
    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/checkout/:id/:action" element={<Checkout/>}/>
            </Routes>
        </BrowserRouter>
    );
};
