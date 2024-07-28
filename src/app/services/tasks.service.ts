import { Injectable } from '@angular/core';
import { Task } from '../types/task';
import { NewTask } from '../types/newTask';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basics and advanced features of Angular & how to apply them',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Build a REST API',
      summary: 'Design and implement a RESTful API using Node.js and Express',
      dueDate: '2025-02-14',
    },
    {
      id: 't3',
      title: 'Learn AWS',
      userId: 'u1',
      summary: 'Explore Amazon Web Services for cloud computing',
      dueDate: '2025-06-15',
    },
    {
      id: 't4',
      userId: 'u2',
      title: 'Build a React App',
      summary: 'Create a full-stack React application with a robust backend',
      dueDate: '2024-11-15',
    },
    {
      id: 't5',
      userId: 'u2',
      title: 'Learn TypeScript',
      summary: "Understand TypeScript's type system and improve code quality",
      dueDate: '2024-10-01',
    },
    {
      id: 't6',
      userId: 'u2',
      title: 'Master Docker',
      summary: 'Learn containerization with Docker for efficient development',
      dueDate: '2024-12-10',
    },
    {
      id: 't7',
      userId: 'u3',
      title: 'Learn Node.js',
      summary: 'Master the fundamentals of Node.js for server-side development',
      dueDate: '2024-09-30',
    },
    {
      id: 't8',
      userId: 'u3',
      title: 'Master SQL',
      summary: 'Become proficient in SQL for database management',
      dueDate: '2025-01-31',
    },
    {
      id: 't9',
      userId: 'u4',
      title: 'Explore Vue.js',
      summary: 'Dive into the world of Vue.js and build interactive UIs',
      dueDate: '2025-03-20',
    },
    {
      id: 't10',
      userId: 'u4',
      title: 'Explore MongoDB',
      summary: 'Learn NoSQL with MongoDB for flexible data storage',
      dueDate: '2024-11-30',
    },
    {
      id: 't11',
      userId: 'u5',
      title: 'Master Python',
      summary:
        'Become proficient in Python programming for data science and web development',
      dueDate: '2024-12-25',
    },
    {
      id: 't12',
      userId: 'u5',
      title: 'Learn Git',
      summary: 'Master version control with Git for efficient collaboration',
      dueDate: '2024-09-15',
    },
    {
      id: 't13',
      userId: 'u6',
      title: 'Learn JavaScript',
      summary: 'Solidify your JavaScript foundation for front-end development',
      dueDate: '2024-08-15',
    },
    {
      id: 't14',
      userId: 'u6',
      title: 'Build a Full-Stack App',
      summary: 'Create a complete web application with front-end and back-end',
      dueDate: '2025-04-30',
    },
  ];

  getUserTask(userId: string): Task[] {
    return this.tasks.filter((task: Task) => task.userId === userId);
  }

  addTask(newTask: NewTask, userId: string): void {
    this.tasks.unshift({
      id: `u${this.tasks.length}`,
      userId: userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    });
  }

  removeTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  constructor() {}
}
