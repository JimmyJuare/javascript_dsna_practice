function debounce(func, wait) {
    let timeout;

    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Example usage
const logMessage = () => console.log('Function executed');
const debouncedLogMessage = debounce(logMessage, 2000);
debouncedLogMessage();
debouncedLogMessage();
debouncedLogMessage(); // Only the last call will be executed after 2 seconds
