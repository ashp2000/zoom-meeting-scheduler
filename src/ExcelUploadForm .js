import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import * as XLSX from 'xlsx';

const ExcelUploadForm = ({ setJsonData }) => {
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      setJsonData(jsonData);
    };
    reader.readAsArrayBuffer(file);
  }, [setJsonData]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="upload-box" {...getRootProps()}>
      <input {...getInputProps()} />
      <button className="upload-button">Upload Excel File</button>
      <p>Drag 'n' drop an Excel file here, or click to select one</p>
    </div>
  );
};

export default ExcelUploadForm;
