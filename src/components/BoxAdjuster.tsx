import React, { useState, CSSProperties } from 'react';

const BoxAdjuster: React.FC = () => {
  const [margin, setMargin] = useState({ top: '50', right: '50', bottom: '50', left: '50' });
  const [padding, setPadding] = useState({ top: '10', right: '10', bottom: '10', left: '10' });

  const updateValue = (
    setter: React.Dispatch<React.SetStateAction<typeof margin | typeof padding>>,
    side: 'top' | 'right' | 'bottom' | 'left',
    value: string
  ) => {
    setter(prev => ({ ...prev, [side]: value }));
  };

  const inputStyle: CSSProperties = {
    width: '60px',
    textAlign: 'center',
    color: '#1a1b26',
    borderRadius: '5px',
  };

  const dummyElementStyle: CSSProperties = {
    background: '#ffffff33',
    height: '100px',
    width: '100px',
    margin: `${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px`,
    padding: `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px`,
    border: '1px solid #ffffff33',
  };

  return (
    <div style={{ background: '#1a1b26', padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ color: 'white', marginBottom: '20px' }}>Margin</div>
      <div style={{ position: 'relative', width: '400px', height: '300px' }}>
        <input
          value={margin.top}
          onChange={e => updateValue(setMargin, 'top', e.target.value)}
          style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', ...inputStyle }}
        />
        <input
          value={margin.right}
          onChange={e => updateValue(setMargin, 'right', e.target.value)}
          style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', ...inputStyle }}
        />
        <input
          value={margin.bottom}
          onChange={e => updateValue(setMargin, 'bottom', e.target.value)}
          style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', ...inputStyle }}
        />
        <input
          value={margin.left}
          onChange={e => updateValue(setMargin, 'left', e.target.value)}
          style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', ...inputStyle }}
        />

        <div
          style={{
            position: 'absolute',
            top: '50px',
            left: '50px',
            right: '50px',
            bottom: '50px',
            border: '1px solid #ffffff33',
          }}
        >
          <div style={{ color: 'white', position: 'absolute', top: '-30px', left: '0' }}>Padding</div>
          <input
            value={padding.top}
            onChange={e => updateValue(setPadding, 'top', e.target.value)}
            style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', ...inputStyle }}
          />
          <input
            value={padding.right}
            onChange={e => updateValue(setPadding, 'right', e.target.value)}
            style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', ...inputStyle }}
          />
          <input
            value={padding.bottom}
            onChange={e => updateValue(setPadding, 'bottom', e.target.value)}
            style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', ...inputStyle }}
          />
          <input
            value={padding.left}
            onChange={e => updateValue(setPadding, 'left', e.target.value)}
            style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', ...inputStyle }}
          />
        </div>
      </div>
      <div style={{ marginTop: '40px' }}>
        <div style={{ color: 'white', marginBottom: '10px' }}>Dummy Element</div>
        <div style={dummyElementStyle}>
            <h1>Element</h1>
        </div>
      </div>
    </div>
  );
};

export default BoxAdjuster;
