// lib/app.ts
import { MongoClient } from "mongodb";
import { TasksDatastore } from "./datastore";
import * as express from 'express';
import * as morgan from 'morgan';
import { Request, Response } from 'express';

const bodyParser = require('body-parser');




  
  

TasksDatastore
  .connect()
  .then((client: MongoClient) => {
    const tasksDatastore = new TasksDatastore(client);
    startServer(tasksDatastore);
  })
  .catch(error => {
    console.error("Uh-oh, couldn't connect to Mongo", error);
    process.exit();
  });
  



function startServer(tasksDatastore: TasksDatastore) {


  var app = express();

  var port = process.env.PORT || 5000;
  
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });//Why is this up here? Because heroku explodes if it's not. r

 
  
  app.use(morgan('dev'));

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  
  app.get('/api/tasks/:id', async (request: Request, response: Response) => {
    const id = request.params.id;
    try {
      const task = await tasksDatastore.readOneTask(id);
      response.json({ task });
      } catch (error) {
      
        response.status(404).json({
          "paramaterName" : "id",
          "paramaterValue" : id,   
          "errorText" : "No task for this id."
      }).send();
    }
  });

  app.get('/api/tasks', async (request: Request, response: Response) => {
    const tasks = await tasksDatastore.readAllTasks();
    
    response.json({ tasks });
  });


  
  
  app.get('/', function (req, res) {
    res.send('Hello World!, Server is running on port ${port}');
  });

  app.post('/api/tasks', async (request, response) => {
    const description = request.body.description;
    if(!description || description == "" )// doing this here to catch empty descriptions
    {
      response.status(400).json({
            "paramaterName" : "description",
            "paramaterValue" : null,
            "errorText" : "Description must not be null or empty."
        })
    }
    else {
      
        var out = await tasksDatastore.createTask(description);
        console.log (out._id);
        
        response.status(201).json({
          "ID" : out._id

        }) 
         
      
    }
  });
  
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