import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons';

function Certificate({ onClose }) {
  const cld = new Cloudinary({ cloud: { cloudName: 'dh7q7dmi8' } });
  const imageIds = [
    'HTML_CSS_and_JavaScript_rxu9s7',
    'React_ufn9ra',
    'Node_and_Express_js_taprps',
    'Buisness_analyst_and_process_managment_sfyvb4',
    '20240514_194156_tt8rhs'
  ];
  const images = imageIds.map((id) => {
    const img = cld
      .image(id)
      .format('auto')
      .quality('auto:best')
      .resize(auto().gravity(autoGravity()).width(800).height(600));
    const cleanId = id.slice(0, -6);
    const title = cleanId.replace(/_/g, ' ');
    return { img, title };
  });
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Certificates</h2>
        <div className="image-grid">
          {images.map((item, index) => (
            <div key={index} className="image-item" style={{ textAlign: 'center' }}>
              <AdvancedImage cldImg={item.img} />
              <p style={{ marginTop: '8px', fontSize: '14px' }}>{item.title} Certificate</p>
            </div>
          ))}
             
        </div>
        
      </div>
      <button className="close-btn"onClick={onClose}><FontAwesomeIcon icon={faCircleXmark} size='3x' /></button>
      
    </div>
  );
}

export default Certificate;
