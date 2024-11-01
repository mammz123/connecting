import React from "react";
import log from '../vedio/dots.jpeg'
import Testimonials from "./Testimonials";



const ClientShowcase = () => {
  const clients = [
    { name: "Government of Abu Dhabi", imgSrc: "https://www.cdnlogo.com/logos/a/43/adidas-originals.svg" },
    { name: "Government of Dubai", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzeAmvqjv0FSvvR05sIZs66fHeq2gNo0yyvlIP1TvVPOFr-HCxMrF1l-nTDpNyKACsdg&usqp=CAU" },
    { name: "Government of Sharjah", imgSrc: "https://emendegypt.com/wp-content/uploads/2020/03/ADIB-450px.png" },
    { name: "Integrated Telecom", imgSrc: "https://electricalindustry.ca/wp-content/uploads/2022/05/EIN-ABB-Logo-2022-400.png" },
    { name: "LuLu Group International", imgSrc: "https://images.weare365.io/filters:format(.webp)/1920x0/AE_SL_Nesto_d1fb5863ae.png" },
    { name: "Integrated Telecom", imgSrc: "https://seeklogo.com/images/N/nissan-logo-B8F2977EFA-seeklogo.com.png" },
    { name: "LuLu Group International", imgSrc: "https://cdn.freelogovectors.net/wp-content/uploads/2023/04/coca-cola-logo3-freelogovectors.net_-180x135.png" },
    { name: "Dar Al Takaful", imgSrc: "https://static.cdnlogo.com/logos/k/44/kitkat.svg" },
    { name: "Integrated Telecom", imgSrc: "https://www.logo.wine/a/logo/TVS_Motor_Company/TVS_Motor_Company-Logo.wine.svg" },
    { name: "LuLu Group International", imgSrc: "https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo-thumbnail.png" },
    { name: "Dar Al Takaful", imgSrc: "https://www.purppledesigns.com/wp-content/uploads/2023/11/download-2.png" }
    // Add more clients as needed
  ];

  return (
    <div className="client-showcase">
      <h2>Our <span>Clients</span></h2>
      <img src={log} height={70} width={70} style={{borderRadius:"40px"}} ></img>

      <p>
      With extensive experience across industries and sectors, Connecting Dot has established itself as a top advertising agency, trusted by over 350 clients throughout the GCC and Middle East over the last decade. Our broad expertise includes working with various local and international brands—small and large scale, private and government sectors—providing innovative advertising solutions tailored to their unique needs.      </p>
      
      <div className="clients-grid">
        {clients.map((client, index) => (
          <div className="client-card" key={index}>
            <img src={client.imgSrc} alt={client.name} />
          </div>
        ))}
      </div>
      <Testimonials/>
    </div>
  );
};

export default ClientShowcase;