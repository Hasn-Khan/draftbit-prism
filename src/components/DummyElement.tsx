import React, { CSSProperties } from 'react';

interface DummyElementProps {
  margin: { top: string; right: string; bottom: string; left: string };
  padding: { top: string; right: string; bottom: string; left: string };
}

const DummyElement: React.FC<DummyElementProps> = ({ margin, padding }) => {
  const dummyElementStyle: CSSProperties = {
    background: '#ffffff33',
    height: '100px',
    width: '100px',
    margin: `${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px`,
    padding: `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px`,
    border: '1px solid #ffffff33',
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <div style={dummyElementStyle}>
        <h1 style={{ margin: 0 }}>Element</h1>
      </div>
    </div>
  );
};

export default DummyElement;
