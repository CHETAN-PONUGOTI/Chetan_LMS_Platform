import api from './api';
import fileSaver from 'file-saver';

export const submitAnswers = (payload) => api.post('/results/submit', payload);

export const downloadCertificateApi = async (resultId) => {
  try {
    const response = await api.get(`/certificate/${resultId}`, { responseType: 'blob' });
    fileSaver.saveAs(response.data, `certificate-${resultId}.pdf`);
  } catch (error) {
    console.error("Error downloading certificate", error);
    alert("Failed to download certificate. You may not have passed the quiz.");
  }
};