import './Toast.css';

interface IToastMessageProps {
    type: string;
    message: string;
    onDismiss: Function;
};

export default function ToastMessage({ type, message, onDismiss }: IToastMessageProps) {
    
    return (
        <div className="toast-container" id="toastContainer">
            <div className={`toast ${type == 'success' ? 'success' : 'failure'}`} id="successToast">
                <div className="toast-content">
                    {/* Crisp inline SVG checkmark icon */}
                    <svg className="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div className="toast-message">
                        <span className="toast-title">{type == 'success' ? 'Success' : 'Failure'}</span>
                        <span className="toast-desc">{message}</span>
                    </div>
                </div>
                {/* Interactive Close Button */}
                <button className="toast-close" onClick={() => onDismiss()}>&times;</button>
                {/* Depleting timed progress bar */}
                <div className={type == "success" ? "toast-progress" : "toast-progress-failure"}></div>
            </div>
        </div>
    )
};

ToastMessage.defaultProps = {
    type: "success",
    message: "Thank you for your inquiry, we will reach out shortly!",
    onDismiss: () => console.log('hello')
};