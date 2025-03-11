import { useState } from 'react';
import './style.css';

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return <div>TODO: hello there</div>;
}
