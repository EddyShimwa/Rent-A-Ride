
import PropTypes from 'prop-types';


const Modal = ({ isOpen, onCancel, onConfirm }) => (
  <>
    {isOpen && (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Are you sure to proceed?</h2>
        <div className="modal-buttons">
          <button type="button" className="modal-cancel" onClick={onCancel}>
            Cancel
          </button>
          <button type="button" className="modal-confirm" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
    )}
  </>

);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default Modal;
