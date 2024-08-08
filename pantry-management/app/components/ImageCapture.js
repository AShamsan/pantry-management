'use client';

import React, { useCallback, useState } from 'react';
import Webcam from 'react-webcam';
import { Button, Container } from '@mui/material';
import { storage } from '../../firebase';  // Corrected import path
import { ref, uploadString } from 'firebase/storage';

const ImageCapture = () => {
  const webcamRef = React.useRef(null);
  const [image, setImage] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef]);

  const uploadImage = async () => {
    if (image) {
      const storageRef = ref(storage, `pantry/${Date.now()}.jpg`);
      await uploadString(storageRef, image, 'data_url');
      alert('Image uploaded successfully');
      setImage(null);
    }
  };

  return (
    <Container sx={{ mt: 3 }}>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <Button variant="contained" color="primary" onClick={capture} sx={{ mt: 2 }}>
        Capture
      </Button>
      {image && (
        <div>
          <img src={image} alt="Captured" style={{ marginTop: 20 }} />
          <Button variant="contained" color="secondary" onClick={uploadImage} sx={{ mt: 2 }}>
            Upload Image
          </Button>
        </div>
      )}
    </Container>
  );
};

export default ImageCapture;
