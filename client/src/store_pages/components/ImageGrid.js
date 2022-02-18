import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import { Spinner } from 'react-bootstrap';

const ImageGrid = ({ provider_Name, setSelectedImg }) => {


  const { docs } = useFirestore(provider_Name);

  return (
    <div className="img-grid">
      {!docs && <Spinner animation="border"/>}
      {docs && docs.map((doc, index) => (
        <div className="img-wrap" key={index} 
          layout
          whileHover={{ opacity: 1 }}s
          onClick={() => setSelectedImg(doc.url)}
        >
          <img src={doc.url} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </div>
      ))}
    </div>
  )
}

export default ImageGrid;