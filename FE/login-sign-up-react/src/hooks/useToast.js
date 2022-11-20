export default function useToast() {
    const toastContainer = document.getElementById('snackbar');
  
    const showToast = (message, status) => {
      if (toastContainer) {
        toastContainer.innerText = message;
        if(status === 'success'){
          toastContainer.style.backgroundColor = '#54B435'
        } else if (status === 'fail') {
          toastContainer.style.backgroundColor = 'red'
        }
        toastContainer.className = 'show';
      }
  
      setTimeout(() => { toastContainer.className = toastContainer.className.replace('show', ''); }, 4000);
    };
  
    return [showToast];
  }