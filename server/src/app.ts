// lib/app.ts
import { MongoClient } from "mongodb";
import { TasksDatastore } from "./datastore";
import * as express from 'express';
import * as morgan from 'morgan';
import { Request, Response } from 'express';

const bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });//Why is this up here? Because heroku explodes if it's not. 




    
  

TasksDatastore
  .connect()
  .then((client: MongoClient) => {
    const tasksDatastore = new TasksDatastore(client);
    startServer(tasksDatastore);
  });
  
  app.get('/', function (req, res) {
    res.send('Hello World!, Server is running on port ${port}');
  });

function startServer(tasksDatastore: TasksDatastore) {





  
  app.use(morgan('dev'));

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  

  
  

  
}
 
  

/*import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes";
import * as mongoose from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config();



class App {

    public app: express.Application;
    public mongoUrl: string = process.env.URL + 'homework?retryWrites=true';//causes it to look to the proper databse on a mongo setup

    public routePrv: Routes = new Routes();

    //The below just build things
    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();           
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);    
    }

}

export default new App().app;*/