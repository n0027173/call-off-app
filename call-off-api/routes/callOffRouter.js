/* eslint-disable no-param-reassign */
const express = require("express");
const callOffsController = require("../controllers/callOffsController");

function routes(CallOff) {
  const callOffRouter = express.Router();
  const controller = callOffsController(CallOff);
  callOffRouter.route("/callOffs").post(controller.post).get(controller.get);
  callOffRouter.use("/callOffs/:callOffId", (req, res, next) => {
    CallOff.findById(req.params.callOffId, (err, callOff) => {
      if (err) {
        return res.send(err);
      }
      if (callOff) {
        req.callOff = callOff;
        return next();
      }
      return res.sendStatus(404);
    });
  });
  callOffRouter
    .route("/callOffs/:callOffId")
    .get((req, res) => {
      const returnCallOff = req.callOff.toJSON();

      // returnCallOff.links = {};
      // const callOffReason = req.callOff.callOffReason.replace(' ', '%20');
      // const callOffReason = req.callOff.callOffReason;
      // returnCallOff.links.FilterByThisCallOffReason = `http://${req.headers.host}/api/callOffs/?callOffReason=${callOffReason}`;
      res.json(returnCallOff);
    })
    .put(async (req, res) => {
      const updatedRecord = await CallOff.findOneAndUpdate(req.params.callOffId,{
       dateTimeSubmitted : req.body.dateTimeSubmitted,
       callOffDate : req.body.callOffDate,
       employeeID : req.body.employeeID,
       lastName : req.body.lastName,
       firstName : req.body.firstName,
       office : req.body.office,
       callOffReason : req.body.callOffReason,
       comments : req.body.comments,
       IEXUpdated : req.body.IEXUpdated,
      }, {upsert: true}
      
      )    
      
      res.status(201).json({callOff: updatedRecord});
    })
    .patch((req, res) => {
      const { callOff } = req;
      // eslint-disable-next-line no-underscore-dangle
      if (req.body._id) {
        // eslint-disable-next-line no-underscore-dangle
        delete req.body._id;
      }
      Object.entries(req.body).forEach((item) => {
        const key = item[0];
        const value = item[1];
        callOff[key] = value;
      });
      callOff.save((err) => {
        if (err) {
          return res.send(err);
        }
        return res.json(callOff);
      });
    })
    .delete((req, res) => {
      req.callOff.remove((err) => {
        if (err) {
          return res.send(err);
        }
        return res.sendStatus(204);
      });
    });

  return callOffRouter;
}

module.exports = routes;
