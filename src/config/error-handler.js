const ErrorHandler = (error) => {
    if (error && error.response && error.response.status === 401) {
      window.localStorage.removeItem('accessToken');
      window.location.replace('/');
    }
  };
  
  export default ErrorHandler;