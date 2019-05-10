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
    return await this.tasks.find({_id: new ObjectId(id)}).toArray();
  }

  async deleteTask(id: string) {
    await this.tasks.deleteOne({ _id: new ObjectId(id) });
  }
  
  async createOrder(name: string) {
    await this.tasks.insertOne({ name });
  }


  
}