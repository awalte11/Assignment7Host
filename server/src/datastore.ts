import { Collection, MongoClient, ObjectId } from 'mongodb';
import * as dotenv from 'dotenv';
dotenv.config();

const URL = process.env.URL || '';


export class TasksDatastore {
  database;
  tasks: Collection;

  constructor(client: MongoClient) {

    this.database = client.db("")
    this.tasks = client.db("homework").collection('tasks');
  }
  
  static async connect() {
    return new Promise<MongoClient>((resolve, reject) =>
      MongoClient.connect(URL, async (err: Error, client: MongoClient) => {
        if (err) {
          reject(err);
        }
        resolve(client);
      }));
  }

  async readAllTasks() {
    return await this.tasks.find({}).toArray();
  }

  
  async readOneTask(id: string) {
    try {
    return await this.tasks.find({_id: new ObjectId(id)}, function(err, result) {
      if (err) return err;
      else return result;
      }).toArray();
      
    }
    catch
    {

    }
  }

  async deleteTask(id: string) {
    const test = await this.tasks.deleteOne({ _id: new ObjectId(id) });
    console.log(test);
  }
  
  async createTask(descriptionIn: string) {
    var now = new Date();
    console.log(now);
    var newTask = {
      description : descriptionIn,
      isComplete : false,
      dateCreated : now,
      dateCompleted : null

    }
    var test = await this.tasks.insertOne({ newTask });
    return test.ops[0];
  }


  
}