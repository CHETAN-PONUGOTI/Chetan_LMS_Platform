import React from 'react';
import { downloadCertificateApi } from '../../api/resultService';

function CertificateButton({ resultId, canDownload }) {
  if (!canDownload) return null;
  return <button onClick={() => downloadCertificateApi(resultId)}>Download Certificate</button>;
}
export default CertificateButton;