function callOffsController(CallOff) {
  function post(req, res) {
    const callOff = new CallOff(req.body);
    if (!req.body.lastName) {
      res.status(400);
      return res.send('Last Name is required');
    }
    callOff.save();
    res.status(201);
    return res.json(callOff);
  }
  function get(req, res) {
    const query = {};
    if (req.query.callOffReason) {
      query.callOffReason = req.query.callOffReason;
    }
    CallOff.find(query, (err, callOffs) => {
      if (err) {
        return res.send(err);
      }
      const returnCallOffs = callOffs.map((callOff) => {
        const newCallOff = callOff.toJSON();
        newCallOff.links = {};
        newCallOff.links.self = `http://${req.headers.host}/api/callOffs/${callOff._id}`;
        return newCallOff;
      });
      return res.json(returnCallOffs);
    });
  }
  return { post, get };
}

module.exports = callOffsController;
