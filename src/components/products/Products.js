import { faBookOpen, faCheckCircle, faFighterJet, faHospitalAlt, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import img1 from "../../assets/images/img1.png"
import img2 from "../../assets/images/img2.png"
import img3 from "../../assets/images/img3.png"
import img4 from "../../assets/images/img4.png"
import img5 from "../../assets/images/img5.png"
import img6 from "../../assets/images/img6.png"
import img7 from "../../assets/images/img7.png"
import img8 from "../../assets/images/img8.png"
import img9 from "../../assets/images/img9.png"
import img10 from "../../assets/images/img10.png"
import img11 from "../../assets/images/img11.png"
import img12 from "../../assets/images/img12.png"
import img13 from "../../assets/images/img13.png"
import img14 from "../../assets/images/img14.png"
import Product from './Product';

const products=[
    {id:1,image:img1,name:"Sanitizer",header:"Surgical Scrub, 4% chlorhexidine solution with isopropyl alcohol",details:"For body wash"},
    {id:2,image:img2,name:"Sanitizer",header:"Surgical Scrub, 4% chlorhexidine solution with isopropyl alcohol",details:"For body wash"},
    {id:3,image:img3,name:"Sanitizer",header:"Surgical Scrub, 4% chlorhexidine solution with isopropyl alcohol",details:"For body wash"},
    {id:4,image:img4,name:"Sanitizer",header:"Surgical Scrub, 4% chlorhexidine solution with isopropyl alcohol",details:"For body wash"},
    {id:5,image:img5,name:"Sanitizer",header:"Surgical Scrub, 4% chlorhexidine solution with isopropyl alcohol",details:"For body wash"},
    {id:6,image:img6,name:"Sanitizer",header:"Surgical Scrub, 4% chlorhexidine solution with isopropyl alcohol",details:"For body wash"},
    {id:7,image:img7,name:"Sanitizer",header:"Surgical Scrub, 4% chlorhexidine solution with isopropyl alcohol",details:"For body wash"},
    {id:8,image:img8,name:"Sanitizer",header:"Surgical Scrub, 4% chlorhexidine solution with isopropyl alcohol",details:"For body wash"},
    {id:9,image:img9,name:"Sanitizer",header:"Surgical Scrub, 4% chlorhexidine solution with isopropyl alcohol",details:"For body wash"},
    {id:10,image:img10,name:"Sanitizer",header:"Surgical Scrub, 4% chlorhexidine solution with isopropyl alcohol",details:"For body wash"},
    {id:11,image:img11,name:"Sanitizer",header:"Surgical Scrub, 4% chlorhexidine solution with isopropyl alcohol",details:"For body wash"},
    {id:12,image:img12,name:"Sanitizer",header:"Surgical Scrub, 4% chlorhexidine solution with isopropyl alcohol",details:"For body wash"},
    {id:13,image:img13,name:"Sanitizer",header:"Surgical Scrub, 4% chlorhexidine solution with isopropyl alcohol",details:"For body wash"},
    {id:14,image:img14,name:"Sanitizer",header:"Surgical Scrub, 4% chlorhexidine solution with isopropyl alcohol",details:"For body wash"},
    ];

const Products = () => {
    return (
        <section className="products" id="products">
            <h2 className="products-title">Our Products</h2>
            <div className="products-parent">
                {products.map(product=>{
                    return(
                        <Product  image={product.image} name={product.name} header={product.header} details={product.details}/>
                    );
                })}
               </div>
        </section>
    )
}
export default Products
