const AdminReport = () => {
  return ( <div className="AdminReport">
             <table className="table table-striped">
            <thead>
              <tr>
              <th scope="col"></th>
                <th scope="col">Call Off Date</th>
                <th scope="col">Employee</th>
                <th scope="col">Reason</th>
                <th scope="col">IEX Updated</th>
                <th scope="col">Date Submitted</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {/* {filtercallOffsByLocation[0]
                ? filtercallOffsByLocation.map((callOffData) => ( */}
                    <tr key="">
                    <th scope="row" style={{textAlign:"center"}}><img
                      className="editIcon"
                      height="22px"
                      width="22px"
                      src="../assets/edit.png"
                      alt="Edit Record" /></th>
                      <td>08/24/2023</td>
                      <td>Thouvenin, Shannon</td>
                      <td>Lost Time</td>
                      <td>No</td>
                      <td>08/23/2023</td>
                      <td><img
                      className="deleteIcon"
                      height="22px"
                      width="22px"
                      src="../assets/delete.png"
                      alt="Delete Record" /></td>
                    </tr>
                    <tr>
                    <th scope="row" style={{textAlign:"center"}}><img
                      className="editIcon"
                      height="22px"
                      width="22px"
                      src="../assets/edit.png"
                      alt="Edit Record" /></th>
                      <td>08/23/2023</td>
                      <td>Roache, James</td>
                      <td>Jury Duty</td>
                      <td>No</td>
                      <td>08/23/2023</td>
                      <td><img
                      className="deleteIcon"
                      height="22px"
                      width="22px"
                      src="../assets/delete.png"
                      alt="Delete Record" /></td>
                    </tr> 
                    <tr>
                    <th scope="row" style={{textAlign:"center"}}><img
                      className="editIcon"
                      height="22px"
                      width="22px"
                      src="../assets/edit.png"
                      alt="Edit Record" /></th>
                      <td>08/22/2023</td>
                      <td>Allen, Stacy</td>
                      <td>FMLA</td>
                      <td>No</td>
                      <td>08/22/2023</td>
                      <td><img
                      className="deleteIcon"
                      height="22px"
                      width="22px"
                      src="../assets/delete.png"
                      alt="Delete Record" /></td>
                    </tr>         
                  {/* )) */}
                {/* : filtercallOffsByType.map((callOffData) => ( */}
                  {/* ))} */}
            </tbody>
          </table>
    </div> );
}
 
export default AdminReport;