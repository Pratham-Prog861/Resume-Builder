import { useReactToPrint } from 'react-to-print';

export const usePrintResume = () => {
  const handlePrint = useReactToPrint({});

  return handlePrint;
}; 