function CallOffDetails() {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Call Off</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Zip</th>
          </tr>
        </thead>
        <tbody>
          {filterParksByLocation[0]
            ? filterParksByLocation.map((parkData) => (
                <tr key={parkData.LocationID}>
                  <th scope="row">{parkData.LocationName}</th>
                  <td>{parkData.Address}</td>
                  <td>{parkData.City}</td>
                  <td>{parkData.State}</td>
                  <td>{parkData.ZipCode}</td>
                </tr>
              ))
            : filterParksByType.map((parkData) => (
                <tr key={parkData.LocationID}>
                  <th scope="row">{parkData.LocationName}</th>
                  <td>{parkData.Address}</td>
                  <td>{parkData.City}</td>
                  <td>{parkData.State}</td>
                  <td>{parkData.ZipCode}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default CallOffDetails;