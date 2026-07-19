import "./EndInterviewModal.css";

function EndInterviewModal({ onCancel, onConfirm }) {
  return (
    <div className="end-modal-overlay">
      <div className="end-modal">

        <h2>End Interview?</h2>

        <p>
          Are you sure you want to end this interview?
          Your current progress will be saved.
        </p>

        <div className="end-modal-actions">

          <button
            className="cancel-btn"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="confirm-end-btn"
            onClick={onConfirm}
          >
            End Interview
          </button>

        </div>

      </div>
    </div>
  );
}

export default EndInterviewModal;