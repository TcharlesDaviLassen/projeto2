import LogModel from '../models/Logs';

class LogsController {

  index = async (req: any, res: { json: (arg0: any) => void; }, next: any) => {
    const logs = await LogModel.findAll({});
    res.json(logs);
  }

  create = async (req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: any; }): void; new(): any; }; }; }, next: any) => {
    try {
      await LogModel.create(req);
    } catch (error) {
      res.status(400).json({ error: error.message });
      // res.json({error : error.message})
    }
  }

  _validateData = async (data: { [x: string]: any; }, id: any) => {
    const attributes = ['action', 'method'];
    const log = {};
    for (const attribute of attributes) {
      log[attribute] = data[attribute];
    }
    return log;
  }

}

module.exports = new LogsController();