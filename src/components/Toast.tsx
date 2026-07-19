import './Toast.css';

interface IToastMessageProps {
    type: string;
    message: string;
    onDismiss: Function;
};

export default function ToastMessage({ message, onDismiss }: IToastMessageProps) {
    
    return (
        <div className={`toast-container`} id="toastContainer">
            <div className="toast success" id="successToast">
                <div className="toast-content">
                    {/* <!-- Crisp inline SVG checkmark icon --> */}
                    <svg className="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div className="toast-message">
                        <span className="toast-title">Success</span>
                        <span className="toast-desc">{message}</span>
                    </div>
                </div>
                {/* <!-- Interactive Close Button --> */}
                <button className="toast-close" onClick={() => onDismiss()}>&times;</button>
                {/* <!-- Depleting timed progress bar --> */}
                <div className="toast-progress"></div>
            </div>
        </div>
    )
};

ToastMessage.defaultProps = {
    type: "success",
    message: "Thank you for your inquiry, we will reach out shortly!",
    onDismiss: () => console.log('hello')
};