const Create = () => {
  return ( 
    <div className="create">
      <form>
      <label>Date:</label>
        <input 
          type="text" 
          required 
        />
      <label>Employee ID:</label>
        <input 
          type="text"
          required 
        />
        <label>First Name:</label>
        <input 
          type="text"
          required 
        />
        <label>Last Name:</label>
        <input 
          type="text"
          required 
        />
        <label>Office:</label>
        <select required>
          <option value="">-- Select --</option>
          <option value="0001 - Boston, MA">0001 - Boston, MA</option>
          <option value="016C - Dover, NH">016C - Dover, NH</option>
          <option value="0412 - South Bend, IN">0412 - South Bend, IN</option>
          <option value="0555 - Tampa, FL">0555 - Tampa, FL</option>
          <option value="0694 - Chandler, AZ">0694 - Chandler, AZ</option>
          <option value="0808 - New Castle, PA">0808 - New Castle, PA</option>
        </select>
        <label>Call Off Reason:</label>
        <select required>
          <option value="">-- Select --</option>
          <option value="ADA (Paid)">ADA (Paid)</option>
          <option value="ADA (Unpaid)">ADA (Unpaid)</option>
          <option value="Bereavement">Bereavement</option>
          <option value="FMLA (Paid)">FMLA (Paid)</option>
          <option value="FMLA (Unpaid)">FMLA (Unpaid)</option>
          <option value="Jury Duty">Jury Duty</option>
          <option value="Lost Time">Lost Time</option>
          <option value="MA PFMLA (Unpaid)">MA PFMLA (Unpaid)</option>
          <option value="State Sick Leave">State Sick Leave</option>
          <option value="STD">STD</option>
          <option value="Tardy">Tardy</option>
          <option value="UPTO">UPTO</option>
          <option value="Vacated - OT">Vacated - OT</option>
          <option value="Other">Other</option>
        </select>
        <label>Comments:</label>
        <textarea></textarea>
        <button>Submit</button>
      </form>
    </div>
   );
}
 
export default Create;