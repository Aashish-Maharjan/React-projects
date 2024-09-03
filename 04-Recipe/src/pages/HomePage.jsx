import Header from "../components/header";
import CardList from "../components/CardList"
import axios from'axios';
import {useEffect,useState} from "react"



export default function HomePage(){
    return (
        <>
          <Header />
          <CardList recipes={recipes}/>
        </>
        );
}