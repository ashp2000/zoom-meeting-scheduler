import React, { useState } from 'react';
import ExcelUploadForm from './ExcelUploadForm ';

const App = () => {
  const [jsonData, setJsonData] = useState(null);

  const handleSendInvite = (email) => {
    // Logic to send invite to the provided email address
    console.log('Sending invite to:', email);
  };

  return (
    <div>
      <h1>Excel to JSON Converter</h1>
      <ExcelUploadForm setJsonData={setJsonData} />
      {jsonData && (
        <div>
          <h2>JSON Data</h2>
          <table>
            <thead>
              <tr>
                {Object.keys(jsonData[0]).map(key => (
                  <th key={key}>{key}</th>
                ))}
                <th>Send Invite</th>
              </tr>
            </thead>
            <tbody>
              {jsonData.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, idx) => (
                    <td key={idx}>{value}</td>
                  ))}
                  <td>
                    <button onClick={() => handleSendInvite(row.email)}>Send Invite</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
