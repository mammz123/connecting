import React from 'react';


const certificationsData = [
  {
    imgSrc: 'https://img.freepik.com/free-vector/leaf-green-award-ribbon_78370-1826.jpg',
    altText: 'IAF Logo',
    text: 'SEO Certifications',
  },
  {
    imgSrc: 'https://img.freepik.com/premium-photo/golden-award-medal-with-laurel-wreath-red-ribbon-white-background_953793-1411.jpg?ga=GA1.1.2089342119.1730186087&semt=ais_siglip',
    altText: 'ISO 9001:2015 Logo',
    text: 'Adobe Certified Expert (ACE)',
  },
  {
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu6sa8nyvXMTRVmL4K2Ko_etBWA0w234X18wOifwR-I63GviNdXG1lVn-EsS9wz8bMQLA&usqp=CAU',
    altText: 'ISO 14001:2015 Logo',
    text: 'Project Management Professional (PMP)',
  },
  {
    imgSrc: 'https://img.freepik.com/premium-vector/golden-medal-icon-with-ribbon-vector-illustration_118339-457.jpg?ga=GA1.1.2089342119.1730186087&semt=ais_siglip',
    altText: 'OHSAS 18001:2007 Logo',
    text: 'American Advertising Federation (AAF) Certifications',
  },
  {
    imgSrc: 'https://img.freepik.com/free-vector/big-red-award-label-with-star-ribbons_1284-47481.jpg?ga=GA1.1.2089342119.1730186087&semt=ais_siglip',
    altText: 'CB-005-MS Logo',
    text: 'Digital Marketing Institute Certification',
  },
  {
    imgSrc: 'https://img.freepik.com/premium-vector/black-white-logo-with-seal-it_1025827-121049.jpg',
    altText: 'ADNOC Logo',
    text: 'HubSpot Inbound Marketing Certification',
  },
  {
    imgSrc: 'https://img.freepik.com/premium-vector/blank-award-template-rosette-with-golden-red-medal_642210-890.jpg?ga=GA1.1.2089342119.1730186087&semt=ais_siglip',
    altText: 'Bureau Veritas Logo',
    text: 'Google Analytics Certification',
  },
];

const Certifications = () => {
  return (
    <div className="certifications-container">
      <h2 className="certifications-title">Certifications</h2>
      <div className="certifications-list">
        {certificationsData.map((cert, index) => (
          <div className="certification-item" key={index}>
            <img src={cert.imgSrc} alt={cert.altText} className="cert-logo" />
            <p>{cert.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;