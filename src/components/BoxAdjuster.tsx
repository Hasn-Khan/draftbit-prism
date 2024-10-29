import React, { useState, CSSProperties } from 'react';
import DummyElement from './DummyElement';

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
    maxWidth: '100%', // Ensures inputs don’t overflow
    textAlign: 'center',
    color: '#1a1b26',
    borderRadius: '5px',
  };

  return (
    <div style={{ background: '#1a1b26', padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '100%' }}>
      <div style={{ color: 'white', marginBottom: '20px' }}>Margin</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', width: '100%', marginBottom: '20px' }}>
        <input
          value={margin.top}
          onChange={e => updateValue(setMargin, 'top', e.target.value)}
          style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', ...inputStyle }}
        />
        <input
          value={margin.right}
          onChange={e => updateValue(setMargin, 'right', e.target.value)}
          style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', ...inputStyle }}
        />
        <input
          value={margin.bottom}
          onChange={e => updateValue(setMargin, 'bottom', e.target.value)}
          style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', ...inputStyle }}
        />
        <input
          value={margin.left}
          onChange={e => updateValue(setMargin, 'left', e.target.value)}
          style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', ...inputStyle }}
        />
      </div>

      <div style={{ color: 'white', marginBottom: '10px', marginTop: '20px' }}>Padding</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', width: '100%', marginBottom: '20px' }}>
        <input
          value={padding.top}
          onChange={e => updateValue(setPadding, 'top', e.target.value)}
          style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', ...inputStyle }}
        />
        <input
          value={padding.right}
          onChange={e => updateValue(setPadding, 'right', e.target.value)}
          style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', ...inputStyle }}
        />
        <input
          value={padding.bottom}
          onChange={e => updateValue(setPadding, 'bottom', e.target.value)}
          style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', ...inputStyle }}
        />
        <input
          value={padding.left}
          onChange={e => updateValue(setPadding, 'left', e.target.value)}
          style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', ...inputStyle }}
        />
      </div>

      <DummyElement margin={margin} padding={padding} />
    </div>
  );
};

export default BoxAdjuster;
