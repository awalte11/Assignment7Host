import { Collection, MongoClient, ObjectId } from 'mongodb';
import * as dotenv from 'dotenv';
dotenv.config();

const URL = process.env.URL || '';

export class TasksDatastore {
  tasks: Collection;

  constructor(client: MongoClient) {
    this.tasks = client.db().collection('tasks');
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
  /*
  async createOrder(name: string) {
    await this.orders.insertOne({ name });
  }

  async deleteOrder(id: string) {
    await this.orders.deleteOne({ _id: new ObjectId(id) });
  }
  */
}