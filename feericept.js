
import { useState } from 'react';
import './App.css';
import DownloadPDFButton from './DownloadPDFButton';

function App() {
  const [formData, setFormData] = useState({
    rollNo: '222a3065',
    studentName: 'Arshad',
    class: 'it',
    receiptDate: '20/12/2025',
    tuitionFees: '2000',
    developmentFees: '2000',
    examFees: '2000',
    miscellaneousFees: '2000',
    refno: '07',
    receiptNo: '20/12/2013',
  });

  const calculateTotalFees = () => {
    return (
      Number(formData.tuitionFees) +
      Number(formData.developmentFees) +
      Number(formData.examFees) +
      Number(formData.miscellaneousFees)
    );
  };


  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  return (
    <div>
    <div id="pdf-content">
    <div className="header">
      <img src='/sieslogo.jpeg' alt='SIES Logo' className="logo" />
      <div className="info">
        <h1>The South Indian Education Society</h1>
        <p>SIES Graduate School of Technology</p>
        <p>Sri Chandrasekarendra Saraswati Vidyapuram Sector-V, Nerul, Navi Mumbai, Maharashtra 400706</p>
        <p>Fee Receipt (Student Copy - Original)</p>
      </div>
    </div>
      <div className='body'>
        <form onSubmit={handleSubmit} style={{margin:'50px'}}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px' }}>
            <span style={{ fontWeight: 'bold', flex: '1' }}>Roll No:</span>
            <span style={{ flex: '1', textAlign: 'left' }}>{formData.rollNo}</span>
            <span style={{ fontWeight: 'bold', flex: '1' }}>Receipt Date:</span>
            <span style={{ flex: '1', textAlign: 'left' }}>{formData.receiptDate}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px' }}>
            <span style={{ fontWeight: 'bold', flex: '1' }}>Student Name:</span>
            <span style={{ flex: '1', textAlign: 'left' }}>{formData.studentName}</span>
            <span style={{ fontWeight: 'bold', flex: '1' }}>Ch.No/Neft Ref No:</span>
            <span style={{ flex: '1', textAlign: 'left' }}>{formData.refno}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px' }}>
            <span style={{ fontWeight: 'bold', flex: '1' }}>Class:</span>
            <span style={{ flex: '1', textAlign: 'left' }}>{formData.class}</span>
            <span style={{ fontWeight: 'bold', flex: '1' }}>Receipt No:</span>
            <span style={{ flex: '1', textAlign: 'left' }}>{formData.receiptNo}</span>
          </div>
          <div style={{ border: '2px solid ', padding:'10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px' }}>
              <span style={{ fontWeight: 'bold', flex: '1' }}>S.No</span>
              <span style={{ fontWeight: 'bold', flex: '1' }}>Particulars</span>
              <span style={{ fontWeight: 'bold', flex: '1' }}>Amount</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px' }}>
              <span style={{ flex: '1' }}>1</span>
              <span style={{ flex: '1' }}>Tuition Fees</span>
              <span style={{ flex: '1' }}>{formData.tuitionFees}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px' }}>
              <span style={{ flex: '1' }}>2</span>
              <span style={{ flex: '1' }}>Development Fees</span>
              <span style={{ flex: '1' }}>{formData.developmentFees}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px' }}>
              <span style={{ flex: '1' }}>3</span>
              <span style={{ flex: '1' }}>Exam Fees</span>
              <span style={{ flex: '1' }}>{formData.examFees}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px' }}>
              <span style={{ flex: '1' }}>4</span>
              <span style={{ flex: '1' }}>Miscellaneous Fees</span>
              <span style={{ flex: '1' }}>{formData.miscellaneousFees}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px', fontWeight: 'bold' }}>
              <span style={{ flex: '2' }}>Total</span>
              <span style={{ flex: '1' }}>{calculateTotalFees()}</span>
            </div>
          </div>
          <p>Signature</p>
          <p>(Account by : Vijayalakshami )</p>
        </form>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '50px' }}>
            <DownloadPDFButton formContent={'pdf-content'} />
            <button style={{background:'#E28C41',border: '1px solid #E28C41',}}>Next</button>
          </div>
    </div>
  );
}

export default App;
