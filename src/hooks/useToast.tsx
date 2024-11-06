import { toast } from 'react-hot-toast';

const useToast = () => {
  const showSuccess = (message: string) => {
    toast.success(message, {
      duration: 6000,
      position: 'top-right',
      style: {
        borderRadius: '1rem',
        background: '#fff',
        color: '#000',
      },
    });
  };

  const showError = (message: string) => {
    toast.error(message, {
      duration: 4000,
      position: 'top-right',
      style: {
        borderRadius: '10px',
        background: '#F44336',
        color: '#fff',
      },
    });
  };

  const showInfo = (message: string) => {
    toast(message, {
      duration: 4000,
      position: 'top-right',
      style: {
        borderRadius: '10px',
        background: '#2196F3',
        color: '#fff',
      },
    });
  };

  return {
    showSuccess,
    showError,
    showInfo,
  };
};

export default useToast;
